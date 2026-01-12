# Teilaufgabe Schüler Bacher
\textauthor{Bacher Fabian} 



## Einführung in den Soll Flugbahn Teil

Eine Soll-Flugbahn bezeichnet die idealerweise erwartete Flugkurve eines geworfenen Basketballs. In einfachen Worten: Es ist der Pfad, den der Ball nehmen soll – also der gewünschte oder berechnete Verlauf vom Abwurf bis zum Korb unter optimalen Bedingungen. Theoretisch folgt ein frei geworfener Ball (ohne externe Störeinflüsse) einer parabolischen Bahn – einer sogenannten Wurfparabel
de.wikipedia.org
. Diese glatte Kurve ergibt sich aus den physikalischen Grundlagen des Wurfs: Schwerkraft zieht den Ball nach unten, während der Schwung ihn vorwärts und aufwärts trägt. Die Soll-Flugbahn ist somit die vorgesehene Bahn des Balls, die man basierend auf Abwurfwinkel, Abwurfgeschwindigkeit und Physik prognostizieren kann.

## Relevanz im Projekt

In unserem Rollstuhl-Basketball-Tracking-Projekt spielt die Soll-Flugbahn eine wichtige Rolle als Referenz und Zielvorgabe. Da wir die tatsächlichen Würfe mit Sensoren oder Videoanalyse aufzeichnen, brauchen wir einen Maßstab, um diese Daten einzuordnen. Hier kommt die Soll-Flugbahn ins Spiel: Sie liefert uns den „Goldstandard“ – also eine ideale Flugkurve des Balls, an dem wir alles messen können. Konkret können wir aus den Anfangsdaten eines Wurfs (Position, Winkel, Geschwindigkeit des Balls beim Loslassen) mittels Physik berechnen, wohin der Ball gehen sollte. Diese berechnete Soll-Flugbahn ist relevant, weil sie im Projekt als Benchmark dient: Wir können überprüfen, ob ein gemessener Wurf erwartungsgemäß verläuft, ob er zu kurz oder zu flach ist, oder ob Unregelmäßigkeiten auftreten. Kurz: Die Soll-Flugbahn hilft uns, die Leistungsfähigkeit und Genauigkeit unseres Trackings sowie die Qualität der Würfe besser zu verstehen.




## Praktische Arbeit

### Beginn der Entwicklung 

Im Rahmen der Diplomarbeit „Basketball-Effizienzsteigerung durch Videoanalyse“ wurde ein eigenständiger Projektteil zur Berechnung und Visualisierung einer Soll-Flugbahn umgesetzt. Ziel dieses Teilprojekts war es, eine ideale Flugkurve für einen Basketballwurf zu bestimmen, unabhängig davon, wie der Ball tatsächlich geflogen ist. Der Fokus lag somit nicht auf der Analyse der Ist-Flugbahn, sondern auf der Ermittlung einer theoretisch optimalen Wurfparabel, die zu einem erfolgreichen Treffer führt.

Die Besonderheit des Projekts besteht darin, dass die verwendeten Videodaten von Spielern des österreichischen Rollstuhlbasketball-Nationalteams stammen. Dadurch unterscheiden sich Abwurfhöhe, Abwurfposition und Körperhaltung deutlich von herkömmlichen Basketballwürfen, was eine individuelle und flexible Lösung erforderlich machte.

Zu Beginn des Projekts wurde eine klare Projektstruktur erstellt, um eine saubere Trennung zwischen Rohdaten, Verarbeitungsskripten und Ergebnissen zu gewährleisten. Die Implementierung erfolgte hauptsächlich in der Programmiersprache Python, da diese umfangreiche Bibliotheken für Videoverarbeitung, numerische Berechnungen und Visualisierung bietet. Zur Isolation der Entwicklungsumgebung wurde eine virtuelle Python-Umgebung eingerichtet, wodurch eine reproduzierbare und stabile Ausführung des Projekts sichergestellt werden konnte.

Die Videoaufnahmen der Würfe wurden in einem eigenen Datenordner abgelegt und bildeten die Grundlage für alle weiteren Verarbeitungsschritte. Zusätzlich wurde ein separater Ordner für Kalibrierungsdaten eingerichtet, da diese eine zentrale Rolle bei der Umrechnung von Bildkoordinaten in reale physikalische Größen spielen.

### Kalibrierung des Basketballkorbs

