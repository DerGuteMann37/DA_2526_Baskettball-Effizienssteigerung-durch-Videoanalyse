import { login, register } from './api/auth.js';
import { createSession, getSessionsByPlayer } from './api/sessions.js';
import { getPlayerStats } from './api/stats.js';

// debug - ensure this file is executed
alert('app.js loaded');

// auth elements
const authSection = document.getElementById('auth');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const toggleLoginPwd = document.getElementById('toggleLoginPwd');
const loginBtn = document.getElementById('loginBtn');
const regFirstName = document.getElementById('regFirstName');
const regLastName = document.getElementById('regLastName');
const regEmail = document.getElementById('regEmail');
const regPassword = document.getElementById('regPassword');
const toggleRegPwd = document.getElementById('toggleRegPwd');
const registerBtn = document.getElementById('registerBtn');
const authFeedback = document.getElementById('authFeedback');

// debug log after elements exist
console.log('app.js initializing elements', {
  authSection,
  loginForm,
  registerForm,
  loginBtn,
  registerBtn,
});

// sanity check: any important element missing?
[authSection, loginForm, registerForm, loginBtn, registerBtn, toggleLoginPwd, toggleRegPwd].forEach(el => {
  if (!el) console.error('missing element:', el);
});

// upload elements
// (dropzone messaging removed in redesigned UI)

// helper to switch password field type and icon; also adjust text color so
// visible passwords are readable (black) and concealed ones match design.
function addPasswordToggle(toggleBtn, inputEl) {
  if (!toggleBtn || !inputEl) return;
  toggleBtn.addEventListener('click', () => {
    const currentlyText = inputEl.type === 'text';
    const fieldIsText = !currentlyText;
    inputEl.type = fieldIsText ? 'text' : 'password';
    // remove any Tailwind colour classes and add the correct one
    inputEl.classList.remove('text-slate-100', 'text-black');
    inputEl.classList.add(fieldIsText ? 'text-black' : 'text-slate-100');
    // also set inline colour as fallback
    inputEl.style.color = fieldIsText ? '#000' : '#fff';
    const icon = toggleBtn.querySelector('span');
    if (icon) icon.textContent = fieldIsText ? 'visibility' : 'visibility_off';
  });
}

addPasswordToggle(toggleLoginPwd, loginPassword);
addPasswordToggle(toggleRegPwd, regPassword);

// main app elements
const appMain = document.getElementById('app-main');
const videoFileInput = document.getElementById('videoFile');
const analyseVideoBtn = document.getElementById('analyseVideoBtn');
const videoPreview = document.getElementById('videoPreview');

// updated metric elements
const shootingValue = document.getElementById('shootingValue');
const arcValue = document.getElementById('arcValue');
const historyList = document.getElementById('historyList');

// optional placeholder fields (not used in new layout)
// const feedbackDiv = document.getElementById('feedback');
// const angleSpan = document.getElementById('angle');
// const speedSpan = document.getElementById('speed');
// const accuracySpan = document.getElementById('accuracy');

let history = [];
let currentUser = null;

// chart instance will be created lazily when user opens the overlay
let chart;

const userName = document.getElementById('userName');
const logoutBtn = document.getElementById('logoutBtn');

// attach logout event once; handler defined later in the file
if (logoutBtn) logoutBtn.addEventListener('click', logoutHandler);


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
  appMain.classList.add('hidden');          // ensure Tailwind hidden class applied
  // make sure body can scroll when showing login/register
  document.body.classList.remove('overflow-hidden');
  showLogin();
  // ensure user sees top of auth form (otherwise overflow or previous scroll
  // position may hide it)
  window.scrollTo({ top: 0, behavior: 'instant' });
  // reset inputs/feedback
  loginEmail.value = '';
  loginPassword.value = '';
  regFirstName.value = '';
  regLastName.value = '';
  regEmail.value = '';
  regPassword.value = '';
  if (authFeedback) authFeedback.textContent = '';
}
function showLogin() {
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
}

function showRegister() {
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
}

function showMain() {
  authSection.style.display = 'none';
  appMain.style.display = '';
  appMain.classList.remove('hidden');      // remove tailwind hidden utility
  document.body.classList.remove('overflow-hidden');
  if (currentUser && userName) userName.textContent = `${currentUser.firstName || ''} ${currentUser.lastName || ''}`;
  loadUserData();
}

