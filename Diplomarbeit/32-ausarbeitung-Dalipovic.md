# Teilaufgabe Dalipovic

# Diplomarbeit: Basketball-Effizienzsteigerung

## 1. Einleitung

Die vorliegende Diplomarbeit mit dem Titel **„Basketball-Effizienzsteigerung“** beschäftigt sich mit der Analyse und Optimierung von Basketballwürfen mithilfe moderner Softwarelösungen.  
Ziel des Projekts ist es, Wurfbewegungen mittels Videoanalyse zu erfassen, auszuwerten und die Ergebnisse übersichtlich darzustellen, um Spieler bei der Verbesserung ihrer Wurftechnik zu unterstützen.

Die Diplomarbeit wird im Team umgesetzt, wobei jede Person einen klar abgegrenzten Aufgabenbereich übernimmt.  
Diese Ausarbeitung behandelt ausschließlich den **Frontend-Teil**, welcher von **Dalipovic** umgesetzt wird und für die grafische Benutzeroberfläche sowie die Darstellung der Spieler- und Statistikdaten verantwortlich ist.

---

## 2. Individuelle Zielsetzung und Aufgabenstellung

### 2.x Aufgabenstellung und Terminplan – Dalipovic (Frontend)

Meine Aufgabe im Rahmen dieser Diplomarbeit ist die Entwicklung des **Frontends**, also der grafischen Benutzeroberfläche der Anwendung.  
Das Frontend stellt die Schnittstelle zwischen Benutzer und System dar und dient zur Anzeige der vom Backend und der Videoanalyse bereitgestellten Daten.

Die Hauptziele meines Aufgabenbereichs sind:
- Entwicklung einer übersichtlichen Spieler- und Statistikansicht  
- Darstellung von Wurfdaten wie Winkel, Geschwindigkeit und Trefferquote  
- Grafische Visualisierung der Flugkurve eines Basketballwurfs  
- Vorbereitung des Frontends auf die spätere Anbindung an das Backend  
- Gestaltung einer modernen, sportlichen Benutzeroberfläche  

Der zeitliche Aufwand gliedert sich in Konzeption, Design, Implementierung sowie Tests und Optimierungen.

---

## 3. Aufgabenstellung Eins – Frontend

Das Frontend wurde als **webbasierte Anwendung** konzipiert.  
Der Fokus liegt dabei nicht auf der Berechnung der Wurfdaten, sondern ausschließlich auf deren **Darstellung und Benutzerführung**.

Die eigentliche Videoanalyse sowie die Berechnung der Soll- und Ist-Flugbahnen werden von anderen Teammitgliedern umgesetzt.  
Das Frontend dient als Visualisierungs- und Steuerungseinheit und soll die Analyseergebnisse übersichtlich darstellen.

---

### 3.1 Ergebnis – Frontend

Als Ergebnis wurde ein funktionsfähiger **Frontend-Prototyp** umgesetzt.  
Dieser bildet den späteren Ablauf des Gesamtsystems realistisch ab und verwendet aktuell **Dummy-Daten**, um die Benutzerinteraktion und die Darstellung zu demonstrieren.

Der Prototyp enthält:
- eine Spielerverwaltung  
- eine zentrale Kameraansicht (Simulation)  
- eine Statistikübersicht  
- eine grafische Darstellung der Flugkurve  
- optionales akustisches Feedback  

---

## 4. Aufgabenstellung Zwei – Technische Umsetzung

### 4.1 Verwendete Technologien

Für die Umsetzung des Frontends wurden folgende Technologien eingesetzt:

- **HTML** zur Strukturierung der Benutzeroberfläche  
- **CSS** für Layout, Design und Responsivität  
- **JavaScript** für Interaktion und dynamische Inhalte  
- **Chart.js** zur grafischen Darstellung der Flugkurven  
- **Web Speech API** (optional) für akustisches Feedback  

Die Entwicklung erfolgte in **Visual Studio Code**.

---

### 4.2 Aufbau der Benutzeroberfläche

Die Benutzeroberfläche ist in mehrere logisch getrennte Bereiche gegliedert:
- Spielerverwaltung (linker Bereich)  
- Wurfsteuerung (rechter Bereich)  
- Zentrale Live-Kameraansicht  
- Statistik- und Verlaufsanzeige  
- Darstellung der Soll- und Ist-Flugbahn  

Das Design ist bewusst im **Dark Mode** mit **orangefarbenen Akzenten** gehalten, um einen sportlichen und modernen Eindruck zu vermitteln.

---

### 4.3 HTML – Struktur der Oberfläche