Ein essenzieller Schritt für die Berechnung der Soll-Flugbahn war die Kalibrierung des Korbes. Dabei wurde aus einem Videoframe der Mittelpunkt des Korbes in Pixelkoordinaten bestimmt. Zusätzlich wurde ein Skalierungsfaktor berechnet, der angibt, wie viele Meter einem Pixel im Bild entsprechen. Diese Kalibrierung ermöglichte es, später Abwurfpositionen und Flugbahnen nicht nur im Bild, sondern auch in realen physikalischen Einheiten (Meter) zu berechnen.

Die Kalibrierungsdaten wurden in einer JSON-Datei gespeichert und von allen relevanten Programmen geladen, um konsistente Ergebnisse sicherzustellen.

### Grundkonzept der Soll-Flugbahn

Die Soll-Flugbahn basiert auf einem physikalischen Wurfmodell, das die Bewegung eines Basketballs als schrägen Wurf unter Einfluss der Erdgravitation beschreibt. Die Flugbahn wird durch eine Parabel dargestellt, deren Form von folgenden Parametern abhängt:
- Abwurfposition (horizontal und vertikal)
- Abwurfwinkel
- Anfangsgeschwindigkeit
- Erdbeschleunigung

Ziel der Berechnung ist es, jene Kombination aus Abwurfwinkel und Anfangsgeschwindigkeit zu finden, mit der der Ball den Korb erreicht und dabei eine möglichst geringe Anfangsgeschwindigkeit benötigt. Diese Annahme basiert auf dem Gedanken, dass ein effizienter Wurf weniger Kraftaufwand erfordert und somit reproduzierbarer ist.

### Interaktive Bestimmung des Abwurfpunkts

Da der exakte Abwurfpunkt nicht zuverlässig automatisch erkannt werden konnte, wurde eine interaktive Lösung implementiert. Das entwickelte Programm öffnet das jeweilige Wurfvideo und erlaubt dem Benutzer, frameweise durch das Video zu navigieren. Mithilfe der Pfeiltasten kann der genaue Zeitpunkt des Ballabwurfs ausgewählt werden.

Anschließend wird der Abwurfpunkt manuell per Mausklick festgelegt. Dieser Punkt repräsentiert entweder die Ballposition oder die Handposition im Moment des Abwurfs. Diese manuelle Auswahl stellte sich als besonders robust heraus, da die Videos direkt beim Abwurf beginnen und der Ball oft nur wenige Frames sichtbar ist.


### Berechnung und Visualisierung der Soll-Flugbahn

Nach Auswahl des Abwurfpunkts wird die Soll-Flugbahn berechnet. Dabei wird ein definierter Winkelbereich systematisch durchlaufen und für jeden Winkel die notwendige Anfangsgeschwindigkeit berechnet. Die physikalisch gültigen Lösungen werden geprüft, und jene Lösung mit der geringsten Anfangsgeschwindigkeit wird ausgewählt.

Besonderes Augenmerk lag darauf, dass die Berechnung unabhängig davon funktioniert, ob sich der Korb links oder rechts vom Abwurfpunkt befindet. Dafür wurde die Berechnung der horizontalen Flugrichtung entsprechend angepasst.

Die berechnete Soll-Flugbahn wird anschließend direkt auf einen Videoframe gezeichnet. Zusätzlich zum Overlay-Bild werden alle relevanten Berechnungsdaten in einer strukturierten JSON-Datei gespeichert.

### Batch-Verarbeitung mehrerer Würf
Um mehrere Würfe effizient auswerten zu können, wurde ein Batch-Skript entwickelt. Dieses öffnet automatisch alle vorhandenen Wurfvideos nacheinander. Für jeden Wurf muss lediglich der Abwurfpunkt ausgewählt werden, woraufhin das Programm selbstständig die Soll-Flugbahn berechnet und speichert. Dadurch konnte eine große Anzahl an Würfen mit geringem manuellem Aufwand verarbeitet werden.

### Statistische Auswertung und Ergebnisdarstellung

Die gespeicherten Ergebnisse aller Würfe wurden anschließend automatisiert gesammelt. Aus den einzelnen JSON-Dateien wurde eine zentrale CSV-Datei erzeugt, die unter anderem folgende Werte enthält:

- Abwurfwinkel
- Anfangsgeschwindigkeit
- verwendeter Frame
- zugehöriger Videoclip

