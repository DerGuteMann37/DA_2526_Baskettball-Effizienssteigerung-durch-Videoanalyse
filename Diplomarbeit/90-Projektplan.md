# Projekthandbuch – Diplomarbeit
\textauthor{Nino Dalipovic}


## Basketball-Effizienzsteigerung durch Videoanalyse
**Stand:** 06. März 2026



### Projektübersicht
**Thema:** Entwicklung eines Systems zur Analyse von Basketballwürfen mithilfe von Videoanalyse und webbasierten Technologien

**Team:**
- **Fabian Bacher** – Videoanalyse (Ist-Flugbahn)
- **Nino Dalipovic** – Frontend Entwicklung
- **Florian Gutmann** – Backend Entwicklung
- **Bastian Wolfgruber** – Videoanalyse (Soll-Flugbahn)

**Betreuer:** Darko Jankovic  
**Schule:** HTL Leoben  
**Zeitraum:** Juni 2025 – März 2026



### Zielsetzung

Die Zielsetzung beschreibt das allgemeine Ziel und die Motivation hinter der Diplomarbeit.

 **Aktueller Stand:**  
 Im Basketball wird die Verbesserung der Wurftechnik meist durch wiederholtes Training und subjektives Feedback von Trainerinnen und Trainern erreicht. Eine objektive Analyse der Flugbahn des Basketballs oder der Wurfparameter ist im Amateurbereich meist nicht vorhanden.

 **Motivation:**  
 Ziel dieser Diplomarbeit ist es, eine technische Lösung zu entwickeln, mit der Basketballwürfe automatisiert analysiert werden können. Durch Videoanalyse und mathematische Modelle soll die Flugbahn des Balls bestimmt und bewertet werden.

 **Was möchten wir erreichen?**  
 Entwicklung eines Systems zur Analyse von Basketballwürfen  
 Erkennung von Ball und Korb in Videomaterial  
 Rekonstruktion der tatsächlichen Flugbahn (Ist-Flugbahn)  
 Berechnung einer optimalen Flugbahn (Soll-Flugbahn)  
 Speicherung der Analyseergebnisse in einer Datenbank  
 Darstellung der Ergebnisse über eine Weboberfläche  

 **Was möchten wir nicht erreichen (Nicht-Ziele)?**  
 Kein kommerzielles Produkt  
 Keine Integration in professionelle Sportanalyseplattformen  
 Keine Entwicklung spezieller Kamerahardware  
 Keine mobile App  

 **Was ändert sich durch die Arbeit?**  
 Basketballwürfe können objektiv analysiert werden  
 Spieler erhalten visuelles Feedback zur Wurftechnik  
 Trainingsdaten können gespeichert und ausgewertet werden  
 langfristige Trainingsentwicklung kann nachvollzogen werden  



### Projektorganisation

**Kommunikation:**  
 Microsoft Teams (Austausch und Organisation)  
 Whatsapp Gruppe (schnelle Kommunikation im Team)  
 GitHub (Codeverwaltung und Dokumentation)  

**Dateiablage:**  
GitHub Repository zur Verwaltung des Quellcodes und der Dokumentation.

**Teammeetings:**  
 Treffen erfolgen bei Bedarf oder bei wichtigen Projektabschnitten.  
 Entscheidungen werden im Projekthandbuch dokumentiert.



### Projekttermine

| Termin | Inhalt |
|------:|:--------------------------------|
| 16.06.2025 | Erster Videodrehtag im Raiffeisen Sportpark |
| 15.10.2025 | Objekterkennung erfolgreich umgesetzt |
| 31.10.2025 | Backend Grundstruktur implementiert |
| 31.10.2025 | Frontend Prototyp erstellt |
| 11.11.2025 | Erste Zwischenpräsentation |
| 15.11.2025 | Darstellung der Ist-Flugbahn |
| 01.12.2025 | Berechnung der Soll-Flugbahn |
| 01.12.2025 | Vorbereitung der Backend-Frontend Verbindung |
| 09.01.2026 | Erste Version der Diplomarbeit |
| 06.03.2026 | Abgabe der Diplomarbeit |



### Projektkosten

| Meilenstein | Kostenart | Menge | Preis | Gesamtkosten | Deckung durch |
|:-------------|:---------:|:------:|------:|-------------:|---------------|
| Videoaufnahmen | Nutzung Sporthalle | 1 | 0 € | 0 € | Projektpartner |
| Entwicklung | Arbeitszeit Schüler | 200 h | 0 € | 0 € | Schüler |
| Druck Diplomarbeit | Druckkosten | 3 | 25 € | 75 € | Schüler |

Die Gesamtkosten des Projektes entstehen hauptsächlich durch den Druck der Diplomarbeit.



### Projektrisiken

 Abhängigkeit von der Qualität des Videomaterials  
 Schwierigkeiten beim Tracking des Basketballs  
 Probleme bei der Integration der einzelnen Systemkomponenten  
 Zeitliche Belastung durch parallelen Schulunterricht  



### Aktueller Projektstatus (Stand 06.03.2026)

- Videoaufnahmen von Basketballwürfen wurden durchgeführt  
- Objekterkennung für Ball und Korb implementiert  
- Darstellung der Ist-Flugbahn umgesetzt  
- Berechnung der Soll-Flugbahn mathematisch implementiert  
- Backend Grundstruktur mit Datenbank erstellt  
- Frontend Benutzeroberfläche entwickelt  

Die vollständige Integration zwischen Analyse, Backend und Frontend konnte jedoch nicht vollständig abgeschlossen werden.

Die aktuell implementierte Analysepipeline liefert ihre Ergebnisse nur über einen manuellen Ausführungsschritt. Das bedeutet, dass die Analyse der Videodaten derzeit manuell gestartet werden muss und die erzeugten Ergebnisse ebenfalls manuell weiterverarbeitet werden.

Eine automatisierte Übergabe der Analyseergebnisse an das Backend über eine definierte Schnittstelle (z. B. eine REST-API) konnte daher nicht umgesetzt werden.

Aufgrund dieser manuellen Ausführung (**Manual Release**) ist keine kontinuierliche Datenverarbeitung möglich. Das Backend erwartet jedoch strukturierte und automatisch übertragene Messdaten, um diese in der Datenbank zu speichern und für das Frontend bereitzustellen.

Da diese automatische Schnittstelle zwischen Analysepipeline und Backend noch nicht implementiert werden konnte, wurde die direkte Anbindung der Analyse an das Frontend im Rahmen dieser Diplomarbeit nicht fertiggestellt.

Die grundlegende Architektur für die Integration wurde jedoch vorbereitet, sodass eine spätere Erweiterung des Systems möglich bleibt.



### Zusammenfassung

Im Projektzeitraum wurden die grundlegenden Komponenten eines Systems zur Analyse von Basketballwürfen entwickelt. Dazu gehören die Videoanalyse zur Bestimmung der Flugbahn, ein Backend zur Speicherung der Analyseergebnisse sowie ein Frontend zur Visualisierung der Daten.

Obwohl die vollständige Integration der Komponenten nicht abgeschlossen werden konnte, wurde ein funktionsfähiger Prototyp erstellt, der die grundlegenden Konzepte eines solchen Systems demonstriert.

Die entwickelte Architektur bildet eine solide Grundlage für zukünftige Erweiterungen, insbesondere für eine vollständige Automatisierung der Analysepipeline sowie eine direkte Integration zwischen Analyse, Backend und Frontend.
