import { getPlayers, createPlayer } from './api/players.js';
import { createSession, getSessionsByPlayer } from './api/sessions.js';
import { getPlayerStats } from './api/stats.js';
import { getPlayerDashboard } from './api/dashboard.js';
import { setToken } from './utils/storage.js';

const playerSelect = document.getElementById('playerSelect');
const addPlayerBtn = document.getElementById('addPlayerBtn');
const newPlayerInput = document.getElementById('newPlayerName');
const feedbackDiv = document.getElementById('feedback');
const angleSpan = document.getElementById('angle');
const speedSpan = document.getElementById('speed');
const accuracySpan = document.getElementById('accuracy');
const historyList = document.getElementById('history');
const newShotBtn = document.getElementById('newShotBtn');

let players = [];
let history = [];

async function loadPlayers() {
  try {
    const res = await getPlayers();
    // Erwartet: Array von Spielern oder Map
    players = Array.isArray(res) ? res : [];
  } catch (e) {
    console.warn('Konnte Spieler vom Backend nicht laden, nutze lokale Defaults', e);
    players = [ { id: 'p1', name: 'Max Mustermann' }, { id: 'p2', name: 'Lukas Steiner' } ];
  }
  renderPlayers();
  // falls Spieler vorhanden: lade Sessions/Stats für den ersten Spieler
  if (players.length) {
    playerSelect.value = players[0].id || (players[0].name || `${players[0].firstName || ''} ${players[0].lastName || ''}`).trim();
    await onPlayerChange();
  }
}

function renderPlayers() {
  playerSelect.innerHTML = '';
  players.forEach((p) => {
    const opt = document.createElement('option');
    opt.value = p.id || (p.name || `${p.firstName || ''} ${p.lastName || ''}`).trim();
    opt.textContent = (p.firstName || p.lastName) ? `${p.firstName || ''} ${p.lastName || ''}`.trim() : (p.name || p);
    playerSelect.appendChild(opt);
  });
}

playerSelect.addEventListener('change', onPlayerChange);

async function onPlayerChange() {
  const playerId = playerSelect.value;
  if (!playerId) return;
  // Sessions laden
  try {
    const sessions = await getSessionsByPlayer(playerId);
    // Zeige die letzten Sessions im Verlauf (überschreibt Demo-History)
    if (Array.isArray(sessions)) {
      history = sessions.map((s) => ({
        feedback: s.metrics?.feedback || '—',
        angle: s.metrics?.angle || '—',
        speed: s.metrics?.speed || '—',
        date: s.date || s.createdAt || '—'
      }));
      renderHistory();
    }
  } catch (e) {
    console.warn('Sessions konnten nicht geladen werden', e);
  }

  // Player-Stats und Dashboard laden (optional)
  try {
    const stats = await getPlayerStats(playerId);
    const dash = await getPlayerDashboard(playerId);
    // Kurze Anzeige: Setze Feedback-Karte mit einfachem KPI
    if (dash && dash.summary) feedbackDiv.textContent = dash.summary;
    else if (stats && stats.accuracy !== undefined) feedbackDiv.textContent = `Treffer: ${stats.accuracy}%`;
  } catch (e) {
    console.debug('Stats/Dashboard nicht verfügbar', e);
  }
}

addPlayerBtn.addEventListener('click', async () => {
  const name = newPlayerInput.value.trim();
  if (!name) return;
  try {
    // Map a single input into CreatePlayerDTO expected by backend
    const parts = name.split(/\s+/);
    const firstName = parts.shift() || '';
    const lastName = parts.join(' ') || '';
    const payload = { firstName, lastName };
    const created = await createPlayer(payload);
    // Bei Erfolg: neu laden (Backend sollte den Spieler zurückgeben)
    await loadPlayers();
    // Wähle neuen Spieler
    const newVal = (created && (created.id || `${created.firstName || ''} ${created.lastName || ''}`.trim())) || name;
    playerSelect.value = newVal;
    newPlayerInput.value = '';
  } catch (e) {
    console.error('Fehler beim Erstellen des Spielers', e);
    alert('Spieler konnte nicht erstellt werden. Backend erreichbar?');
  }
});

const feedbackOptions = [
  'Perfekter Wurf!',
  'Etwas zu flach!',
  'Guter Winkel!',
  'Etwas zu langsam!',
  'Sehr gute Geschwindigkeit!',
  'Handhaltung verbessern!'
];

newShotBtn.addEventListener('click', async () => {
  const feedback = feedbackOptions[Math.floor(Math.random() * feedbackOptions.length)];
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

  const playerId = playerSelect.value;

  // Sende Session an Backend (wenn verfügbar)
  try {
    const sessionPayload = {
      playerId,
      metrics: { angle, speed, feedback }
    };
    await createSession(sessionPayload);
  } catch (e) {
    console.warn('Session nicht an Backend gesendet', e);
  }

  history.push({ feedback, angle, speed, date: new Date().toLocaleString() });
  const perfectCount = history.filter((h) => h.feedback.includes('Perfekt')).length;
  accuracySpan.textContent = Math.floor((perfectCount / history.length) * 100);

  renderHistory();
  updateChart();
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
        borderColor: '#ff8c1a',
        borderWidth: 3,
        tension: 0.4,
      },
      {
        label: 'Ist-Flugbahn',
        data: [0, 1.8, 3.5, 4.9, 4.2, 1.7, 0],
        borderColor: '#00cc88',
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

// Optional: Test-Login für Demo-Zwecke (setzt Token lokal)
window.demoSetToken = function (token) {
  setToken(token);
  alert('Token gesetzt (demo)');
};

// Init
(async function init() {
  await loadPlayers();
})();
