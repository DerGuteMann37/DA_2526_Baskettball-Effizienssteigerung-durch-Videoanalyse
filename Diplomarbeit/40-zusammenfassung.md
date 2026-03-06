# Zusammenfassung

Ziel dieser Diplomarbeit war die Entwicklung eines Systems zur Effizienzsteigerung von Basketballwürfen durch Videoanalyse. Dafür wurden vier zentrale Bereiche bearbeitet: die theoretischen Grundlagen, die Analyse der Ist- und Soll-Flugbahn, das Backend sowie das Frontend. Gemeinsam bilden diese Teile ein Gesamtsystem, mit dem Würfe aus Videomaterial analysiert, gespeichert und übersichtlich dargestellt werden können.

Im theoretischen Teil wurden die fachlichen und technischen Grundlagen erarbeitet. Dazu gehören unter anderem Objekt-Tracking, Videoanalyse, Datenverarbeitung, REST-Schnittstellen, relationale Datenbanken und moderne Webentwicklung. Diese Inhalte bildeten die Grundlage für die praktische Umsetzung.

Ein wesentlicher Teil der Arbeit war die Videoanalyse des Basketballwurfs. Dabei wurde die tatsächliche Flugbahn des Balls aus Videodaten ermittelt und als Ist-Flugbahn dargestellt. Zusätzlich wurde die gemeinsame Visualisierung von Ist- und Soll-Flugbahn umgesetzt, um Abweichungen direkt sichtbar zu machen. Da automatische Ballerkennung unter realen Bedingungen nicht zuverlässig genug funktionierte, wurde eine manuelle Initialisierung gewählt, um genauere Ergebnisse zu erreichen.

Im Backend wurde ein Spring-Boot-System entwickelt, das Analyseergebnisse speichert, verarbeitet und über eine REST-Schnittstelle bereitstellt. Damit können Spieler-, Trainings- und Wurfdaten dauerhaft verwaltet und für statistische Auswertungen genutzt werden. Im Frontend wurde eine browserbasierte Anwendung umgesetzt, die Login, Dashboard, Video-Upload sowie Analyse- und Statistikansichten bietet. Dadurch wurde eine benutzerfreundliche Oberfläche für die spätere Gesamtnutzung geschaffen.

Rückblickend war das Thema gut gewählt, da es einen praktischen Nutzen im Sportbereich mit mehreren technischen Disziplinen verbindet. Erreicht wurde ein funktionsfähiger Prototyp, bei dem die wichtigsten Komponenten bereits umgesetzt wurden. Herausforderungen ergaben sich vor allem bei der automatischen Objekterkennung, der Datenkopplung und der Abstimmung zwischen den Projektteilen.

Für die Zukunft bieten sich mehrere Erweiterungen an, etwa eine robustere automatische Ballerkennung, die vollständige Live-Anbindung aller Systemteile, zusätzliche Statistikfunktionen und eine weitere Optimierung des Frontends. Insgesamt entstand eine gute Grundlage, auf der zukünftige Arbeiten direkt aufbauen können.
