# Projekthandbuch
\textauthor{Nino Dalipovic}

## Entwicklungsplan

### Projektauftrag

Im Rahmen dieser Diplomarbeit wird ein System zur Analyse von Basketballwürfen entwickelt. Ziel des Projektes ist es, mithilfe von Videoanalyse, moderner Webtechnologie sowie statistischer Auswertung eine objektive Analyse der Wurftechnik zu ermöglichen.

Im Basketball wird die Verbesserung der Wurftechnik üblicherweise durch wiederholtes Training und subjektives Feedback von Trainerinnen und Trainern erreicht. Diese Form der Analyse basiert jedoch hauptsächlich auf visueller Einschätzung und Erfahrung. Dadurch entstehen häufig ungenaue Bewertungen, da kleine Unterschiede in der Flugbahn des Balles oder im Abwurfwinkel nur schwer exakt wahrgenommen werden können.

Professionelle Systeme zur Bewegungsanalyse existieren zwar, sind jedoch meist sehr kostenintensiv oder erfordern spezielle Sensorik und Hardware. Diese Lösungen sind daher für Schulen oder Amateurvereine meist nicht praktikabel.

Das Ziel dieser Diplomarbeit besteht darin, ein softwarebasiertes System zu entwickeln, das Basketballwürfe automatisch analysieren kann. Dazu werden Videoaufnahmen von Würfen verwendet. Aus diesen Aufnahmen wird die tatsächliche Flugbahn des Basketballs ermittelt und anschließend mit einer berechneten idealen Flugbahn verglichen.

Das entwickelte System besteht aus mehreren Teilkomponenten:

* einer **Videoanalyse**, welche Ball und Korb erkennt und die reale Flugbahn des Basketballs rekonstruiert,
* einem **Backend**, das Analyseergebnisse speichert und statistisch auswertet,
* sowie einem **Frontend**, über das Benutzerinnen und Benutzer die Analyseergebnisse visualisieren können.

Die Architektur des Systems folgt dem Prinzip verteilter Webanwendungen, bei denen Präsentationsschicht, Logikschicht und Datenhaltung voneinander getrennt sind.

Während der Umsetzung des Projektes wurde ein funktionsfähiger Prototyp für die einzelnen Komponenten entwickelt. Die vollständige Integration der Videoanalyse in das Backend konnte jedoch nicht vollständig abgeschlossen werden, da die Analysepipeline noch keine ausreichend stabilen strukturierten Daten für eine automatisierte API-Kommunikation bereitstellt.

Dennoch konnte die grundlegende Systemarchitektur erfolgreich entworfen und implementiert werden.

---

### Projektziele

Das zentrale Ziel des Projektes ist die Entwicklung eines Prototyps zur Analyse von Basketballwürfen bis zum Abschluss der Diplomarbeit im Schuljahr 2025/26.

Das System soll folgende Funktionen ermöglichen:

* Analyse von Basketballwürfen anhand von Videomaterial
* Erkennung relevanter Objekte wie Basketball und Korb
* Rekonstruktion der tatsächlichen Flugbahn des Balls (Ist-Flugbahn)
* Berechnung einer theoretisch optimalen Flugbahn (Soll-Flugbahn)
* Speicherung von Analyseergebnissen in einer Datenbank
* Darstellung der Analyse im Webbrowser

Langfristig soll ein System entstehen, das Spielerinnen und Spielern eine objektive Rückmeldung über ihre Wurftechnik gibt und dadurch gezielte Verbesserungen ermöglicht.

Ein weiteres Ziel besteht darin, Trainingsdaten langfristig speichern und statistisch auswerten zu können. Dadurch können Entwicklungen über längere Trainingszeiträume hinweg analysiert werden.

---

### Nicht-Ziele bzw. nicht Inhalte

Um den Projektumfang realistisch zu halten, wurden bestimmte Aspekte bewusst ausgeschlossen.

Nicht Bestandteil dieser Diplomarbeit sind:

* Entwicklung eines vollständig marktreifen Produkts
* Integration von Echtzeittracking während eines Spiels
* Entwicklung eigener Kamerahardware
* Entwicklung einer mobilen Anwendung
* vollständige Automatisierung der gesamten Analysepipeline

Das Projekt konzentriert sich stattdessen auf die Entwicklung eines funktionalen Prototyps, der die grundlegenden Konzepte eines solchen Systems demonstriert.

---

### Projektnutzen

Der Nutzen des Projektes liegt insbesondere in der objektiven Analyse sportlicher Bewegungsabläufe.

Durch die automatische Auswertung von Basketballwürfen kann die Flugbahn eines Wurfes sichtbar gemacht werden. Spielerinnen und Spieler erhalten dadurch ein visuelles Feedback über die Qualität ihres Wurfes.

Ein besonderer Vorteil besteht im Vergleich zwischen der tatsächlichen Flugbahn und einer berechneten idealen Flugbahn. Durch diesen Vergleich können Abweichungen erkannt werden, beispielsweise wenn ein Wurf zu flach oder zu steil ausgeführt wurde.

Darüber hinaus ermöglicht das System eine langfristige Speicherung von Trainingsdaten. Dadurch können statistische Kennzahlen wie Trefferquoten oder Durchschnittswerte berechnet werden.

Das entwickelte System kann insbesondere im Schul- und Amateurbereich eingesetzt werden, wo häufig keine professionellen Analysewerkzeuge verfügbar sind.

---

### Projektauftraggeber/in