Diese CSV-Datei ist direkt mit Tabellenkalkulationsprogrammen wie Microsoft Excel kompatibel und bildet die Grundlage für weitere Auswertungen.

Zusätzlich wurden verschiedene Diagramme erstellt, darunter Streudiagramme, Balkendiagramme und Histogramme. Abschließend wurde ein automatischer PDF-Report generiert, der alle Diagramme sowie statistische Kennzahlen übersichtlich auf einer Seite zusammenfasst. Dieser Report eignet sich sowohl für die Dokumentation der Diplomarbeit als auch für Präsentationen.

### Weiterentwicklung und Verfeinerung der Soll-Flugbahn

Im Vergleich zur ursprünglichen Implementierung der Soll-Flugbahn wurde das Modell im weiteren Projektverlauf wesentlich erweitert und präzisiert. Während zu Beginn eine idealisierte Wurfparabel berechnet wurde, die ausschließlich den Korb als Zielpunkt berücksichtigte, erfolgte später eine realitätsnahe Anpassung unter Einbeziehung zusätzlicher physikalischer und praktischer Randbedingungen.

Zunächst wurde die Zieldefinition der Soll-Flugbahn verändert. Anstatt die Parabel exakt auf die Korbmitte zu richten, wird nun das Ballzentrum so berechnet, dass der Ball den Korb mit einem Sicherheitsabstand passiert. Dabei wird der reale Ballradius sowie ein zusätzlicher Clearance-Abstand berücksichtigt, sodass sichergestellt ist, dass der Ball den Ring nicht berührt, sondern sauber durch den Korb fällt. Diese Anpassung orientiert sich an der sportwissenschaftlichen Theorie, wonach erfolgreiche Würfe den Korb in der hinteren Hälfte mit ausreichender Höhe passieren.

Darüber hinaus wurde der Einfallswinkel des Balls am Korb explizit in die Berechnung integriert. Basierend auf Literaturangaben zur optimalen Wurfparabel im Basketball wurde ein Mindest-Einfallswinkel definiert, da steilere Eintrittswinkel die Trefferwahrscheinlichkeit erhöhen. Die Soll-Flugbahn wird daher nur akzeptiert, wenn dieser Winkel einen vorgegebenen Mindestwert überschreitet. Falls unter diesen Bedingungen keine gültige Lösung gefunden wird, greift ein kontrollierter Fallback-Mechanismus, der die Einschränkungen schrittweise lockert, ohne die physikalische Plausibilität zu verlieren.

Eine wesentliche Erweiterung gegenüber der ursprünglichen Version stellt die Berücksichtigung des Auffangnetzes hinter dem Korb dar. In der realen Versuchsanordnung befindet sich hinter dem Korb ein Fangnetz, das in früheren Versionen der Soll-Flugbahn nicht berücksichtigt wurde. Dies führte dazu, dass berechnete Parabeln teilweise durch das Netz verliefen, was in der Praxis nicht realistisch ist. In der überarbeiteten Implementierung wird das Fangnetz als räumliche Begrenzung modelliert. Dabei wird die Oberkante des Netzes als horizontale Grenze definiert, die von der Balloberkante nach dem Passieren des Korbes nicht überschritten werden darf.

Um diese Bedingung umzusetzen, wird die Flugbahn hinter dem Korb abschnittsweise überprüft. Für jeden relevanten Punkt der Parabel wird kontrolliert, ob sich die Balloberkante unterhalb der angenommenen Netzoberkante befindet. Nur Soll-Flugbahnen, die diese Bedingung erfüllen, werden als gültig akzeptiert. Dadurch wird gewährleistet, dass die visualisierte Soll-Flugbahn sowohl den Korb korrekt trifft als auch das Fangnetz nicht schneidet.

Zusätzlich wurde die Visualisierung erweitert. Neben der Soll-Flugbahn und den Markierungen für Abwurfpunkt und Korb wird nun auch die angenommene Oberkante des Auffangnetzes im Video dargestellt. Dies ermöglicht eine intuitive visuelle Kontrolle der berechneten Flugbahn und verdeutlicht die Einhaltung der Randbedingungen unmittelbar im Bildmaterial.