Der folgende Codeausschnitt zeigt die HTML-Struktur für die Spielersteuerung und die Wurfsteuerung.  
Der Spielerbereich befindet sich links, während die Wurfanalyse bewusst rechts platziert ist.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="HTML: Spieler- und Wurfsteuerung" .html}
<section id="player-setup">
  <div id="player-left">
    <input type="text" id="newPlayerName" placeholder="Neuen Spieler hinzufügen" />
    <button id="addPlayerBtn">➕ Spieler hinzufügen</button>

    <label for="playerSelect">Spieler auswählen:</label>
    <select id="playerSelect"></select>
  </div>

  <div id="player-right">
    <button id="newShotBtn">🎯 Neuen Wurf analysieren</button>
  </div>
</section>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

---

### 4.4 CSS – Layout und Design

Das Layout basiert auf **Flexbox** und **CSS Grid**, um eine saubere und responsive Struktur zu gewährleisten.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="CSS: Layout der Spielerleiste" .css}
#player-setup {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 1100px;
  margin: 30px auto;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="CSS: Statistik-Dashboard mit Cards" .css}
#stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto;
}

.card {
  background: #1a1a1a;
  border-radius: 18px;
  padding: 25px;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

---

### 4.5 JavaScript – Interaktion und Logik

Die dynamischen Funktionen des Frontends werden mit JavaScript umgesetzt.  
Spieler können hinzugefügt werden und Würfe werden mithilfe von Dummy-Daten simuliert.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="JavaScript: Spielerverwaltung" .javascript}
function renderPlayers() {
  playerSelect.innerHTML = "";
  players.forEach((p) => {
    const option = document.createElement("option");
    option.textContent = p;
    playerSelect.appendChild(option);
  });
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="JavaScript: Simulation eines Wurfs" .javascript}
newShotBtn.addEventListener("click", () => {
  const angle = Math.floor(Math.random() * 15) + 40;
  const speed = Math.floor(Math.random() * 10) + 20;

  angleSpan.textContent = angle;
  speedSpan.textContent = speed;

  updateChart();
});
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

---

### 4.6 Darstellung der Flugkurve

Die grafische Darstellung der Flugkurve erfolgt mit **Chart.js**.  
Dabei werden eine Soll- und eine Ist-Flugbahn angezeigt.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="JavaScript: Chart.js – Soll vs. Ist Flugbahn" .javascript}
const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [0, 1, 2, 3, 4, 5, 6],
    datasets: [
      { label: "Soll-Flugbahn", data: [0, 2, 4, 5, 4, 2, 0] },
      { label: "Ist-Flugbahn", data: [0, 1.8, 3.5, 4.9, 4.2, 1.7, 0] }
    ]
  }
});
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Die dargestellten Codeauszüge zeigen den aktuellen Prototypenstand mit Dummy-Daten.  
Die Logik ist so aufgebaut, dass in der finalen Version statt der simulierten Werte reale Messdaten aus dem Backend übernommen und ohne Layoutänderung in dieselben UI-Komponenten eingebunden werden können.

---

## 5. Aufgabenstellung Drei – Integration und Ausblick

### 5.1 Backend-Anbindung (Konzept)

In der finalen Version soll das Frontend mit dem Backend verbunden werden, welches von einem anderen Teammitglied umgesetzt wird.  
Das Backend stellt die berechneten Wurfdaten sowie gespeicherte Spielerinformationen bereit.

Das Frontend übernimmt dabei ausschließlich:
- die Darstellung der Daten  
- die grafische Aufbereitung der Statistiken  
- die Aktualisierung der Benutzeroberfläche  

Die Berechnung der Soll- und Ist-Flugbahn erfolgt **nicht im Frontend**.

---

### 5.2 Herausforderungen

Eine zentrale Herausforderung der Frontend-Entwicklung ist die übersichtliche Darstellung komplexer Daten.  
Besonders die gleichzeitige Anzeige von Kameraansicht, Statistik und Flugkurve erfordert eine klare Strukturierung.

Weitere Herausforderungen:
- Responsives Design für unterschiedliche Bildschirmgrößen  
- Einfügung von Sprachfunktion 
- Vorbereitung auf dynamische Echtzeitdaten  

---

## 6. Zusammenfassung

Das Frontend stellt einen wesentlichen Bestandteil der Diplomarbeit dar, da es die Schnittstelle zwischen Benutzer und System bildet.  
Der umgesetzte Prototyp bildet den geplanten Funktionsumfang realistisch ab und ist vorbereitet für die Integration realer Analyseergebnisse.

---

## 12. Anhang

### 12.3 Technische Dokumentation – Frontend

Das Frontend ist modular aufgebaut und klar von der Logik des Backends getrennt.  
Diese Trennung ermöglicht eine einfache Wartung sowie zukünftige Erweiterungen, ohne bestehende Komponenten wesentlich verändern zu müssen.
