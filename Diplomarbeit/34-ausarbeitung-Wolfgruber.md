
# Teilaufgabe Wolfgruber Bastian
\textauthor{Wolfgruber Bastian}

## Theorie
### Begriffserklärung: Ist-Flugbahn
Die Ist-Flugbahn beschreibt die tatsächlich ausgeführte Fluglinie des Basketballs
während eines realen Wurfes. Sie basiert auf der Analyse von Videomaterial und stellt
somit die reale Bewegung des Balls dar. Im Gegensatz zur Soll-Flugbahn handelt es sich
bei der Ist-Flugbahn nicht um ein theoretisches Modell, sondern um gemessene Daten,
die direkt aus dem Video gewonnen werden.

Ziel der Ist-Flugbahn ist es, den realen Bewegungsverlauf des Basketballs möglichst
präzise zu erfassen und visuell darzustellen, um diesen später mit der berechneten
Soll-Flugbahn vergleichen zu können.



### Tracking des Basketballs
Das Tracking des Basketballs dient in dieser Arbeit nicht nur der technischen Erfassung von Bewegungsdaten, 
sondern bildet die Grundlage für ein visuelles Feedback, das den Schützen bei der Analyse und Verbesserung seines Wurfes unterstützt.

Durch das kontinuierliche Verfolgen des Balls über mehrere Frames hinweg kann der tatsächliche Flugweg des Basketballs rekonstruiert und sichtbar gemacht werden. 
Diese Visualisierung ermöglicht es dem Schützen, den eigenen Wurfverlauf nachvollziehbar zu betrachten – unabhängig vom subjektiven Wurfgefühl.

Insbesondere bei schnellen Bewegungsabläufen ist es für Spielerinnen und Spieler schwierig, den exakten Flug des Balls visuell zu erfassen. 
Das Tracking übernimmt hier die Rolle eines objektiven Beobachters und stellt den realen Bewegungsverlauf des Balls eindeutig dar. Dadurch können Abweichungen,
wie beispielsweise ein zu flacher oder zu steiler Wurf, klar erkannt werden.

Die ermittelten Ballpositionen bilden die Basis für die Darstellung der Ist-Flugbahn, 
welche dem Schützen eine direkte Rückmeldung über den ausgeführten Wurf liefert. 
In einem weiteren Schritt kann diese Ist-Flugbahn mit einer berechneten Soll-Flugbahn verglichen werden, 
wodurch gezielte Hinweise zur Verbesserung der Wurftechnik möglich werden.



### Architektur der Videoanalyse-Pipeline
In der Videoanalyse werden komplexe Auswertungen häufig als datengetriebene Pipeline modelliert. 
Eine solche Pipeline beschreibt eine Abfolge klar definierter Verarbeitungsschritte, 
bei denen Rohdaten schrittweise in strukturierte und interpretierbare Analyseergebnisse überführt werden.

Ausgangspunkt einer Videoanalyse-Pipeline sind in der Regel Rohvideos, welche visuelle Informationen in Form von Bildsequenzen enthalten. 
Diese Rohdaten werden in mehreren aufeinanderfolgenden Schritten verarbeitet, wobei jeder Schritt eine klar abgegrenzte Aufgabe übernimmt,
 beispielsweise Vorverarbeitung, Analyse oder Visualisierung.

Ein zentrales Gestaltungsprinzip moderner Videoanalyse-Pipelines ist die saubere Trennung von Verantwortlichkeiten. 
Dabei werden Eingabedaten, Konfigurations- und Kalibrierungsparameter, Verarbeitungskomponenten sowie Ausgabeartefakte logisch voneinander getrennt. 
Diese Struktur erleichtert die Wartung des Systems und erhöht die Nachvollziehbarkeit einzelner Verarbeitungsschritte.

Durch die modulare Architektur können einzelne Komponenten unabhängig voneinander angepasst oder erweitert werden, 
ohne die gesamte Pipeline verändern zu müssen. Dies ermöglicht eine hohe Wiederverwendbarkeit von Analysebausteinen 
sowie eine flexible Anpassung an neue Anforderungen oder verändertes Datenmaterial.

Darüber hinaus unterstützt eine klar strukturierte Pipeline die Reproduzierbarkeit der Analyseergebnisse. 
Werden identische Eingabedaten und Konfigurationen verwendet, lassen sich Verarbeitungsschritte konsistent nachvollziehen 
und Ergebnisse zuverlässig vergleichen. Diese Eigenschaft ist insbesondere für wissenschaftliche und analytische Anwendungen von großer Bedeutung.