Zusammenfassend stellt die überarbeitete Soll-Flugbahn eine deutlich realitätsnähere Modellierung dar als die ursprüngliche Version. Durch die Einbeziehung von Ballgeometrie, Einfallswinkel, Sicherheitsabständen und der realen Versuchsumgebung wurde aus einer idealisierten Wurfparabel ein praxisnahes Referenzmodell geschaffen, das als fundierte Vergleichsbasis für die Analyse der Ist-Flugbahn dient.

### Einbindung der theoretischen Grundlagen aus der Fachliteratur

Die Weiterentwicklung der Soll-Flugbahn erfolgte nicht ausschließlich auf Basis programmiertechnischer Überlegungen, sondern stützt sich gezielt auf sportwissenschaftliche und biomechanische Erkenntnisse aus der Fachliteratur. Insbesondere wurden dabei die vom Betreuer zur Verfügung gestellten PDF-Unterlagen zur idealen Wurfparabel im Basketball sowie zu positionsabhängigen Unterschieden von Würfen herangezogen.

In diesen Unterlagen wird beschrieben, dass erfolgreiche Basketballwürfe durch eine Kombination aus ausreichend hohem Abwurfwinkel, einem steilen Einfallswinkel am Korb sowie einer präzisen Zielzone charakterisiert sind. Die Literatur hebt hervor, dass Würfe mit einem größeren Einfallswinkel eine höhere Fehlertoleranz besitzen, da der Ball mit größerer Wahrscheinlichkeit durch den Korb fällt, selbst wenn die horizontale Zielgenauigkeit leicht abweicht. Diese Erkenntnisse bildeten die Grundlage für die Einführung eines Mindest-Einfallswinkels in der Berechnung der Soll-Flugbahn.

Darüber hinaus wird in der Fachliteratur erläutert, dass der Ball den Korb idealerweise nicht exakt in der geometrischen Mitte, sondern leicht in der hinteren Korbhälfte passieren sollte. Dieses Prinzip wurde in der Implementierung berücksichtigt, indem nicht die Ringmitte selbst als Zielpunkt für den Ballmittelpunkt verwendet wird, sondern ein leicht nach unten versetzter Zielpunkt, der den Ballradius sowie einen zusätzlichen Sicherheitsabstand einbezieht. Dadurch wird sichergestellt, dass die Balloberkante den Ring nicht berührt und der Wurf den theoretisch optimalen Eintrittspfad einhält.

Die PDF-Unterlagen dienten zudem als Referenz für die Wahl realistischer Winkelbereiche. Der Abwurfwinkel der Soll-Flugbahn wurde bewusst auf einen Bereich beschränkt, der in der Literatur als biomechanisch sinnvoll beschrieben wird. Gleichzeitig wurde ein mehrstufiges Suchverfahren implementiert, das zunächst strenge theoretische Vorgaben anwendet und diese nur dann schrittweise lockert, wenn unter realen Aufnahmebedingungen keine gültige Lösung gefunden werden kann.

Zusammenfassend lässt sich festhalten, dass die theoretischen Inhalte aus den bereitgestellten PDF-Dokumenten direkt in die mathematische Modellierung und algorithmische Umsetzung der Soll-Flugbahn eingeflossen sind. Die Literatur diente dabei nicht nur als Hintergrundinformation, sondern als konkrete Entscheidungsgrundlage für Parameterwahl, Randbedingungen und Validierung der berechneten Flugbahnen. Dadurch konnte eine enge Verbindung zwischen Theorie und praktischer Umsetzung im Rahmen der Videoanalyse hergestellt werden.




## Technologieentscheidungen

Im Rahmen der Diplomarbeit mussten zu Beginn mehrere grundlegende Technologieentscheidungen getroffen werden. Diese Entscheidungen betrafen insbesondere die Wahl der Entwicklungsumgebung, der Programmiersprache sowie der eingesetzten Bibliotheken. Ziel war es, eine Lösung zu entwickeln, die sowohl technisch leistungsfähig als auch für ein Schulprojekt realistisch umsetzbar ist.

### Entwicklungsumgebung (VS Code)

Als Entwicklungsumgebung wurde Visual Studio Code (VS Code) verwendet. VS Code ist ein plattformunabhängiger Quelltexteditor, der für Windows, macOS und Linux verfügbar ist und sich besonders für die Entwicklung mit Python eignet.