Der Auftraggeber dieser Diplomarbeit ist die HTL Leoben.

HTL Leoben  
Max Tendler-Straße 3  
8700 Leoben  
https://www.htl-leoben.at  

Im Rahmen der praktischen Umsetzung wird außerdem mit dem Verein **Rollstuhlbasketball FlinkStones Graz** zusammengearbeitet.

Der Verein unterstützt das Projekt insbesondere bei der Aufnahme von Videomaterial und stellt eine Trainingsumgebung für die Analyse von Basketballwürfen zur Verfügung.

---

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

: Projektterminübersicht

---

### Projektkosten

| Meilenstein | Kostenart | Menge | Preis | Gesamtkosten | Deckung durch |
|:-------------|:---------:|:------:|------:|-------------:|---------------|
| Videoaufnahmen | Nutzung Sporthalle | 1 | 0 € | 0 € | Projektpartner |
| Entwicklung | Arbeitszeit Schüler | 200 h | 0 € | 0 € | Schüler |
| Druck Diplomarbeit | Druckkosten | 3 | 25 € | 75 € | Schüler |

: Geplante Projektkosten

Die Gesamtkosten des Projektes belaufen sich hauptsächlich auf die Druckkosten der Diplomarbeit.

---

### Projektrisiken

| Risiko | EW | Auswirkungen | Maßnahmen |
|:--------------|:---:|:----------------|:--------------|
| Videoqualität zu gering | 25% | Ball kann nicht zuverlässig erkannt werden | bessere Aufnahmebedingungen |
| Tracking verliert Ball | 20% | Flugbahn kann nicht korrekt bestimmt werden | Anpassung der Trackingparameter |
| Probleme bei Systemintegration | 20% | Backend und Analyse können nicht verbunden werden | Anpassung der Datenstruktur |
| Zeitmangel | 15% | Projekt kann nicht vollständig integriert werden | Priorisierung der Kernfunktionen |

: Projektrisiken

---

## Projektorganisation

### Projektbeteiligte

| Vorname | Nachname | Organisation | Kontakt |
|:------------|:-------------|:-------------|:------------------|
| Fabian | Bacher | HTL Leoben | Schüler |
| Nino | Dalipovic | HTL Leoben | Schüler |
| Florian | Gutmann | HTL Leoben | Schüler |
| Bastian | Wolfgruber | HTL Leoben | Schüler |
| Darko | Jankovic | FlinkStones Graz | Betreuer |
| Guenther | Hutter | HTL Leoben | Betreuer |
| Christian | Hofer | HTL Leoben | Direktion |

: Projektbeteiligte

---

### Projektrollen

| Projektrolle | Rollenbeschreibung | Name |
|------------------------|------------------------|-------------------|
| Backend Entwicklung | Entwicklung der Serverlogik und Datenbank | Florian Gutmann |
| Frontend Entwicklung | Entwicklung der Benutzeroberfläche | Nino Dalipovic |
| Videoanalyse Ist-Flugbahn | Analyse der realen Flugbahn | Fabian Bacher |
| Videoanalyse Soll-Flugbahn | Berechnung der optimalen Flugbahn | Bastian Wolfgruber |

: Projektrollen

---

## Meilensteine

### 16.06.2025: Videoaufnahmen durchgeführt

* Aufnahme von Trainingswürfen im Raiffeisen Sportpark
* Erstellung eines ersten Datensatzes von Basketballwürfen

### 15.10.2025: Objekterkennung implementiert

* Ball und Korb können im Video erkannt werden
* erste Trackingversuche durchgeführt

### 31.10.2025: Backend und Frontend Prototyp erstellt

* Backend Grundstruktur implementiert
* Datenbankanbindung funktioniert
* Frontend Benutzeroberfläche entwickelt

### 01.12.2025: Flugbahnberechnung umgesetzt

* Ist-Flugbahn aus Videodaten rekonstruiert
* Soll-Flugbahn mathematisch berechnet

Die Integration zwischen Analyse, Backend und Frontend konnte jedoch nicht vollständig abgeschlossen werden, da die Videoanalyse noch keine stabile Datenstruktur für eine automatische Übergabe der Messwerte bereitstellt.

Die aktuell implementierte Analysepipeline liefert ihre Ergebnisse nur über einen manuellen Ausführungsschritt. Das bedeutet, dass die Analyse der Videodaten derzeit manuell gestartet und die erzeugten Ergebnisse ebenfalls manuell weiterverarbeitet werden müssen. Eine automatisierte Übergabe der Analyseergebnisse an das Backend über eine definierte Schnittstelle (z. B. eine REST-API) konnte daher nicht umgesetzt werden.

Aufgrund dieser manuellen Ausführung (Manual Release) ist keine kontinuierliche Datenverarbeitung möglich. Das Backend erwartet jedoch strukturierte und automatisch übertragene Messdaten, um diese in der Datenbank zu speichern und für das Frontend bereitzustellen.

Da diese automatische Schnittstelle zwischen Analysepipeline und Backend noch nicht implementiert werden konnte, wurde die direkte Anbindung von der Analyse an das Frontend im Rahmen dieser Diplomarbeit nicht fertiggestellt. Die grundlegende Architektur für die Integration wurde jedoch vorbereitet, sodass eine spätere Erweiterung des Systems möglich bleibt.

### 06.03.2026: Diplomarbeit abgeschlossen

* Dokumentation fertiggestellt
* Systemprototyp demonstriert