// perform logout cleanup (used by the button listener initialized once below)
function logoutHandler() {
  console.log('logout clicked');
  localStorage.removeItem('currentUser');
  currentUser = null;
  history = [];
  if (shootingValue) shootingValue.textContent = '0';
  if (arcValue) arcValue.textContent = '0';
  historyList.innerHTML = '';
  if (videoPreview) videoPreview.innerHTML = '';
  videoFileInput.value = '';
  showAuth();
}

async function loadUserData() {
  if (!currentUser) return;
  try {
    const sessions = await getSessionsByPlayer(currentUser.id);
    if (Array.isArray(sessions)) {
      // convert to our internal shape
      history = sessions.map((s) => ({
        feedback: s.metrics?.feedback || '–',
        efficiency: s.metrics?.efficiency || '–',
        arc: s.metrics?.arc || '–',
        date: s.date || s.createdAt || '–',
      }))
      // drop any completely empty placeholder entries (all values are the
      // placeholder glyph); those were showing as "Wurf 1…9" with no data
      // which made the first real entry appear as #10.
      .filter(h => h.feedback !== '–' || h.efficiency !== '–' || h.arc !== '–');
      renderHistory();
    }
  } catch (e) {
    console.warn('Sessions konnten nicht geladen werden', e);
  }
  try {
    const stats = await getPlayerStats(currentUser.id);
    // map stats to UI cards if available
    if (stats) {
      if (stats.accuracy !== undefined && shootingValue) {
        shootingValue.textContent = stats.accuracy;
      }
      if (stats.arcConsistency !== undefined && arcValue) {
        arcValue.textContent = stats.arcConsistency;
      }
    }
  } catch (e) {
    console.debug('Stats/Dashboard nicht verfügbar', e);
  }
}

// no dedicated show buttons in new UI
switchToRegister.addEventListener('click', (e) => { e.preventDefault(); showRegister(); });
switchToLogin.addEventListener('click', (e) => { e.preventDefault(); showLogin(); });

