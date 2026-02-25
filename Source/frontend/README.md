Smart Shot Analyzer — Frontend

Kurzanleitung
- Öffne `index.html` im Browser oder starte einen einfachen Static-Server.
- Beim Start erscheint ein Willkommensbildschirm mit zwei großen Schaltflächen. "Login" und "Registrieren" öffnen je ein separates Formular, damit nicht alles auf einem Bildschirm steht. Nach erfolgreicher Anmeldung zeigt die App ein Video‑Upload‑Widget mit Drag‑und‑Drop‑Funktion und einem "+"‑Button für Dateiauswahl.
- Die Farbgebung wurde auf professionelle, beruhigende Teal‑/Dunkeltonakzente geändert; Karten und Komponenten besitzen dezente Schatten und Animationen, damit die Oberfläche moderner wirkt.
- Standard-API-Base ist in `index.html` als `http://localhost:8081/api` gesetzt (Backend läuft lokal auf Port 8081).

Organisation
- `src/styles/main.css` – Styles
- `src/app.js` – Haupt-App (ES Module). Beinhaltet jetzt Auth‑Logik (Login / Registrierung) und Video‑Upload.
- `src/api/*` – API-Client-Module (users/auth, sessions, stats, dashboard)
- `src/utils/*` – kleine Helfer (Token-Storage)

Anbindung
- Die API-Module verwenden Pfade wie `/players`, `/sessions`, `/auth/login`.
- Passe `window.__API_BASE__` in `index.html` an, falls dein Backend auf einer anderen URL/Port läuft.

Testen
1. Starte Backend (Spring Boot) lokal (standard Port 8080).
2. Öffne `index.html` im Browser oder starte z.B. `npx serve .` im Ordner `basketball-frontend`.
