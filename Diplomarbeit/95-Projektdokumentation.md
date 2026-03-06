\newpage
## Dokumentation

### Projektfortschritt 16. Juni 2025 bis 06. März 2026

#### Gesamtstatus

- Das Projekt zur Analyse von Basketballwürfen mittels Videoanalyse und webbasierten Technologien wurde größtenteils planmäßig umgesetzt.
- Die grundlegenden Komponenten des Systems (Videoanalyse, Backend und Frontend) konnten erfolgreich entwickelt werden.
- Die Videoanalyse ermöglicht das Tracking des Basketballs sowie die Rekonstruktion der Ist-Flugbahn aus Videodaten.
- Zusätzlich wurde eine mathematische Berechnung einer optimalen Soll-Flugbahn implementiert, um reale Würfe mit einer idealen Flugbahn vergleichen zu können.
- Das Backend wurde als Webservice mit REST-Schnittstelle umgesetzt und dient zur Speicherung und Bereitstellung der Analyseergebnisse.
- Parallel dazu wurde ein Frontend entwickelt, das als webbasierte Benutzeroberfläche für die Darstellung von Trainingsdaten und Analyseergebnissen dient.

Im Verlauf des Projekts zeigte sich jedoch, dass die vollständige Integration zwischen Videoanalyse, Backend und Frontend nicht vollständig abgeschlossen werden konnte.

Die Analysepipeline funktioniert derzeit nur über eine manuelle Ausführung, wodurch eine automatische Übertragung der Analyseergebnisse an das Backend noch nicht realisiert wurde.

Dennoch konnte ein funktionsfähiger Prototyp entwickelt werden, der die wesentlichen Konzepte des Systems demonstriert.

---

#### Durchgeführte Arbeiten im Berichtszeitraum

| Person | Tätigkeiten | Aufwand |
|------|------|------|
| Fabian Bacher | Entwicklung der Videoanalyse zur Rekonstruktion der Ist-Flugbahn, Balltracking im Video | ca. 40 h |
| Bastian Wolfgruber | Mathematische Berechnung der Soll-Flugbahn und physikalisches Modell der Flugkurve | ca. 35 h |
| Florian Gutmann | Entwicklung des Backends mit REST-API und Datenbankanbindung | ca. 45 h |
| Nino Dalipovic | Entwicklung der Weboberfläche und Implementierung der Benutzerinteraktion | ca. 40 h |

Zusätzlich wurden gemeinsame Arbeiten durchgeführt:

- Durchführung von Videoaufnahmen im Raiffeisen Sportpark
- Planung der Systemarchitektur
- Vorbereitung der Zwischenpräsentation
- Erstellung der Diplomarbeitsdokumentation

---

#### Projektstatus

| Dimension | Status | Maßnahmen |
|:--------------------|:------------------|:-----------------------|
| Leistungsziele | größtenteils erreicht | Fokus auf Kernfunktionen des Systems |
| Terminziele | größtenteils im Plan | Priorisierung der wichtigsten Funktionen |
| Kostenziele | im Budget | keine Maßnahmen notwendig |
| Teamarbeit | sehr gut | regelmäßige Abstimmung im Team |

:Projektstatus am 06.03.2026

---

#### Notwendige Entscheidungen

- Die automatische Integration der Analysepipeline in das Backend konnte innerhalb des Projektzeitraums nicht vollständig umgesetzt werden.
- Stattdessen wurde entschieden, die Analyse vorerst manuell auszuführen und die Architektur so vorzubereiten, dass eine spätere Automatisierung möglich ist.
- Dadurch konnte der Fokus auf die Implementierung der Kernkomponenten gelegt werden.

---

#### Nächste Schritte

- Implementierung einer automatisierten Schnittstelle zwischen Videoanalyse und Backend
- Erweiterung der REST-API zur direkten Übertragung der Analyseergebnisse
- Verbesserung der Visualisierung der Flugbahnen im Frontend
- Durchführung weiterer Tests mit zusätzlichen Videodaten

: Projektstatus Stand 06. März 2026