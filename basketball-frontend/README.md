Smart Shot Analyzer — Frontend

Kurzanleitung
- Öffne `index.html` im Browser oder starte einen einfachen Static-Server.
- Standard-API-Base ist in `index.html` als `http://localhost:8081/api` gesetzt (Backend läuft lokal auf Port 8081).

Organisation
- `src/styles/main.css` – Styles
- `src/app.js` – Haupt-App (ES Module)
- `src/api/*` – API-Client-Module (players, sessions, auth)
- `src/utils/*` – kleine Helfer (Token-Storage)

Anbindung
- Die API-Module verwenden Pfade wie `/players`, `/sessions`, `/auth/login`.
- Passe `window.__API_BASE__` in `index.html` an, falls dein Backend auf einer anderen URL/Port läuft.

Testen
1. Starte Backend (Spring Boot) lokal (standard Port 8080).
2. Öffne `index.html` im Browser oder starte z.B. `npx serve .` im Ordner `basketball-frontend`.
