import { login, register } from './api/auth.js';
import { createSession, getSessionsByPlayer } from './api/sessions.js';
import { getPlayerStats } from './api/stats.js';
import { getPlayerDashboard } from './api/dashboard.js';

// auth elements
const authSection = document.getElementById('auth');
const welcomeCard = document.getElementById('welcome');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showLoginBtn = document.getElementById('showLoginBtn');
const showRegisterBtn = document.getElementById('showRegisterBtn');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginBtn = document.getElementById('loginBtn');
const regFirstName = document.getElementById('regFirstName');
const regLastName = document.getElementById('regLastName');
const regEmail = document.getElementById('regEmail');
const regPassword = document.getElementById('regPassword');
const registerBtn = document.getElementById('registerBtn');
const authFeedback = document.getElementById('authFeedback');

// upload elements
const dropMessage = document.getElementById('dropMessage');

// main app elements
const appMain = document.getElementById('app-main');
const videoFileInput = document.getElementById('videoFile');
const analyseVideoBtn = document.getElementById('analyseVideoBtn');
const videoPreview = document.getElementById('videoPreview');

const feedbackDiv = document.getElementById('feedback');
const angleSpan = document.getElementById('angle');
const speedSpan = document.getElementById('speed');
const accuracySpan = document.getElementById('accuracy');
const historyList = document.getElementById('history');

let history = [];
let currentUser = null;

const welcomeText = document.getElementById('welcomeText');
const logoutBtn = document.getElementById('logoutBtn');

function saveUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

function loadUser() {
  const raw = localStorage.getItem('currentUser');
  if (raw) {
    try {
      currentUser = JSON.parse(raw);
    } catch {}
  }
}

function showAuth() {
  authSection.style.display = '';
  appMain.style.display = 'none';
}

function showWelcome() {
  welcomeCard.style.display = '';
  loginForm.style.display = 'none';
  registerForm.style.display = 'none';
}

function showLogin() {
  welcomeCard.style.display = 'none';
  loginForm.style.display = '';
  registerForm.style.display = 'none';
}

function showRegister() {
  welcomeCard.style.display = 'none';
  loginForm.style.display = 'none';
  registerForm.style.display = '';
}

function showMain() {
  authSection.style.display = 'none';
  appMain.style.display = '';
  if (currentUser) welcomeText.textContent = `Angemeldet als ${currentUser.firstName || ''} ${currentUser.lastName || ''}`;
  loadUserData();
}

async function loadUserData() {
  if (!currentUser) return;
  try {
    const sessions = await getSessionsByPlayer(currentUser.id);
    if (Array.isArray(sessions)) {
      history = sessions.map((s) => ({
        feedback: s.metrics?.feedback || '—',
        angle: s.metrics?.angle || '—',
        speed: s.metrics?.speed || '—',
        date: s.date || s.createdAt || '—',
      }));
      renderHistory();
    }
  } catch (e) {
    console.warn('Sessions konnten nicht geladen werden', e);
  }
  try {
    const stats = await getPlayerStats(currentUser.id);
    const dash = await getPlayerDashboard(currentUser.id);
    if (dash && dash.summary) feedbackDiv.textContent = dash.summary;
    else if (stats && stats.accuracy !== undefined)
      feedbackDiv.textContent = `Treffer: ${stats.accuracy}%`;
  } catch (e) {
    console.debug('Stats/Dashboard nicht verfügbar', e);
  }
}

showLoginBtn.addEventListener('click', showLogin);
showRegisterBtn.addEventListener('click', showRegister);
switchToRegister.addEventListener('click', (e) => { e.preventDefault(); showRegister(); });
switchToLogin.addEventListener('click', (e) => { e.preventDefault(); showLogin(); });

loginBtn.addEventListener('click', async () => {
  const email = loginEmail.value.trim();
  const pw = loginPassword.value;
  if (!email || !pw) {
    authFeedback.textContent = 'Bitte E-Mail und Passwort eingeben.';
    return;
  }
  try {
    const res = await login(email, pw);
    if (res && res.success && res.data) {
      currentUser = res.data;
      saveUser(currentUser);
      authFeedback.textContent = '';
      showMain();
    } else {
      authFeedback.textContent = res?.message || 'Login fehlgeschlagen';
    }
  } catch (e) {
    // backend liefert ApiResponse JSON bei 400/500, sonst e.body may be plain text
    let msg = 'Fehler beim Login';
    if (e.body) {
      try {
        const parsed = JSON.parse(e.body);
        msg = parsed.message || JSON.stringify(parsed);
      } catch {
        msg = e.body;
      }
    } else if (e.message && e.message.toLowerCase().includes('failed to fetch')) {
      msg = 'Backend nicht erreichbar';
    }
    authFeedback.textContent = msg;
    console.error('Login error', e);
  }
});

