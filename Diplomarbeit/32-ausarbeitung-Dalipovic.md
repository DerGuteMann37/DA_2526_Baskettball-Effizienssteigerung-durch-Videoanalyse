# Teilaufgabe Schüler Dalipovic 
\textauthor{Nino Dalipovic} 

Frontend – Spieler- & Statistikansicht  



## Einleitung

Im Rahmen der Diplomarbeit *„Basketball-Effizienzsteigerung“* wird ein Softwaresystem entwickelt, das Basketballwürfe mithilfe von Videoanalyse analysiert und die daraus gewonnenen Daten strukturiert darstellt.  
Ziel des Gesamtsystems ist es, Spielern eine objektive Rückmeldung über ihre Wurftechnik zu geben und langfristig eine Leistungssteigerung zu ermöglichen.

Diese Ausarbeitung behandelt ausschließlich den **Frontend-Teil** des Projekts.  
Das Frontend stellt die grafische Benutzeroberfläche dar und ist dafür verantwortlich, die vom Backend und von der Videoanalyse gelieferten Daten verständlich und übersichtlich aufzubereiten.

Der Fokus liegt dabei auf Benutzerführung, Visualisierung, Struktur und Erweiterbarkeit – nicht auf der mathematischen oder kamerabasierten Analyse.



## Individuelle Zielsetzung und Aufgabenstellung

Die Zielsetzung des Frontend-Teils besteht darin, eine moderne, übersichtliche und erweiterbare Benutzeroberfläche zu entwickeln, welche die komplexen Analyseergebnisse verständlich darstellt.

Dabei übernimmt das Frontend folgende Aufgaben:
- Anzeige und Verwaltung von Spielern
- Darstellung aktueller Wurfwerte
- Visualisierung der Soll- und Ist-Flugbahn
- Anzeige des Wurfverlaufs
- Bereitstellung eines strukturierten Dashboards

Die Berechnung der Werte sowie die Videoanalyse erfolgen außerhalb des Frontends und werden von anderen Teammitgliedern umgesetzt.



## Theoretische Grundlagen der Frontend-Entwicklung

### Webbasierte Frontends

Webbasierte Frontends bieten den Vorteil, dass sie plattformunabhängig genutzt werden können.  
Ein moderner Webbrowser genügt, um die Anwendung auszuführen, wodurch keine zusätzliche Installation notwendig ist.

Durch die Trennung von Struktur (HTML), Darstellung (CSS) und Logik (JavaScript) entsteht eine klare und wartbare Architektur.



### Visualisierung von Daten

Ein wesentlicher Bestandteil moderner Analyseanwendungen ist die visuelle Aufbereitung von Daten.  
Diagramme, Verlaufsanzeigen und farbliche Hervorhebungen helfen dabei, komplexe Informationen schneller zu erfassen als reine Textdarstellungen.

Für dieses Projekt wurde bewusst auf eine grafische Darstellung der Flugkurven gesetzt, da diese den Wurfverlauf intuitiv nachvollziehbar macht.



## Verwendete Technologien

### HTML – Strukturierung der Benutzeroberfläche

HTML bildet die Grundlage der Benutzeroberfläche.  
Alle Elemente wie Eingabefelder, Buttons, Statistikfelder und Diagrammcontainer werden über HTML strukturiert.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="HTML: Grundstruktur der Anwendung" .html}
<body>
  <header>
    <h1>Smart Shot Analyzer – Basketball Wurftraining</h1>
  </header>

  <main>
    <section class="camera-view">
      Live-Kamera (Simulation)
    </section>

    <section id="stats-grid">
      <!-- Statistik Cards -->
    </section>
  </main>
</body>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Diese Struktur sorgt für eine klare Trennung zwischen Kopfbereich, Hauptinhalt und Statistikbereich.



### CSS – Layout, Design und Responsivität