loginBtn.addEventListener('click', async () => {
  console.log('login button clicked');
  const email = loginEmail.value.trim();
  const pw = loginPassword.value;
  console.log('credentials', { email, pw });
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
  console.log('register button clicked');
  const first = regFirstName.value.trim();
  const last = regLastName.value.trim();
  const email = regEmail.value.trim();
  const pw = regPassword.value;
  console.log('register data', { first, last, email, pw });
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
  'Leicht zu flach – Brettkontakt.',
  'Guter Treffer, aber nicht optimal.',
  'Flugbahn etwas zu flach.',
  'Kein Direktwurf – über das Brett.',
  'Leichte Abweichung vom perfekten Wurf.',
];

analyseVideoBtn.addEventListener('click', async () => {
  // if user has not yet selected a file, trigger the file chooser
  if (!videoFileInput.files[0]) {
    videoFileInput.click();
    return;
  }
  const file = videoFileInput.files[0];
  const url = URL.createObjectURL(file);
  if (videoPreview) {
    videoPreview.classList.remove('hidden');
    // let CSS control sizing (max-width:100%), remove hardcoded width
    videoPreview.innerHTML = `<video controls src="${url}"></video>`;
  }

  // generate some dummy metrics (replace with real backend results later)
  const efficiency = Math.floor(Math.random() * 100);
  const arc = Math.floor(Math.random() * 100);
  const feedback =
    feedbackOptions[Math.floor(Math.random() * feedbackOptions.length)];
  // new angle metric: 45–56 degrees (narrow test range)
  const angleVal = (45 + Math.random() * 11).toFixed(1);
  // shot quality score and status
  const score = Math.floor(70 + Math.random() * 21); // 70–90
  const statusText = score > 85 ? 'Excellent Mechanics' : score > 70 ? 'Good Mechanics' : 'Needs Work';

  if (shootingValue) shootingValue.textContent = efficiency;
  if (arcValue) arcValue.textContent = arc;
  // update new fields
  const angleEl = document.getElementById('angle');
  if (angleEl) angleEl.textContent = angleVal + '°';
  const scoreEl = document.getElementById('shotScore');
  if (scoreEl) scoreEl.textContent = `${score} / 100`;
  const statusEl = document.getElementById('shotStatus');
  if (statusEl) statusEl.textContent = statusText;

  // spoken feedback remains handy
  const utter = new SpeechSynthesisUtterance(feedback);
  utter.lang = 'de-DE';
  utter.rate = 1.1;
  utter.pitch = 1.2;
  speechSynthesis.speak(utter);

  // persist session to backend
  if (currentUser) {
    try {
      await createSession({
        playerId: currentUser.id,
        metrics: { efficiency, arc, feedback },
      });
    } catch (e) {
      console.warn('Session nicht gespeichert', e);
    }
  }

  history.push({ feedback, efficiency, arc, date: new Date().toLocaleString() });
  // update history list in UI
  renderHistory();
  updateChart();
});


function renderHistory() {
  historyList.innerHTML = '';
  history.forEach((h, i) => {
    const entry = document.createElement('div');
    entry.className = 'bg-navy-card/50 border border-white/5 rounded-2xl p-3';
    entry.innerHTML = `<strong>Wurf ${i + 1}</strong> – ${h.feedback}<br><small class="text-xs text-slate-400">${h.date}</small>`;
    historyList.appendChild(entry);
  });
}

// chart initialization now happens lazily inside the overlay handler
// (the DOM element doesn't exist at startup).  `chart` variable is declared
// above; here we keep this comment for reference.

function updateChart() {
  if (!chart) return; // nothing to update yet
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
}

// intercept file drops to keep video in the current window instead of
// letting the browser open a new tab (default behaviour)
function preventDefault(e) {
  e.preventDefault();
  e.stopPropagation();
}
['dragenter','dragover','dragleave','drop'].forEach(evt => {
  document.body.addEventListener(evt, preventDefault, false);
});

document.body.addEventListener('drop', (e) => {
  const dt = e.dataTransfer;
  if (dt && dt.files && dt.files.length) {
    const file = dt.files[0];
    if (file.type.startsWith('video/')) {
      videoFileInput.files = dt.files;
      analyseVideoBtn.click();
    }
  }
});

// handler for charts icon: open new window with inline chart HTML
const chartsLink = document.getElementById('chartsLink');
if (chartsLink) {
  // remove native navigation attributes just in case the listener fails
  chartsLink.removeAttribute('href');
  chartsLink.removeAttribute('target');
  chartsLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('charts icon clicked');
    // render chart inside main area (replace current metrics view)
    const mainArea = document.querySelector('main.main');
    // for simplicity, append a floating overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50';
    overlay.innerHTML = `
      <div class="bg-navy-card p-6 rounded-2xl relative">
        <button id="closeChart" class="absolute top-2 right-2 text-white text-xl">&times;</button>
        <canvas id="trajectoryChart" width="600" height="400"></canvas>
      </div>
    `;
    document.body.appendChild(overlay);
    // prevent any clicks from bubbling through to the page (e.g. logout button)
    overlay.addEventListener('click', (evt) => evt.stopPropagation());
    document.getElementById('closeChart').addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
    const ctx = overlay.querySelector('#trajectoryChart');
    // create/replace global chart instance so updateChart() works later
    chart = new Chart(ctx, {type:'line',data:{labels:[0,1,2,3,4,5,6],datasets:[{label:'Soll',data:[0,2,4,5,4,2,0],borderColor:'#00cc88'},{label:'Ist',data:[0,1.8,3.5,4.9,4.2,1.7,0],borderColor:'#0077cc'}]},options:{plugins:{legend:{labels:{color:'#fff'}}},scales:{x:{title:{display:true,text:'Distanz'}} ,y:{title:{display:true,text:'Höhe'}}}}});
  });
}

// helper to render an arbitrary image inside an overlay; callers supply URL
// if no src is provided we fall back to a constant or a local file named
// `info.png` (put your supplied picture there).  you can also set
// `window.INFO_IMAGE_SRC` before the module loads to override.
function showImageOverlay(src) {
  src = src || window.INFO_IMAGE_SRC || './info.png';
  const overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50';
  overlay.innerHTML = `
    <div class="relative">
      <button id="closeImg" class="absolute top-2 right-2 text-white text-xl">&times;</button>
      <!-- allow nearly full‑viewport image, maintain aspect ratio.  we
           explicitly set width:90vw so even low-resolution pictures are
           blown up to a reasonable size. max-* rules only constrain when
           the natural size is larger than the viewport. -->
      <img src="${src}" style="width:90vw;height:auto;max-width:none;max-height:none;" />
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (evt) => evt.stopPropagation());
  document.getElementById('closeImg').addEventListener('click', () => {
    document.body.removeChild(overlay);
  });
}

// info logo (movie icon) opens an image window
const infoLink = document.getElementById('infoLink');
if (infoLink) {
  infoLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('info link clicked');
    // no argument -> helper will fall back to window.INFO_IMAGE_SRC or
    // './info.png' (which you've placed in the frontend folder).
    showImageOverlay();
  });
}

// (listener attached via bindLogout inside showMain; this block was redundant and is removed.)