registerBtn.addEventListener('click', async () => {
  const first = regFirstName.value.trim();
  const last = regLastName.value.trim();
  const email = regEmail.value.trim();
  const pw = regPassword.value;
  if (!first || !last || !email || !pw) {
    authFeedback.textContent = 'Alle Felder ausfüllen';
    return;
  }
  try {
    const res = await register(first, last, email, pw);
    if (res && res.success && res.data) {
      currentUser = res.data;
      saveUser(currentUser);
      authFeedback.textContent = '';
      showMain();
    } else {
      authFeedback.textContent = res?.message || 'Registrierung fehlgeschlagen';
    }
  } catch (e) {
    let msg = 'Fehler bei der Registrierung';
    if (e.body) {
      try {
        const parsed = JSON.parse(e.body);
        msg = parsed.message || JSON.stringify(parsed);
      } catch {
        msg = e.body;
      }
    } else if (e.message && e.message.toLowerCase().includes('failed to fetch')) {
      msg = 'Backend nicht erreichbar';
    }
    authFeedback.textContent = msg;
    console.error('Registrierungsfehler', e);
  }
});

const feedbackOptions = [
  'Perfekter Wurf!',
  'Etwas zu flach!',
  'Guter Winkel!',
  'Etwas zu langsam!',
  'Sehr gute Geschwindigkeit!',
  'Handhaltung verbessern!',
];

analyseVideoBtn.addEventListener('click', async () => {
  const file = videoFileInput.files[0];
  if (!file) {
    alert('Bitte ein Video auswählen');
    return;
  }
  const url = URL.createObjectURL(file);
  videoPreview.innerHTML = `<video width="320" controls src="${url}"></video>`;

  const feedback =
    feedbackOptions[Math.floor(Math.random() * feedbackOptions.length)];
  const angle = Math.floor(Math.random() * 15) + 40;
  const speed = Math.floor(Math.random() * 10) + 20;

  feedbackDiv.textContent = feedback;
  angleSpan.textContent = angle;
  speedSpan.textContent = speed;

  const utter = new SpeechSynthesisUtterance(feedback);
  utter.lang = 'de-DE';
  utter.rate = 1.1;
  utter.pitch = 1.2;
  speechSynthesis.speak(utter);

  if (currentUser) {
    try {
      await createSession({
        playerId: currentUser.id,
        metrics: { angle, speed, feedback },
      });
    } catch (e) {
      console.warn('Session nicht gespeichert', e);
    }
  }

  history.push({ feedback, angle, speed, date: new Date().toLocaleString() });
  const perfectCount = history.filter((h) => h.feedback.includes('Perfekt'))
    .length;
  accuracySpan.textContent = Math.floor((perfectCount / history.length) * 100);
  renderHistory();
  updateChart();
});

// drag/drop support for video upload
const dropzone = document.getElementById('video-upload');
dropzone.addEventListener('click', () => videoFileInput.click());
dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('dragover'); });
dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('dragover');
  const files = e.dataTransfer.files;
  if (files.length) {
    videoFileInput.files = files;
    dropMessage.textContent = files[0].name;
  }
});
// browseBtn removed; clicking dropzone handles file selection now

videoFileInput.addEventListener('change', () => {
  if (videoFileInput.files.length) dropMessage.textContent = videoFileInput.files[0].name;
});

function renderHistory() {
  historyList.innerHTML = '';
  history.forEach((h, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>Wurf ${i + 1}</strong> – ${h.feedback}<br><small>${h.date}</small>`;
    historyList.appendChild(li);
  });
}

// Chart initialisieren
const ctx = document.getElementById('trajectoryChart');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [0, 1, 2, 3, 4, 5, 6],
    datasets: [
      {
        label: 'Soll-Flugbahn',
        data: [0, 2, 4, 5, 4, 2, 0],
        borderColor: '#00cc88',
        borderWidth: 3,
        tension: 0.4,
      },
      {
        label: 'Ist-Flugbahn',
        data: [0, 1.8, 3.5, 4.9, 4.2, 1.7, 0],
        borderColor: '#0077cc',
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  },
  options: {
    scales: {
      x: { title: { display: true, text: 'Distanz' } },
      y: { title: { display: true, text: 'Höhe' } },
    },
    plugins: { legend: { labels: { color: 'white' } } },
  },
});

function updateChart() {
  chart.data.datasets[1].data = chart.data.datasets[1].data.map(
    (v) => v + (Math.random() * 0.5 - 0.25)
  );
  chart.update();
}

// beim Start prüfen ob User vorhanden
loadUser();
if (currentUser) showMain();
else {
  showAuth();
  showWelcome();
}

// Logout-Handler
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('currentUser');
  currentUser = null;
  history = [];
  feedbackDiv.textContent = '';
  angleSpan.textContent = '–';
  speedSpan.textContent = '–';
  accuracySpan.textContent = '0';
  historyList.innerHTML = '';
  videoPreview.innerHTML = '';
  videoFileInput.value = '';
  showAuth();
  showWelcome();
});