### Objekt-Tracking in Videosequenzen
Objekt-Tracking bezeichnet in der Videoanalyse die kontinuierliche Verfolgung eines bestimmten Objekts über mehrere aufeinanderfolgende Frames hinweg. 
Ziel ist es, die Position des Objekts in jedem Einzelbild zu bestimmen und daraus dessen Bewegungsverlauf abzuleiten.

Dabei wird ein Zielobjekt definiert, dessen Lage typischerweise durch zweidimensionale Koordinaten im Bild beschrieben wird. 
Auf Basis dieser Positionsdaten kann eine Bewegung analysiert, visualisiert oder weiterverarbeitet werden.

Objekt-Tracking-Algorithmen arbeiten meist framebasiert und nutzen visuelle Merkmale wie Farbe, 
Form oder Bewegung. Typische Herausforderungen beim Tracking sind Objektverdeckungen, 
schnelle Bewegungen, wechselnde Lichtverhältnisse sowie räumlich nahe Objekte mit ähnlichen Eigenschaften.



### Region of Interest (ROI)
Eine Region of Interest (ROI) bezeichnet einen definierten Bildbereich innerhalb eines Frames, 
der für eine weitere Analyse oder Verarbeitung ausgewählt wird. 
Durch die Einschränkung auf eine ROI kann die Rechenkomplexität reduziert und die Genauigkeit von Analyseverfahren erhöht werden.

In der Videoverarbeitung wird eine ROI häufig verwendet, um den Fokus gezielt auf ein relevantes Objekt oder einen relevanten Bildbereich zu legen. 
Dadurch werden störende Hintergrundinformationen ausgeblendet und Fehlinterpretationen minimiert.

Die Definition einer ROI kann automatisch, beispielsweise durch Objekterkennung, oder manuell durch Benutzerinteraktion erfolgen. 
Welche Methode gewählt wird, hängt von der Aufgabenstellung, der Videoqualität und der erforderlichen Genauigkeit ab.



### Visualisierung von Bewegungsdaten
Unter der Visualisierung von Bewegungsdaten versteht man die grafische Darstellung von Positions- oder Bewegungsinformationen, 
die aus Mess- oder Analyseprozessen gewonnen wurden. Ziel ist es, komplexe Bewegungsabläufe anschaulich und intuitiv verständlich darzustellen.

In der Videoanalyse erfolgt die Visualisierung häufig durch das Einzeichnen von Punkten, Linien oder Kurven direkt im Videobild. 
Werden aufeinanderfolgende Positionspunkte eines Objekts miteinander verbunden, entsteht eine visuelle Repräsentation der Bewegung, beispielsweise in Form einer Flugbahn.

Solche Visualisierungen ermöglichen es, Bewegungsverläufe zu vergleichen, Abweichungen zu erkennen und dynamische Prozesse besser zu analysieren.



### Fehlerquellen und Unsicherheiten beim Tracking
Beim Objekt-Tracking in Videosequenzen können verschiedene Fehlerquellen und Unsicherheiten auftreten, welche die Genauigkeit der ermittelten Objektpositionen beeinflussen. 
Diese Unsicherheiten ergeben sich sowohl aus den Eigenschaften des Videomaterials als auch aus den eingesetzten Tracking-Algorithmen.

Eine häufige Fehlerquelle sind Verdeckungen des Zielobjekts, bei denen das Objekt teilweise oder vollständig von anderen Bildinhalten überlagert wird. 
In solchen Fällen kann der Tracker das Objekt nicht eindeutig identifizieren oder verliert es vollständig.

Auch räumlich nahe oder visuell ähnliche Objekte stellen eine Herausforderung dar. Befinden sich mehrere Objekte mit ähnlicher Farbe, Form oder Bewegung im Bild, 
kann es zu Fehlzuordnungen kommen, bei denen der Tracker auf ein falsches Objekt wechselt.

Weitere Unsicherheiten entstehen durch schnelle oder ruckartige Bewegungen des Zielobjekts. 
Große Positionsänderungen zwischen zwei aufeinanderfolgenden Frames können dazu führen, dass der Tracker die Bewegung nicht korrekt nachvollziehen kann.

Zusätzlich beeinflussen Videoqualität und Aufnahmebedingungen das Tracking-Ergebnis. Geringe Auflösung, Bewegungsunschärfe, 
schlechte Lichtverhältnisse oder Bildrauschen erschweren die zuverlässige Erkennung des Zielobjekts.