CSS wird verwendet, um das Layout der Anwendung zu gestalten.  
Das Design wurde bewusst im Dark Mode umgesetzt, da dieser bei längerer Nutzung angenehmer für die Augen ist.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="CSS: Grundlegendes Farbschema und Schrift" .css}
body {
  background: radial-gradient(circle at top, #1b1b1b, #000);
  color:"#f2f2f2";
  font-family: Arial, sans-serif;
  margin: 0;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



#### Dashboard-Layout

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="CSS: Statistik-Dashboard als Grid" .css}
#stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 30px;
  padding: 40px;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Durch das Grid-Layout können die Statistik-Elemente flexibel angeordnet werden.



#### Karten-Design

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="CSS: Statistik-Card Design" .css}
.card {
  background: "#1a1a1a";
  border-radius: 20px;
  padding: 30px;
  border: 1px solid #333;
  box-shadow: 0 0 25px rgba(0,0,0,0.5);
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Dieses Design sorgt für eine klare visuelle Trennung der einzelnen Informationsbereiche.



### JavaScript – Interaktion und Dynamik

JavaScript wird für die komplette Interaktionslogik verwendet.  
Spieler können angelegt werden, Würfe simuliert und Diagramme aktualisiert.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="JavaScript: Initialisierung der Spieler" .javascript}
let players = [];
let history = [];

const playerSelect = document.getElementById("playerSelect");
const newPlayerInput = document.getElementById("newPlayerName");
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



#### Spieler hinzufügen

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="JavaScript: Spieler hinzufügen" .javascript}
addPlayerBtn.addEventListener("click", () => {
  const name = newPlayerInput.value.trim();
  if (!name) return;

  players.push(name);
  renderPlayers();
  playerSelect.value = name;
  newPlayerInput.value = "";
});
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Dieser Code erlaubt es, Spieler dynamisch hinzuzufügen, ohne die Seite neu zu laden.



#### Simulation eines Wurfs

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="JavaScript: Simulation eines Wurfs" .javascript}
newShotBtn.addEventListener("click", () => {
  const angle = Math.floor(Math.random() * 15) + 40;
  const speed = Math.floor(Math.random() * 10) + 20;

  document.getElementById("angle").textContent = angle;
  document.getElementById("speed").textContent = speed;

  history.push({ angle, speed, time: new Date().toLocaleString() });
  updateHistory();
  updateChart();
});
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Die Wurfwerte werden aktuell zufällig generiert und dienen als Dummy-Daten.



### Chart.js – Darstellung der Flugkurve

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="JavaScript: Chart.js Initialisierung" .javascript}
const ctx = document.getElementById("trajectoryChart");
const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [0,1,2,3,4,5,6],
    datasets: [
      {
        label: "Soll-Flugbahn",
        data: [0,2,4,5,4,2,0],
        borderColor: "#ff8c1a",
        tension: 0.4
      },
      {
        label: "Ist-Flugbahn",
        data: [0,1.8,3.5,4.9,4.2,1.7,0],
        borderColor: "#00cc88",
        tension: 0.4
      }
    ]
  }
});
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Diese Visualisierung macht Abweichungen zwischen Soll- und Ist-Wurf sofort sichtbar.



Die dargestellten Codeauszüge zeigen den aktuellen Prototypenstand mit Dummy-Daten.  
Die Struktur ist so aufgebaut, dass reale Daten aus dem Backend später ohne Änderungen am Layout eingebunden werden können.



## Herausforderungen

Eine der größten Herausforderungen bestand darin, viele Informationen gleichzeitig darzustellen, ohne die Übersichtlichkeit zu verlieren.  
Insbesondere die Kombination aus Kameraansicht, Statistik und Diagrammen erfordert ein klares Layout.

Weitere Herausforderungen:
- Skalierung für unterschiedliche Bildschirmgrößen  
- Lesbarkeit im Dark Mode  
- Vorbereitung auf Echtzeitdaten  



## Ausblick und Integration

In der finalen Version wird das Frontend über eine Schnittstelle mit dem Backend verbunden.  
Die vom Backend gelieferten Daten ersetzen dabei die aktuell verwendeten Dummy-Daten.

Das Frontend bleibt dabei unverändert und übernimmt weiterhin ausschließlich die Darstellung.



## Zusammenfassung

Der Frontend-Prototyp zeigt, wie komplexe Analyseergebnisse übersichtlich dargestellt werden können.  
Durch den modularen Aufbau ist das System gut erweiterbar und für die Integration in das Gesamtsystem vorbereitet.



## Anhang – Technische Dokumentation (Frontend)

Das vollständige Frontend besteht aus den Dateien:
- `index.html`
- `style.css`
- `script.js`

Diese sind dem Projekt beigefügt und dokumentieren die vollständige Implementierung.