VS Code bietet eine übersichtliche Benutzeroberfläche, integrierte Terminalfunktionen sowie eine Vielzahl an Erweiterungen, die speziell für die Softwareentwicklung konzipiert sind. Durch diese Eigenschaften eignet sich VS Code sowohl für Einsteiger als auch für fortgeschrittene Entwickler.

### Programmiersprache

Als Programmiersprache wurde Python gewählt. Python ist eine weit verbreitete, interpretierte Programmiersprache, die besonders in den Bereichen Datenanalyse, maschinelles Lernen und Bildverarbeitung eingesetzt wird.

Die Entscheidung für Python basierte auf der hohen Verfügbarkeit leistungsfähiger Bibliotheken sowie auf der guten Lesbarkeit und Verständlichkeit des Codes. Gerade für ein Schulprojekt mit begrenzter Entwicklungszeit stellte Python eine sehr geeignete Wahl dar.

#### Vorteile von Python

- entscheidender Vorteil von Python ist die große Auswahl an Bibliotheken für Video- und Bildverarbeitung, mathematische Berechnungen sowie Datenvisualisierung. Dadurch konnte ein Großteil der benötigten Funktionalität ohne aufwendige Eigenimplementierungen umgesetzt werden.

- entscheidender Vorteil von Python ist die große Auswahl an Bibliotheken für Video- und Bildverarbeitung, mathematische Berechnungen sowie Datenvisualisierung. Dadurch konnte ein Großteil der benötigten Funktionalität ohne aufwendige Eigenimplementierungen umgesetzt werden.

#### Nachteile von Python 

- Im Vergleich zu kompilierten Sprachen wie C++ weist Python eine geringere Ausführungsgeschwindigkeit auf. Für zeitkritische Echtzeitanwendungen könnte dies ein Nachteil sein

### Verwendete Bibliotheken

#### OpenCV (Open Source Computer Vision Library)

Für die Video- und Bildverarbeitung wurde die Bibliothek OpenCV eingesetzt. OpenCV ermöglicht das Laden, Verarbeiten und Anzeigen von Videodateien sowie das Zeichnen von Overlays direkt auf Videoframes.

Ein großer Vorteil von OpenCV ist die hohe Performance bei gleichzeitiger einfacher Bedienbarkeit. Dadurch konnten sowohl interaktive Funktionen (z. B. Frame-Navigation und Mausklicks) als auch Visualisierungen effizient umgesetzt werden.

#### NumPy

Für mathematische Berechnungen und Vektoroperationen wurde NumPy verwendet. NumPy bietet leistungsfähige Datenstrukturen für numerische Berechnungen und ist besonders für physikalische Modelle geeignet.

Die Berechnung der Soll-Flugbahn basiert auf mathematischen Gleichungen, die mithilfe von NumPy effizient umgesetzt werden konnten.

#### Pandas und Matplotlib

Zur statistischen Auswertung der Ergebnisse kam die Bibliothek Pandas zum Einsatz. Pandas erleichtert das strukturierte Verarbeiten von Messdaten und ermöglicht den Export in Formate wie CSV, die mit Tabellenkalkulationsprogrammen kompatibel sind.

Für die grafische Darstellung der Ergebnisse wurde Matplotlib verwendet. Mit dieser Bibliothek konnten Diagramme wie Streudiagramme, Balkendiagramme und Histogramme erstellt werden, die für die Dokumentation und Präsentation der Ergebnisse genutzt wurden.

## Architektur

Das Projekt ist als Pipeline aufgebaut: Aus Rohvideos werden durch mehrere Verarbeitungsschritte strukturierte Ergebnisse erzeugt (Overlays, JSON-Summaries, CSV-Statistiken, Reports). Die Architektur trennt dabei klar zwischen Eingabedaten, Konfiguration/Kalibrierung, Verarbeitungsskripten und Ausgabeordnern.



Enthält die Rohdaten: Videoclips einzelner Würfe (z. B. wurf1.mov, wurf2.mov). Dieser Ordner ist die einzige Video-Eingabequelle.



Hier liegt die gesamte Logik. Die Scripts sind modular nach Aufgaben getrennt:

- Analyse eines Clips (Tracking, Overlays, Messwerte)
- Soll-Flugbahn (Abwurfpunkt wählen, Parabel berechnen, Overlay erzeugen)
- Batch-Verarbeitung (mehrere Clips automatisiert verarbeiten)
- Statistik/Reporting (CSV sammeln, Plots und PDF erzeugen)