Schließlich können auch algorithmische Einschränkungen eine Rolle spielen. Viele Tracking-Verfahren basieren auf Annahmen über die Bewegung oder das Erscheinungsbild des Objekts, 
welche in realen Szenarien nicht immer erfüllt sind. Dadurch entstehen unvermeidbare Unsicherheiten, die bei der Interpretation der Tracking-Ergebnisse berücksichtigt werden müssen.



## Praktische Arbeit

### Ausgangsmaterial und Videovorbereitung

#### Rohmaterial der Videoaufnahmen

![Rohmaterial der Videoaufnahmen](img/Rohdatei.png){width=50%}


Das Rohmaterial für die Analyse der Ist-Flugbahn wurde in Graz bei einer
Rollstuhl-Basketball-Mannschaft aufgenommen. Die Videoaufnahmen enthielten mehrere
Basketballwürfe in einer durchgehenden Sequenz.

Um eine gezielte Analyse einzelner Würfe zu ermöglichen, wurde das Rohmaterial in
mehrere kurze Videoclips aufgeteilt, wobei jeder Clip genau einen Wurf enthält.
Diese Clips wurden separat gerendert und dienen als standardisierte Eingabedaten
für die weitere Verarbeitung.

Für das Schneiden und Vorbereiten der Videos wurde die Software DaVinci Resolve
verwendet. Dadurch konnte eine gleichbleibende Qualität der Videoclips sowie eine
klare zeitliche Abgrenzung der einzelnen Würfe sichergestellt werden.



### Technische Umsetzung der Ist-Flugbahn

Die Implementierung der Ist-Flugbahn erfolgte mithilfe der Programmiersprache Python
in der Entwicklungsumgebung Visual Studio Code. Python eignet sich besonders für
Bild- und Videoverarbeitung sowie für experimentelle und wissenschaftliche Anwendungen.

Zur Erkennung der Ist-Flugbahn wird der Basketball in jedem Frame des Videos verfolgt.
Aus den ermittelten Ballpositionen werden diskrete Punkte erzeugt, welche den
tatsächlichen Flugweg des Balls beschreiben. Diese Punkte werden anschließend
miteinander verbunden und grafisch im Videobild dargestellt.

Eine erste funktionsfähige Version der Ist-Flugbahn wurde erfolgreich umgesetzt
und bildet die Grundlage für den späteren Vergleich mit der Soll-Flugbahn


### Herausforderungen beim Tracking
Zu Beginn der Entwicklung traten Probleme beim Tracking des korrekten Objekts auf.
Insbesondere wurde in manchen Fällen nicht der Basketball, sondern die Hand des
Schützen verfolgt. Dieses Problem trat vor allem dann auf, wenn Ball und Hand räumlich
sehr nahe beieinander lagen.

In solchen Situationen identifizierte der Tracking-Algorithmus fälschlicherweise
die größere oder stärker bewegte Objektregion als Ziel. Dies führte zu fehlerhaften
Flugbahnen und machte eine zuverlässige Analyse unmöglich.



### Lösungsansatz: Manuelle Initialisierung der Region of Interest (ROI)

#### Manuelle Auswahl der Region of Interest (ROI)

![Manuelle ROI-Auswahl](img/ROI.png){width=50%}

Zur Lösung dieses Problems wurde ein manueller Initialisierungsschritt eingeführt.
Dabei wird ein Frame ausgewählt, in dem der Basketball eindeutig sichtbar und klar
von der Hand des Spielers getrennt ist.

In diesem Frame wird eine präzise Region of Interest (ROI) um den Ball definiert.
Diese ROI dient als Startpunkt für den Tracker und stellt sicher, dass ausschließlich
der Basketball als Zielobjekt erkannt und verfolgt wird.

Durch diese gezielte Initialisierung konnte verhindert werden, dass der Tracker
auf die Spielerhand wechselt. Die Stabilität und Genauigkeit des Balltrackings
wurden dadurch deutlich verbessert.

Zusätzlich wird eine Plausibilitätsprüfung eingesetzt, bei der unplausible
Bewegungssprünge des Balls zwischen zwei Frames erkannt werden. In solchen Fällen
wird das Tracking abgebrochen, um fehlerhafte Ergebnisse zu vermeiden.



### Visualisierung der Ist-Flugbahn

![Visualisierung der Ist-Flugbahn](img/Flugbahn.png){width=60%}


Die erfassten Ballpositionen werden zur Visualisierung der Ist-Flugbahn genutzt.
Dabei werden die einzelnen Tracking-Punkte in zeitlicher Reihenfolge miteinander
verbunden und als Linie im Videobild dargestellt.

Die Visualisierung erfolgt entweder als Overlay in einer Videosequenz oder als
Einzelbild mit eingezeichneter Ist-Flugbahn. Dadurch wird der reale Bewegungsverlauf
des Balls anschaulich dargestellt und kann intuitiv analysiert werden.

Diese Darstellung bildet die Grundlage für den späteren Vergleich mit der Soll-Flugbahn
und ermöglicht es, Abweichungen zwischen idealem und tatsächlichem Wurfverlauf
klar zu erkennen.



### Aktueller Stand der Ist-Flugbahn-Komponente

Die Ist-Flugbahn-Komponente ist aktuell funktionsfähig und liefert stabile Ergebnisse.
Das Balltracking funktioniert zuverlässig, sofern der Tracker korrekt initialisiert
wird und der Ball im Videomaterial eindeutig sichtbar ist.

Die erzeugte Ist-Flugbahn dient bereits als valide Grundlage für den Vergleich mit der
Soll-Flugbahn und stellt einen wesentlichen Bestandteil der Videoanalyse dar.



### Offene Punkte und Ausblick

Ein noch offener Punkt ist die vollständige Zusammenführung der Ist- und Soll-Flugbahn
in einer gemeinsamen Vergleichskomponente. Dabei müssen insbesondere die zeitliche
Synchronisation der Flugbahnen, die Umrechnung der Koordinatensysteme sowie
unvermeidbare Tracking-Abweichungen berücksichtigt werden.

Die Kombination beider Flugbahnen stellt einen wichtigen nächsten Entwicklungsschritt dar,
um Spieler*innen ein direktes visuelles Feedback über Abweichungen zwischen realem
und idealem Wurfverlauf zu ermöglichen.



### Eingesetzte Programmiersprache und Bibliotheken (Ist-Flugbahn)

#### Programmiersprache: Python

Die Ist-Flugbahn wurde in Python implementiert. Python eignet sich besonders für
Computer-Vision-Anwendungen und wissenschaftliche Auswertungen und ermöglicht eine
schnelle Entwicklung sowie gute Wartbarkeit.

**Vorteile:**
- Hohe Entwicklungsgeschwindigkeit  
- Große Auswahl an Bibliotheken für Bildverarbeitung und Numerik  
- Gute Lesbarkeit und einfache Wartung  
- Plattformunabhängig  

**Nachteile:**
- Geringere Performance als kompilierte Sprachen  
- Abhängigkeit von externen Bibliotheken  
- Für Echtzeit-Systeme teilweise zusätzlicher Optimierungsbedarf  

**Alternativen:**
- C++ (sehr performant, aber deutlich höherer Entwicklungsaufwand)  
- MATLAB (stark für Analyse, aber lizenzpflichtig)  
- Java (gut für Backend, weniger verbreitet für Computer Vision)



#### OpenCV (`cv2`)

OpenCV ist die zentrale Bibliothek für die Videoverarbeitung und das Tracking.
Sie wird für das Laden der Videos, das Balltracking, die Benutzerinteraktion
sowie das Zeichnen der Overlays verwendet.

**Vorteile:**
- Leistungsfähige Computer-Vision-Bibliothek  
- Viele fertige Tracking-Algorithmen  
- Gute Dokumentation und große Community  

**Nachteile:**
- Tracker teilweise nur in `opencv-contrib-python` verfügbar  
- Tracking fehleranfällig bei Verdeckungen oder schlechten Lichtverhältnissen  



#### NumPy (`numpy`)

NumPy wird zur Speicherung und Weiterverarbeitung der ermittelten Ballpositionen
verwendet. Die Koordinaten werden als numerische Arrays gespeichert und anschließend
in CSV-Dateien exportiert.

**Vorteile:**
- Effiziente Verarbeitung numerischer Daten  
- Standardformat für wissenschaftliche Auswertungen  

**Nachteile:**
- Höherer Speicherbedarf bei großen Datenmengen  



#### JSON und Dateisystem (`json`, `os`)

Zur Speicherung von Metadaten und Analyseergebnissen wird das JSON-Format verwendet.
Zusätzlich werden mit der `os`-Bibliothek Projektpfade und Ausgabeverzeichnisse
verwaltet.

**Vorteile:**
- Plattformunabhängiges, gut lesbares Datenformat  
- Ideal für Datenaustausch mit Backend und Frontend  

**Nachteile:**
- Für sehr große Datenmengen weniger effizient als binäre Formate  
