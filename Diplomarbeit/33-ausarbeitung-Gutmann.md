# Teilaufgabe Gutmann Florian
\textauthor{Gutmann Florian} 


## Theorie

Das Backend bildet die technische Grundlage für die Speicherung, Verarbeitung und Bereitstellung der im Projekt erhobenen Daten. Im Rahmen dieser Diplomarbeit wurde ein System zur Effizienzsteigerung von Basketballwürfen durch Videoanalyse entwickelt. Die Videoanalyse liefert dabei Messwerte und Parameter zu einzelnen Würfen, beispielsweise den Abwurfpunkt, die Korbposition, die Geschwindigkeit, den Abwurfwinkel sowie Daten zur Flugbahn des Balls. Damit diese Informationen langfristig gespeichert, ausgewertet und für das Frontend nutzbar gemacht werden können, wurde ein eigenständiges Backend entwickelt.

Die zentrale Aufgabe des Backends besteht darin, die aus den Analyseprozessen entstehenden Daten strukturiert zu persistieren und über definierte Schnittstellen bereitzustellen. Zusätzlich übernimmt das Backend die Berechnung statistischer Kennzahlen, die Trainingsfortschritte messbar machen. Dadurch entsteht eine objektive Grundlage, um Würfe nicht nur einzeln zu betrachten, sondern auch über längere Zeiträume hinweg zu vergleichen und Entwicklungen sichtbar zu machen.

## Backend

![Backend](img/Backend_hell.png)

Unter dem Backend versteht man den serverseitigen Teil einer Softwareanwendung. Es ist jener Bereich, der für Benutzerinnen und Benutzer meist nicht direkt sichtbar ist, jedoch die zentrale technische Grundlage eines Systems bildet. Während das Frontend die grafische Oberfläche und Interaktionen bereitstellt, übernimmt das Backend die Verarbeitung von Daten und die Ausführung der eigentlichen Anwendungslogik.

Zu den grundlegenden Aufgaben eines Backends zählen insbesondere die Verarbeitung von Anfragen, die Umsetzung fachlicher Logik, die Speicherung und Verwaltung von Daten sowie die Bereitstellung von Informationen über definierte Schnittstellen. Zusätzlich übernimmt ein Backend häufig technische Aufgaben wie Fehlerbehandlung, Logging oder Zugriffskontrolle.

Im Kontext dieser Diplomarbeit ist das Backend von zentraler Bedeutung, da es die Analyseergebnisse aus der Videoverarbeitung entgegennimmt, in einer relationalen Datenbank speichert, statistisch auswertet und die daraus entstehenden Kennzahlen über eine REST-Schnittstelle dem Frontend zur Visualisierung zur Verfügung stellt. Es fungiert somit als zentrale Logik- und Datenebene des Gesamtsystems.[@MainagenturBackend]

![Übersicht wie das Backend mit den anderen Teilen der DA zusammenhängt](img/Zusammenhaenge_Projekt.png)

## Spring Boot

### Was ist Spring Boot
Spring Boot ist ein Java-basiertes Framework zur Entwicklung serverseitiger Anwendungen. Es baut auf dem Spring Framework auf und erweitert dieses um Funktionen, die den Projektstart und die Konfiguration deutlich vereinfachen. Ziel ist es, schnell lauffähige und produktionsnahe Anwendungen zu erstellen, ohne dass umfangreiche manuelle Konfiguration erforderlich ist.

![Spring Boot nach dem Start der Application](img/SpringBoot.png)

Ein zentrales Konzept ist dabei „Convention over Configuration“. Das bedeutet, dass Spring Boot für viele Standardfälle sinnvolle Voreinstellungen bereitstellt. Zusätzlich enthält Spring Boot einen eingebetteten Webserver, beispielsweise Tomcat, wodurch Anwendungen direkt als eigenständiges Programm gestartet werden können, ohne einen externen Application-Server installieren zu müssen. Häufig benötigte Komponenten werden über sogenannte Starter-Abhängigkeiten, etwa für Web, Datenbank oder Sicherheit, gebündelt eingebunden, was die Entwicklung weiter beschleunigt.[@SpringBootOverview]

### Warum wurde Spring Boot verwendet?

Spring Boot eignet sich besonders für die Entwicklung von Backend-Systemen und Webservices, bei denen eine klare Struktur, Wartbarkeit und schnelle Umsetzung wichtig sind. Im Rahmen dieser Diplomarbeit wurde Spring Boot gewählt, da das Framework die strukturierte Entwicklung einer REST-Schnittstelle, die Anbindung einer relationalen Datenbank und die Umsetzung einer Schichtenarchitektur unterstützt.

Besonders relevant für das vorliegende Projekt waren dabei die einfache Integration von Spring Data JPA, die standardisierte Projektstruktur sowie die Möglichkeit, das Backend rasch lokal zu starten und zu testen. Dadurch konnte eine stabile technische Grundlage für die Verarbeitung und Bereitstellung der Analyseergebnisse geschaffen werden.[@SpringBootUseCases]

### Was ist eine REST-API
Eine REST-API (Representational State Transfer Application Programming Interface) ist eine Programmierschnittstelle, die die Kommunikation zwischen unterschiedlichen Softwaresystemen über das HTTP-Protokoll ermöglicht. Daten und Funktionen werden dabei in Form von Ressourcen bereitgestellt, auf die Clients gezielt zugreifen können.

Die Datenübertragung erfolgt häufig im JSON-Format. Ein Client kann beispielsweise Spieler-, Trainings- oder Statistikdaten abrufen sowie neue Daten an das Backend senden. REST beschreibt dabei ein allgemeines Konzept zur Gestaltung von Webschnittstellen und ist nicht an ein bestimmtes Framework gebunden. Die konkrete Umsetzung kann beispielsweise mit Spring Boot erfolgen.[@RedHatRESTAPI]

### Wie ist die Funktionsweise von REST-API
Die Funktionsweise einer REST-API basiert auf dem Prinzip, dass Daten als Ressourcen betrachtet werden, die über eindeutige URLs erreichbar sind. Jede Ressource wird über HTTP-Methoden angesprochen, wobei jede Methode eine bestimmte Bedeutung hat:

  - GET: Daten abrufen (z. B. alle Spieler anzeigen)

  - POST: neue Daten anlegen (z. B. neuen Spieler erstellen)

  - PUT / PATCH: bestehende Daten ändern (z. B. Trainingseinheit aktualisieren)

  - DELETE: Daten löschen (z. B. Spieler entfernen)

Zusätzlich verwendet eine REST-API HTTP-Statuscodes, um das Ergebnis einer Anfrage zu beschreiben. Beispiele sind:

  - 200 (OK): Anfrage erfolgreich

  - 201 (Created): Ressource erfolgreich erstellt

  - 400 (Bad Request): ungültige Anfrage

  - 404 (Not Found): Ressource nicht gefunden

Ein wesentliches Merkmal von REST ist außerdem die Statelessness. Das bedeutet, dass jede Anfrage alle notwendigen Informationen enthält und der Server keinen Zustand zwischen zwei Anfragen speichern muss. Dadurch lassen sich Systeme oft einfacher skalieren und warten.[@RedHatRESTPrinciples]

Im vorliegenden Projekt stellt die REST-API die Verbindung zwischen Frontend und Backend her. Über sie können beispielsweise Spielerinnen und Spieler registriert, Trainingseinheiten verwaltet, Analysedaten importiert und statistische Kennzahlen abgerufen werden.

### Was versteht man unter CRUD?
CRUD ist ein Grundkonzept der Datenverarbeitung und beschreibt die vier grundlegenden Operationen, die in fast jedem datenbasierten System vorkommen. CRUD steht für:

  - Create: Daten erstellen (z. B. neuen Spieler anlegen)

  - Read: Daten lesen/abrufen (z. B. Spielerinformationen anzeigen)

  - Update: Daten verändern (z. B. Trainingssession bearbeiten)

  - Delete: Daten löschen (z. B. Wurfdatensatz entfernen)

Diese vier Operationen bilden die Basis für die Verwaltung von Daten in Datenbanken und werden in REST-APIs meist direkt durch HTTP-Methoden abgebildet: Create -> POST, Read -> GET, Update -> PUT/PATCH, Delete -> DELETE.[@IBMCRUD]

## Spring Initializer
Der Spring Initializr ist ein webbasiertes Tool, das die Erstellung eines neuen Spring-Boot-Projekts deutlich vereinfacht. Anstatt ein Projekt manuell aufzusetzen und alle benötigten Bibliotheken selbst zu konfigurieren, kann über den Spring Initializr in wenigen Schritten eine fertige Projektstruktur generiert werden.

Dabei werden unter anderem die Programmiersprache, das Build-Tool, die verwendete Spring-Boot-Version sowie die benötigten Abhängigkeiten ausgewählt. Auf Basis dieser Angaben erzeugt der Spring Initializr automatisch ein Projekt mit passender Ordnerstruktur, einer Startklasse, einer vorkonfigurierten Build-Datei und den notwendigen Grundeinstellungen für Spring Boot.

Der Vorteil besteht darin, dass die grundlegende Projektkonfiguration schnell, standardisiert und fehlerarm erfolgt. Dadurch kann direkt mit der eigentlichen Entwicklung begonnen werden, ohne Zeit in das manuelle Setup zu investieren.[@SpringInitializrDocs]

![Überblick Spring Initializer, zur Erstellung des Projekts](img/SpringInitializer.png)

## Programiersprache und Entwicklungstools

### Was ist Java?
Java ist eine objektorientierte Programmiersprache, die ursprünglich mit dem Ziel entwickelt wurde, plattformunabhängige Anwendungen zu ermöglichen. Ein zentrales Prinzip von Java lautet „Write once, run anywhere“. Java-Programme werden dabei in Bytecode übersetzt und anschließend von der Java Virtual Machine (JVM) ausgeführt, wodurch dieselbe Anwendung auf unterschiedlichen Betriebssystemen laufen kann.

Java wird häufig für größere, strukturierte Softwareprojekte eingesetzt, da die Sprache stark typisiert ist, viele Bibliotheken bietet und sich gut für wartbare und skalierbare Anwendungen eignet.[@OracleJavaOverview]

### Was ist JavaScript?
JavaScript ist eine Skriptsprache, die hauptsächlich für die Entwicklung von interaktiven Webanwendungen verwendet wird. Ursprünglich wurde JavaScript dafür entwickelt, Webseiten im Browser dynamisch zu machen, z. B. durch Formvalidierung, Animationen oder das Nachladen von Inhalten ohne Seitenreload.

Heute wird JavaScript nicht nur im Browser, sondern auch serverseitig eingesetzt (z. B. mit Node.js). Dadurch kann JavaScript sowohl im Frontend als auch im Backend verwendet werden, je nach Technologie-Stack.[@MDNJavaScriptIntroduction]

### Wofür wird Java verwendet?
Java wird in vielen Bereichen eingesetzt, besonders dort, wo Stabilität, Struktur und Performance wichtig sind. Typische Anwendungsbereiche sind:

  - Backend-Entwicklung (z. B. REST-APIs mit Spring Boot)

  - Unternehmenssoftware (z. B. ERP-Systeme, Verwaltungssoftware)

  - Android-App-Entwicklung (klassisch mit Java, heute oft Kotlin)

  - Server- und Cloud-Anwendungen, bei denen Skalierbarkeit entscheidend ist

In diesem Projekt ist Java vor allem relevant, weil damit das Backend umgesetzt wird und Spring Boot als Java-Framework darauf aufbaut.[@OracleJavaApplications]

### Wofür wird JavaScript verwendet
JavaScript wird vor allem für Webentwicklung genutzt, insbesondere für alles, was im Browser interaktiv sein soll. Typische Einsatzbereiche sind:

  - Frontend-Entwicklung (Benutzeroberflächen, dynamische Inhalte)

  - Web-Frameworks wie React, Vue oder Angular

  - Kommunikation mit Backends über APIs (z. B. REST-Aufrufe)

  - Backend-Entwicklung mit Node.js, wenn JavaScript auch serverseitig genutzt wird

In vielen Projekten wird JavaScript eingesetzt, um das Frontend zu bauen, das dann über eine API mit dem Backend kommuniziert.[@MDNJavaScriptOverview]

### Unterschied zwischen Java und JavaScript
Obwohl die Namen ähnlich klingen, sind Java und JavaScript zwei unterschiedliche Programmiersprachen mit unterschiedlichen Zielen und Eigenschaften:

  - **Syntax und Konzept:** Java ist objektorientiert und stark typisiert, während JavaScript dynamisch typisiert ist und flexibler verwendet werden kann.

  - **Laufzeitumgebung:** Java läuft auf der JVM, JavaScript läuft primär im Browser oder serverseitig über Node.js.

  - **Einsatzgebiet:** Java wird häufig für Backend-Systeme, Unternehmenssoftware und große Anwendungen verwendet. JavaScript ist die Standardsprache für interaktive Webseiten und moderne Web-Frontends.

  - **Struktur:** Java ist in der Regel strenger strukturiert (Klassen, Typen, Compile-Time Checks), während JavaScript mehr Freiheit bietet, aber dadurch auch fehleranfälliger sein kann, wenn kein klarer Stil eingehalten wird.

Java ist eine klassische Sprache für strukturierte, größere Anwendungen (z. B. Backends), während JavaScript vor allem für Webentwicklung und Interaktivität im Browser eingesetzt wird.[@MDNJavaScriptVsJava]

## IntelJ IDA
IntelliJ IDEA ist eine integrierte Entwicklungsumgebung von JetBrains, die insbesondere für die Entwicklung mit Java eingesetzt wird. Sie bietet Funktionen wie Code-Vervollständigung, Fehlererkennung in Echtzeit, Refactoring-Werkzeuge sowie Debugging und unterstützt dadurch eine effiziente und strukturierte Softwareentwicklung.

Im vorliegenden Projekt wurde IntelliJ IDEA hauptsächlich für die Entwicklung und Verwaltung des Spring-Boot-Backends eingesetzt. Dadurch konnten Abhängigkeiten über Maven eingebunden, Klassen strukturiert erstellt und die Anwendung lokal ausgeführt und getestet werden.[JetBrainsIntelliJIDEA]


![Ansicht IntelJ](img/IntelJUeberblick.png)


## Visual Studio Code
Visual Studio Code ist ein leichter, plattformübergreifender Code-Editor von Microsoft, der sich durch seine hohe Erweiterbarkeit auszeichnet. Er unterstützt zahlreiche Programmiersprachen und bietet Funktionen wie Syntax-Highlighting, Debugging, integriertes Terminal sowie Git-Integration.

Im Projekt wurde Visual Studio Code ergänzend eingesetzt, insbesondere für allgemeine Codearbeiten und projektübergreifende Anpassungen. Durch Erweiterungen lässt sich der Editor flexibel an unterschiedliche Anforderungen anpassen, wodurch er sich gut für moderne Softwareprojekte eignet.[@MicrosoftVSCodeOverview]

![Überblick Visual Studio Code](img/VisualStudioCodeUeberblick.png)


## Postman
Postman ist ein Tool zur Entwicklung und zum Testen von REST-APIs. Es ermöglicht, HTTP-Anfragen wie GET, POST, PUT/PATCH und DELETE direkt an ein Backend zu senden, ohne dass dafür bereits ein fertiges Frontend notwendig ist. Dabei können Request-Details wie Header, Parameter und ein JSON-Body einfach eingestellt werden. Postman zeigt anschließend die Antwort des Servers übersichtlich an, inklusive Statuscode und Rückgabedaten. Dadurch eignet sich das Tool besonders gut, um API-Endpunkte während der Backend-Entwicklung zu prüfen, Fehler zu analysieren und die Funktionalität der Schnittstelle schrittweise zu verifizieren.[@PostmanOverview]

![Überblick Postman, zur Testung von REST-APIs](img/Postman.png)

## Datenbank

### Was ist eine Datenbank?
Eine Datenbank ist ein System zur strukturierten Speicherung, Organisation und Verwaltung von Daten. Im Gegensatz zu einfachen Dateien werden Informationen in einer Datenbank nach klaren Regeln abgelegt, sodass sie gezielt durchsucht und verarbeitet werden können. Verwaltet wird eine Datenbank in der Regel durch ein Datenbankmanagementsystem (DBMS), das den Zugriff regelt und Funktionen für das Speichern, Abrufen und Bearbeiten von Daten bereitstellt. Dadurch können Daten nicht nur dauerhaft gespeichert, sondern auch konsistent und nachvollziehbar verwaltet werden.[@OracleDatabaseOverview]

### Wofür werden Datenbanken verwendet?
Datenbanken werden verwendet, um Daten dauerhaft, sicher und effizient verfügbar zu machen. Sie ermöglichen es, Informationen schnell abzufragen, zu filtern, zu sortieren und zu ändern, auch wenn sehr große Datenmengen vorhanden sind. Zudem helfen Datenbanken dabei, Daten logisch zu strukturieren und Beziehungen zwischen verschiedenen Objekten abzubilden (z. B. ein Spieler mit mehreren Trainingseinheiten oder Würfen). In Backend-Systemen sind Datenbanken besonders wichtig, weil sie die Grundlage dafür bilden, dass Anwendungsdaten wie Benutzer, Trainingsdaten oder Analyseergebnisse gespeichert und später für Auswertungen oder zur Anzeige im Frontend wieder abgerufen werden können.[@IBMDatabaseDefinition]

### Was sind Relationale Datenbanken

Relationale Datenbanken speichern Informationen in tabellarischer Form. Die Daten sind in Tabellen (Relationen) organisiert, die aus Datensätzen (Zeilen/Tupeln) und Attributen (Spalten) bestehen. Ein Datensatz beschreibt dabei ein konkretes Objekt, beispielsweise einen Spieler oder einen einzelnen Basketballwurf, während die Attribute die jeweiligen Eigenschaften dieses Objekts (z. B. Name, Zeitpunkt, Winkel oder Treffer) definieren.

Zur eindeutigen Identifikation eines Datensatzes wird in jeder Tabelle ein Primärschlüssel verwendet. Beziehungen zwischen verschiedenen Tabellen werden über Fremdschlüssel umgesetzt, indem ein Attribut einer Tabelle auf den Primärschlüssel einer anderen Tabelle verweist. Auf diese Weise lassen sich Daten logisch miteinander verknüpfen, ohne Informationen mehrfach speichern zu müssen. Dies reduziert Redundanzen, erhöht die Datenkonsistenz und erleichtert die Durchführung von Abfragen und statistischen Auswertungen, da Zusammenhänge zwischen Objekten (z. B. Spieler und Trainingseinheit und Würfe) klar modelliert werden können.

Aufgrund dieser Eigenschaften eignet sich das relationale Datenbankmodell besonders gut für das vorliegende Projekt: Die aus der Videoanalyse entstehenden Daten müssen langfristig gespeichert, eindeutig einer Trainingseinheit bzw. einem Spieler zugeordnet und anschließend für Kennzahlen wie Trefferquoten, Durchschnittswerte oder Abweichungen zwischen Soll- und Ist-Flugbahn ausgewertet werden. Relationale Datenbanken bieten dafür eine stabile und strukturierte Grundlage.[@OracleRelationalDatabase]

### H2 Datenbank
Die H2-Datenbank ist ein leichtgewichtiges relationales Datenbankmanagementsystem, das in Java geschrieben wurde und besonders häufig für Entwicklung, Tests und Prototyping eingesetzt wird. Ein großer Vorteil von H2 ist, dass sie ohne aufwendige Installation verwendet und sehr einfach in Java- und Spring-Boot-Projekte integriert werden kann.

H2 kann in zwei typischen Betriebsarten genutzt werden:

  - In-Memory-Modus: Die Datenbank läuft nur im Arbeitsspeicher und ist nach dem Beenden der Anwendung wieder leer. Das ist ideal für schnelle Tests, da keine Dateien verwaltet werden müssen.

  - File-Modus: Die Daten werden in einer Datei gespeichert und bleiben auch nach einem Neustart erhalten.

In Spring Boot wird H2 oft als Entwicklungsdatenbank verwendet, weil sie schnell startbar ist und gut mit Spring Data JPA/Hibernate zusammenarbeitet. Zusätzlich bietet H2 eine integrierte Web-Konsole, über die Tabellen, Inhalte und SQL-Abfragen bequem im Browser angesehen werden können. Für produktive Systeme wird häufig später auf leistungsfähigere Datenbanken (z. B. PostgreSQL oder MySQL) umgestellt, während H2 weiterhin für Tests und lokale Entwicklung genutzt werden kann.[@H2DatabaseOverview]

![H2 Datenbank Überblick](img/H2DatenBankUeberblick.png)

### MySQL
MySQL ist ein weit verbreitetes relationales Datenbankmanagementsystem, das für die dauerhafte Speicherung strukturierter Daten in produktiven Systemen eingesetzt wird. Die Daten werden in Tabellen organisiert und mithilfe von SQL effizient abgefragt und bearbeitet. MySQL wird häufig in Web- und Backend-Anwendungen verwendet, da es stabil, performant und für den Dauerbetrieb geeignet ist.[@MySQLOverview]

#### Was ist der Unterschied zwischen H2 Datenbank und MySql
Die H2-Datenbank und MySQL sind beide relationale Datenbanken, unterscheiden sich jedoch vor allem in ihrem Einsatzgebiet und ihrer Betriebsart:

- **Einsatzbereich:** H2 wird meist für Entwicklung und Tests genutzt, während MySQL typischerweise in produktiven Systemen eingesetzt wird.

- **Installation und Betrieb:** H2 ist sehr leichtgewichtig und kann ohne große Einrichtung direkt im Projekt laufen (z. B. In-Memory). MySQL benötigt in der Regel eine separate Installation und läuft als eigener Datenbankserver.

- **Persistenz:** H2 kann im In-Memory-Modus betrieben werden (Daten gehen nach dem Beenden verloren) oder als Datei gespeichert werden. MySQL speichert Daten standardmäßig dauerhaft auf dem Server.

- **Skalierbarkeit und Leistung:** MySQL ist für größere Datenmengen, mehrere Benutzer und dauerhafte Nutzung optimiert. H2 ist eher für kleinere lokale Umgebungen gedacht.[@BaeldungH2vsMySQL]


## Entity-Relationship-Modell

Relationale Datenbanken speichern Informationen in tabellarischer Form. Die Daten sind in Tabellen (Relationen) organisiert, die aus Datensätzen (Zeilen/Tupeln) und Attributen (Spalten) bestehen. Ein Datensatz beschreibt dabei ein konkretes Objekt, beispielsweise einen Spieler oder einen einzelnen Basketballwurf, während die Attribute die jeweiligen Eigenschaften dieses Objekts (z. B. Name, Zeitpunkt, Winkel oder Treffer) definieren.

Zur eindeutigen Identifikation eines Datensatzes wird in jeder Tabelle ein Primärschlüssel verwendet. Ein Primärschlüssel ist ein Attribut (oder eine Kombination mehrerer Attribute), dessen Wert in der Tabelle eindeutig ist und somit jeden Datensatz klar identifiziert, z. B. eine automatisch vergebene ID. Beziehungen zwischen verschiedenen Tabellen werden über Fremdschlüssel umgesetzt. Ein Fremdschlüssel ist ein Attribut in einer Tabelle, das auf den Primärschlüssel einer anderen Tabelle verweist. Dadurch kann beispielsweise ein Wurf einem bestimmten Spieler oder einer konkreten Trainingseinheit zugeordnet werden, ohne die Spielerdaten im Wurf-Datensatz erneut speichern zu müssen.

Durch diese Verknüpfungen lassen sich Daten logisch miteinander verbinden, ohne Informationen mehrfach abzulegen. Mehrfach gespeicherte Informationen bezeichnet man als Redundanzen (z. B. wenn der Name eines Spielers in vielen Wurf-Datensätzen wiederholt gespeichert wird). Redundanzen erhöhen das Risiko von Fehlern, da Änderungen dann an mehreren Stellen durchgeführt werden müssten. Die Vermeidung solcher Redundanzen verbessert die Datenkonsistenz, also die Eigenschaft, dass Daten innerhalb der Datenbank widerspruchsfrei und korrekt bleiben (z. B. ein Spielername ist überall gleich und nicht in unterschiedlichen Varianten gespeichert). Zusätzlich erleichtert diese Struktur die Durchführung von Abfragen und statistischen Auswertungen, da Zusammenhänge zwischen Objekten (z. B. Spieler und Trainingseinheit und Würfe) klar modelliert und gezielt ausgewertet werden können.[@IBMRelationalDatabase]

### Zentrale Begriffe des ER-Modells

- **Entität**  
  Eine Entität beschreibt ein eindeutig identifizierbares Objekt aus dem Anwendungsbereich. Im Projekt sind dies beispielsweise Spieler*innen, Trainingseinheiten oder einzelne Würfe. Entitäten werden später als Tabellen in der Datenbank umgesetzt.

- **Attribut**  
  Attribute beschreiben die Eigenschaften einer Entität und entsprechen den Spalten einer Tabelle. Beispiele hierfür sind der Name eines Spielers, der Zeitpunkt einer Trainingseinheit oder der Abwurfwinkel eines Wurfes.

- **Beziehung**  
  Beziehungen stellen die Verknüpfungen zwischen Entitäten dar. Sie definieren, wie Objekte zueinander in Beziehung stehen, etwa dass eine Spielerin mehrere Trainingseinheiten absolvieren kann oder dass eine Trainingseinheit aus mehreren Würfen besteht.[@LucidchartERModel]

### Unterschied zwischen Beziehungen und Kardinalitäten

- **Beziehungen** beschreiben, dass zwei Entitäten miteinander verknüpft sind (z. B. Spieler hat Trainingseinheiten).
- **Kardinalitäten** beschreiben, wie viele Objekte an dieser Beziehung beteiligt sein können (z. B. 1:n = ein Spieler kann viele Trainingseinheiten haben).[@LucidchartERRelationships]

### Was sind Kardinalitäten
Neben Entitäten, Attributen und Beziehungen sind Kardinalitäten ein zentrales Element des ER-Modells. Sie beschreiben, wie viele Objekte einer Entität mit Objekten einer anderen Entität in Beziehung stehen können. Kardinalitäten helfen dabei, die Struktur einer Datenbank korrekt zu planen und später sauber in Tabellen und Fremdschlüssel-Beziehungen umzusetzen.

- **1:1-Beziehung (One-to-One)**

  Bei einer 1:1-Beziehung ist jedes Objekt der ersten Entität genau einem Objekt der zweiten Entität zugeordnet – und umgekehrt.
  Beispiel: Ein Personalausweis gehört genau zu einer Person und eine Person hat genau einen Personalausweis.
  In relationalen Datenbanken wird dies meist über einen Fremdschlüssel realisiert, der eindeutig sein muss (Unique-Constraint).

- **1:n-Beziehung (One-to-Many)**

  Eine 1:n-Beziehung bedeutet, dass ein Objekt der ersten Entität mit mehreren Objekten der zweiten Entität verbunden sein kann, während ein Objekt der zweiten Entität nur einem Objekt der ersten Entität zugeordnet ist.
  Beispiel: Ein Spieler kann mehrere Trainingseinheiten absolvieren, aber eine Trainingseinheit gehört zu genau einem Spieler.
  In der Datenbank wird dies typischerweise dadurch umgesetzt, dass die „n-Seite“ (z. B. Trainingseinheit) einen Fremdschlüssel auf die „1-Seite“ (z. B. Spieler) enthält.

- **n:m-Beziehung (Many-to-Many)**

  Bei einer n:m-Beziehung können mehrere Objekte der ersten Entität mit mehreren Objekten der zweiten Entität verbunden sein.
  Beispiel: Studierende können mehrere Kurse besuchen und jeder Kurs hat mehrere Studierende.
  In relationalen Datenbanken wird eine n:m-Beziehung üblicherweise über eine Zwischentabelle (Join-Tabelle) umgesetzt, die die Primärschlüssel beider Entitäten als Fremdschlüssel enthält.[@LucidchartCardinality]

## ER Diagramme

Ein ER-Diagramm ist eine grafische Darstellung des Entity-Relationship-Modells und wird verwendet, um die Struktur einer Datenbank übersichtlich zu planen. Es zeigt, welche Entitäten im System vorkommen, welche Attribute diese besitzen und wie die Entitäten miteinander in Beziehung stehen. Dadurch eignet sich ein ER-Diagramm besonders gut, um komplexe Datenmodelle verständlich zu visualisieren, bevor diese in einer relationalen Datenbank umgesetzt werden.

### Notationsformen von ER-Diagrammen

- **Chen-Notation**

  Eine klassische Darstellung des ER-Modells: Entitäten werden als Rechtecke, Beziehungen als Rauten und Attribute als Ovale dargestellt. Kardinalitäten werden an den Beziehungslinien angegeben. Diese Notation ist sehr anschaulich, wird aber in der Praxis bei großen Modellen schnell unübersichtlich.

- **Crow’s-Foot-Notation (Krähenfuß)**

  Eine sehr verbreitete Notation in der Datenbankpraxis. Entitäten werden als Tabellen-/Boxen dargestellt, Beziehungen als Linien. Die Kardinalitäten werden mit Symbolen wie dem „Krähenfuß“ (für „viele“) visualisiert. Dadurch lassen sich 1:1-, 1:n- und n:m-Beziehungen sehr schnell erkennen.

- **IDEF1X-Notation**

  Eine stärker technisch orientierte Notation, die häufig in professionellen Datenbankdesigns eingesetzt wird. Sie unterscheidet klar zwischen identifizierenden und nicht-identifizierenden Beziehungen und legt großen Fokus auf Schlüsselstrukturen. Dadurch ist sie präzise, aber für Einsteiger oft komplexer.

- **UML-Klassendiagramm (als alternative Darstellung)**

  Zwar kein klassisches ER-Notation-System, aber häufig in objektorientierten Projekten genutzt. Klassen entsprechen dabei oft Entitäten, Attribute werden innerhalb der Klasse dargestellt, und Beziehungen werden als Assoziationen mit Multiplizitäten (z. B. 1..*, 0..1) angegeben. UML ist besonders praktisch, wenn Datenmodell und Code-Design eng zusammenhängen.[@LucidchartERDiagramNotation]

## Java Persistand API (JPA)

JPA, die Java Persistence API, ist eine Java-Standardspezifikation für die objekt-relationale Persistenz. Sie beschreibt, wie Java-Objekte in einer relationalen Datenbank gespeichert, gelesen und verwaltet werden können. JPA legt dabei fest, wie Persistenz grundsätzlich funktioniert, beispielsweise über Annotationen wie wie ```@Entity```, ```@Id```, ```@OneToMany```, stellt jedoch selbst keine konkrete Implementierung bereit.

Durch JPA kann die Arbeit mit der Datenbank auf einer höheren Abstraktionsebene erfolgen. Anstatt SQL direkt zu formulieren, werden Objekte gespeichert und abgefragt, wodurch der Code in vielen Fällen übersichtlicher und besser wartbar wird.[@OracleJPAOverview]

### Annotationen
Annotationen sind spezielle Markierungen im Quellcode, die zusätzliche Informationen über Klassen, Methoden oder Variablen enthalten. In Java sind sie am @-Symbol erkennbar. Sie verändern nicht direkt den Programmablauf, sondern dienen Frameworks und Tools als Metadaten, um bestimmtes Verhalten automatisch umzusetzen.

Im Backend dieser Diplomarbeit werden Annotationen beispielsweise verwendet, um eine Klasse als Datenbank-Entität zu kennzeichnen ```@Entity```, Primärschlüssel zu definieren ```@Id``` oder REST-Endpunkte zu definieren ```@RestController```, ```@GetMapping```. Dadurch wird Konfiguration direkt in den Code verlagert, was die Struktur klarer und die Entwicklung effizienter macht.[@OracleJavaAnnotations]

## Praktische Arbeit

### Vorbereitung

Bevor mit der eigentlichen Implementierung des Backends begonnen wurde, fand eine gemeinsame Planungs- und Analysephase mit allen Teammitgliedern statt. Ziel dieser Phase war es, die Schnittstellen zwischen den einzelnen Projektteilen frühzeitig zu definieren und ein gemeinsames Verständnis über benötigte Daten, Formate und Funktionalitäten zu schaffen.

Im Rahmen dieser Abstimmung wurden insbesondere die Ergebnisse der Videoanalyse betrachtet. Dabei wurde festgelegt, welche Parameter bei der Analyse einzelner Würfe entstehen und in welcher Form diese Daten dem Backend bereitgestellt werden. Zu den relevanten Parametern zählen unter anderem Informationen zum Abwurfpunkt, zur Korbposition, zum Abwurfwinkel, zur Anfangsgeschwindigkeit des Balls sowie zusätzliche Werte zur Beschreibung der Soll- und Ist-Flugbahn. Da diese Daten die Grundlage für alle späteren Auswertungen darstellen, war eine eindeutige Definition bereits zu Beginn wesentlich.

Parallel dazu wurden die Anforderungen des Frontends analysiert. Das Frontend benötigt strukturierte und konsistente Daten, um Spielerinnen und Spieler, Trainingseinheiten sowie statistische Auswertungen übersichtlich darstellen zu können. In gemeinsamen Besprechungen wurde daher festgelegt, welche Informationen vom Backend bereitgestellt werden müssen, beispielsweise Spielerstatistiken, Session-Zusammenfassungen und zeitliche Leistungsentwicklungen. Diese Abstimmung stellte sicher, dass das Backend nicht isoliert entwickelt wurde, sondern technisch und fachlich auf die Anforderungen der Benutzeroberfläche abgestimmt war.

Auf Basis dieser Analyse wurden die zentralen Aufgaben des Backends konkretisiert. Der Fokus lag dabei auf dem Entwurf einer geeigneten Datenbankstruktur, der Modellierung der benötigten Datenobjekte sowie der Bereitstellung von Schnittstellen zur Kommunikation mit dem Frontend. Durch dieses strukturierte Vorgehen konnte eine belastbare Grundlage geschaffen werden, auf der die weitere Backend-Entwicklung systematisch aufbauen konnte.

### Ergebnis der Planungsphase

Als Ergebnis der gemeinsamen Planungsphase konnten die grundlegenden Anforderungen an das Backend eindeutig festgelegt werden. Ziel war es, einen klaren und nachvollziehbaren Datenfluss zwischen Videoanalyse, Backend und Frontend zu definieren und spätere Schnittstellenänderungen möglichst zu vermeiden.

Ein zentrales Ergebnis war die Festlegung der Daten, die aus der Videoanalyse an das Backend übergeben werden. Für jeden analysierten Basketballwurf werden strukturierte Datensätze erzeugt, die sowohl geometrische als auch zeitliche Informationen enthalten. Dazu zählen unter anderem der Abwurfpunkt des Balls, die Position des Korbes, der Abwurfwinkel, die Anfangsgeschwindigkeit sowie zusätzliche Parameter zur Beschreibung der berechneten Soll-Flugbahn und der erkannten Ist-Flugbahn. Diese Daten werden automatisiert in Form von JSON-Dateien erzeugt und dienen als Eingabe für den Importprozess im Backend.

Ein weiterer wesentlicher Punkt war die Definition der internen Datenhaltung. Es wurde festgelegt, dass die Daten in einer relationalen Datenbank gespeichert werden, um eine klare Strukturierung, konsistente Verknüpfungen sowie langfristige Persistenz zu gewährleisten. Dabei wurden zentrale Entitäten identifiziert, darunter Spielerinnen und Spieler, Trainingseinheiten, einzelne Würfe sowie zugehörige Analyse- und Flugdaten. Diese Entitäten stehen in definierten Beziehungen zueinander und bilden die Grundlage für das spätere Entity-Relationship-Modell.

Zusätzlich wurden die Anforderungen des Frontends konkretisiert. Das Frontend benötigt nicht nur Rohdaten einzelner Würfe, sondern insbesondere aggregierte Informationen in Form statistischer Auswertungen. Daher wurde beschlossen, dass die Berechnung dieser Statistiken vollständig im Backend erfolgt. Das Backend stellt dem Frontend somit aufbereitete Ergebnisse zur Verfügung, beispielsweise Trefferquoten, Durchschnittswerte und zeitliche Leistungsentwicklungen. Dadurch wird die Komplexität im Frontend reduziert und eine konsistente Berechnungslogik sichergestellt.

Abschließend wurde festgelegt, dass die Kommunikation zwischen Frontend und Backend über eine REST-Schnittstelle erfolgt. Die Datenübertragung findet im JSON-Format statt, wodurch eine plattformunabhängige und erweiterbare Kommunikation ermöglicht wird. Diese Entscheidungen bildeten die Grundlage für die nachfolgenden technischen Umsetzungen im Backend und stellten sicher, dass die einzelnen Projektteile nahtlos ineinandergreifen.

## Technische Umsetzung
Nach Abschluss der Planungsphase wurde das Backend technisch umgesetzt. Ziel war es, eine stabile Basis zu schaffen, auf der Daten aus der Videoanalyse importiert, dauerhaft gespeichert und über eine REST-Schnittstelle für das Frontend bereitgestellt werden können. Für die Implementierung wurde ein Java-basierter Technologie-Stack gewählt, da dieser insbesondere in Kombination mit Spring Boot eine strukturierte Entwicklung von Webservices ermöglicht.

### Projektanlage und Entwicklungsumgebung 

Die Erstellung des Projekts erfolgte über den Spring Initializr, wodurch eine standardisierte Grundstruktur für ein Spring-Boot-Projekt erzeugt werden konnte. Als Build-Tool wurde Maven verwendet, um Abhängigkeiten einheitlich zu verwalten und den Build-Prozess nachvollziehbar zu gestalten.[@SpringBootMavenSetup]
 
 ![Erstellung des Spring Projekt mit Hilfe von Spring Initializer](img/ErstellungdesSpringProjekts.png)

Im Rahmen der Projektanlage wurden insbesondere folgende Einstellungen festgelegt:

  - Project: Maven
  - Language: Java
  - Spring Boot Version: 3.5.11

  Project Metadata
  - Group: at.htlle
  - Artifact: backend
  - Name: DA_2526_Baskettball-Effizienssteigerung-durch-Videoanalyse
  - Description: Diplomarbeit
  - Package name: at.htlle.backend
  - Packaging: Jar
  - Configuration: Properties
  - Java Version: 21
  - Dependencies: H2 Database

Nachdem alle gewünschten Angaben im Spring Initializr korrekt eingetragen und die benötigten Abhängigkeiten ausgewählt worden waren, konnte das Projekt über „Generate“ erstellt werden. Dabei wurde ein fertiges Spring-Boot-Startprojekt als ZIP-Datei heruntergeladen, das bereits die grundlegende Ordnerstruktur, eine Startklasse sowie die Build-Konfiguration enthält. Dieses Projekt wurde anschließend entpackt und in die Entwicklungsumgebung importiert, sodass direkt mit der Implementierung begonnen werden konnte.

![Projekt nach dem Öffnen in IntelJ](img/AnfangProjekt.png)

## Erstellung eines ER-Diagramms

Bevor die Datenbank technisch angebunden und im Backend umgesetzt wurde, wurde das Datenmodell zunächst mithilfe eines ER-Diagramms in Draw.io grafisch modelliert. Dadurch konnten Entitäten, Attribute und Beziehungen frühzeitig strukturiert dargestellt und vor der Implementierung fachlich überprüft werden.

Im ER-Diagramm wurden die zentralen Entitäten Player, TrainingSession, Shot, FlightData und Video definiert. Zusätzlich wurden die zugehörigen Attribute, wie Identifikationsnummern, Zeitstempel sowie analyserelevante Parameter wie Winkel, Geschwindigkeiten und Positionswerte, festgelegt.

Die Kardinalitäten wurden dabei wie folgt modelliert: Ein Player kann mehrere TrainingSessions besitzen, jede TrainingSession ist jedoch genau einem Player zugeordnet (1:n). Eine TrainingSession besteht aus mehreren Shots, wobei jeder Shot genau zu einer TrainingSession gehört (1:n). Im aktuellen Modell ist einer TrainingSession genau ein Video zugeordnet, und jedes Video gehört genau zu einer TrainingSession (1:1). Für jeden erkannten Wurf wird ein Datensatz in FlightData gespeichert, der die berechneten Flugparameter enthält.

Die eigentliche Videodatei wird dabei nicht direkt in der relationalen Datenbank gespeichert. In der Entität Video werden lediglich Metadaten wie die videoID, die zugehörige training_sessionID sowie der Dateipfad abgelegt. Diese Lösung ist sinnvoll, da Videodateien große Datenmengen umfassen und eine direkte Speicherung in der Datenbank die Performance und Wartbarkeit negativ beeinflussen würde.

Der Ablauf ist so gestaltet, dass das Frontend das Video über eine REST-Schnittstelle an das Backend übermittelt. Dort wird die Datei gespeichert beziehungsweise für die Analyse bereitgestellt. Anschließend verarbeitet die Analysekomponente das Video, erkennt die Würfe und berechnet die zugehörigen Flugparameter. Die daraus entstehenden Ergebnisse werden danach in den Tabellen Shot und FlightData gespeichert. Das ER-Diagramm bildete somit die fachliche Grundlage für die spätere Umsetzung mit JPA/Hibernate und trug zu einer konsistenten und nachvollziehbaren Implementierung des Datenbankschemas bei.

![ER-Diagramm des Backend-Datenmodells](img/ER-DIAGRAMM_hell.png)

## Datenbankanbindung
Nach der Erstellung des ER-Diagramms wurde im nächsten Schritt die Datenbankanbindung im Backend umgesetzt. Ziel war es, eine funktionierende Persistenzschicht bereitzustellen, damit die aus der Videoanalyse importierten Daten dauerhaft gespeichert und für Abfragen sowie statistische Auswertungen verwendet werden können. Für die Entwicklungsphase wurde eine H2-Datenbank eingesetzt, da sie leichtgewichtig ist und ohne zusätzliche Installation direkt mit Spring Boot betrieben werden kann.

### Test der Datenbankverbindung mit einer lokalen H2-Datenbank

Um die korrekte Datenbankanbindung frühzeitig zu überprüfen, wurde zunächst eine H2-Dateidatenbank manuell angelegt. Dafür wurde im Ordner

```\Source\backend\src\main\resources```

eine Datenbankdatei mit dem Namen da_basketball.mv.db erstellt. Diese Vorgehensweise diente dazu, die Verbindung zu einer persistenten, dateibasierten H2-Datenbank zu testen.

Anschließend wurde über die H2-Console eine Verbindung mit dem H2-Treiber (org.h2.Driver) und der entsprechenden JDBC-URL hergestellt. Über die Funktionen „Verbindung testen“ und „Verbinden“ konnte überprüft werden, ob das Backend bzw. die Console korrekt auf die Datenbankdatei zugreifen kann. Damit war sichergestellt, dass die Datenbankkonfiguration grundsätzlich funktioniert und Daten persistent in einer lokalen Datei gespeichert werden können.

![Überblick der H2 Datenbank Verbindung](img/H2_Datenbank_Verbindung.png)

### Datenbankverbindung im Projekt (Springboot + H2)

Nachdem die Funktion der H2-Dateidatenbank über die Konsole erfolgreich getestet worden war, wurde im nächsten Schritt die Datenbankverbindung direkt im Spring-Boot-Projekt eingerichtet. Ziel war es, dass das Backend beim Start automatisch eine Verbindung zur H2-Datenbank herstellt und alle Persistenzoperationen über diese Verbindung durchführen kann.

#### Schritt 1 : Einbindung der benötigten Bibiotheken (Dependencies) über Maven
Im ersten Schritt wurde das Spring-Boot-Projekt um die notwendigen Bibliotheken zur Datenpersistenz erweitert. In einem Maven-Projekt werden diese Abhängigkeiten zentral in der Datei pom.xml definiert, wodurch Maven die benötigten Libraries automatisiert verwaltet und in den Build-Prozess integriert.
Für den Zugriff auf relationale Datenbanken wurde spring-boot-starter-data-jpa eingebunden, welches die Persistenz über JPA ermöglicht und standardmäßig Hibernate als ORM-Implementierung verwendet. Als Entwicklungsdatenbank wurde H2 integriert, wodurch lokale Tests ohne zusätzlichen Datenbankserver möglich sind. Zusätzlich wurde spring-boot-starter-web verwendet, um das Backend als Webservice mit REST-Endpunkten betreiben zu können. Zur Reduktion von Boilerplate-Code kam Lombok zum Einsatz, wodurch insbesondere Daten- und Entity-Klassen übersichtlicher umgesetzt werden konnten.[@SpringDataJPAReference] [@SpringDataJPAProject] [@ProjectLombokData]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="Überblick pom.xml" .xml}
<dependencies>
    <!-- Web / REST API -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Validation -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>

    <!-- JPA / Hibernate -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <!-- H2 Datenbank -->
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>

    <!-- Lombok -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>

    <!-- Tests -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#### Schritt 2: Konfiguration der Datenbankverbindung in Spring Boot

Nach der Einbindung der benötigten Bibliotheken wurde im nächsten Schritt die Datenbankverbindung in Spring Boot eingerichtet. Die Konfiguration erfolgt zentral in der Datei src/main/resources/application.properties. Dort wird festgelegt, welche Datenbank verwendet wird und wie das Backend beim Start eine Verbindung zu dieser Datenbank herstellt.

Für die Entwicklungsphase wurde eine H2-Datenbank im In-Memory-Modus konfiguriert. Dadurch wird die Datenbank beim Start der Anwendung automatisch im Arbeitsspeicher erstellt, was schnelle lokale Tests ermöglicht und keine zusätzliche Installation eines Datenbankservers erfordert. Die Verbindung wird über eine JDBC-URL sowie den H2-Treiber hergestellt. Als Standardzugang wird der Benutzer sa verwendet.

Zusätzlich wurde JPA beziehungsweise Hibernate so konfiguriert, dass das Datenbankschema anhand der im Projekt definierten Entities automatisch erstellt oder aktualisiert werden kann (spring.jpa.hibernate.ddl-auto=update). Dadurch musste das Schema nicht manuell per SQL gepflegt werden, sondern blieb direkt mit dem Java-Datenmodell synchron. Um die Datenbank während der Entwicklung kontrollieren zu können, wurde außerdem die H2-Console aktiviert. Über den Pfad /h2-console konnten Tabellen und gespeicherte Daten im Browser eingesehen und geprüft werden.[@SpringBootDatabaseConfiguration] [@SpringBootDataAccessHowTo] [@H2Features]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="application" .properties}
      springapplicationname=DA_2526_Baskettball-Effizienssteigerung-durch-Videoanalyse

      Use an in-memory H2 database for local development to avoid file permission issues
      spring.datasource.url=jdbc:h2:mem:da_basketball;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE
      spring.datasource.driverClassName=org.h2.Driver
      spring.datasource.username=sa
      spring.datasource.password=

      JPA Configuration
      spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
      spring.jpa.hibernate.ddl-auto=update
      spring.jpa.show-sql=true

      H2 Console (fuer Entwicklung)
      spring.h2.console.enabled=true
      spring.h2.console.path=/h2-console
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Der erfolgreiche Aufbau der Datenbankverbindung wurde daran erkannt, dass die Spring-Boot-Anwendung ohne Fehlermeldung gestartet werden konnte, die H2-Console erreichbar war und die durch JPA beziehungsweise Hibernate erzeugten Tabellen dort sichtbar waren. Zusätzlich konnte durch erste Lese- und Schreibzugriffe überprüft werden, dass die Verbindung zwischen Backend und Datenbank korrekt funktionierte.

## Start der Implementierung
Bevor mit der eigentlichen Programmierung begonnen wurde, wurde zunächst die grundlegende Architektur des Backends festgelegt. Ziel war es, von Beginn an eine klare Struktur zu schaffen, damit der Code übersichtlich, wartbar und langfristig erweiterbar bleibt. Aus diesem Grund wurde eine klassische Schichtenarchitektur verwendet.

Die Schichtenarchitektur teilt ein Backend in logisch getrennte Bereiche, wobei jede Schicht eine klar definierte Aufgabe übernimmt. Dadurch wird verhindert, dass beispielsweise Datenbankzugriffe direkt in REST-Endpunkten implementiert werden oder Geschäftslogik unkontrolliert im Projekt verteilt ist. Zusätzlich erleichtert diese Trennung das Testen einzelner Komponenten sowie spätere Erweiterungen, da Änderungen in einer Schicht weniger Auswirkungen auf andere Bereiche haben.

Im Backend wurden dabei folgende Schichten vorgesehen:

  - Controller-Schicht: Bereitstellung der REST-Endpunkte, Annahme von HTTP-Anfragen und Rückgabe von  JSON-Responses.

  - Service-Schicht: Umsetzung der Geschäftslogik, z. B. Import von Analyse-Daten, Validierungen und statistische Berechnungen.

  - Repository-Schicht: Datenzugriff über Spring Data JPA Repositories (CRUD und Abfragen).

  - Entity-/Model-Schicht: Abbildung der Datenbanktabellen als Java-Entities inklusive Beziehungen.

Um diese Architektur auch im Projekt klar sichtbar zu machen, wurde eine entsprechende Package-Struktur angelegt. Durch diese vorbereitende Festlegung konnte die weitere Implementierung systematisch erfolgen und das Backend von Anfang an nach einem einheitlichen und professionellen Aufbau entwickelt werden.[@MicrosoftLayeredArchitecture]

![Layerd Achitecture](img/LayeredAchitecture.png)

## Projektstruktur 
Die im Projekt umgesetzte Package-Struktur zeigt die klare Trennung der einzelnen Verantwortungsbereiche im Backend. Insbesondere die Aufteilung in controller, service, repository, model, dto, config und exception macht die gewählte Schichtenarchitektur auch auf Code-Ebene nachvollziehbar.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="Projektstruktur" .txt}
Source/backend/src/main/java/at/htlle/backend/
|-- config/
|   |-- CorsConfig.java
|   `-- WebConfig.java
|-- controller/
|   |-- AnalysisImportController.java
|   |-- DashboardController.java
|   |-- PlayerController.java
|   |-- StatsController.java
|   `-- TrainingSessionController.java
|-- Da2526BaskettballEffizienssteigerungDurchVideoanalyseApplication.java
|-- dto/
|   |-- analysis/
|   |   |-- AnalysisImportDTO.java
|   |   |-- AnalysisImportResponseDTO.java
|   |   |-- AnalysisPayload.java
|   |   |-- ShotDTO.java
|   |   `-- SollDTO.java
|   |-- dashboard/
|   |   `-- PlayerDashboardDTO.java
|   |-- player/
|   |   |-- ApiResponse.java
|   |   |-- CreatePlayerDTO.java
|   |   |-- LoginRequest.java
|   |   |-- PlayerResponseDTO.java
|   |   `-- RegisterRequest.java
|   |-- session/
|   |   |-- CreateSessionDTO.java
|   |   `-- SessionResponseDTO.java
|   `-- stats/
|       |-- PlayerStatsDTO.java
|       |-- PlayerTrendItemDTO.java
|       `-- SessionStatsDTO.java
|-- exception/
|   |-- GlobalExceptionHandler.java
|   `-- NotFoundException.java
|-- model/
|   |-- Player.java
|   |-- Shot.java
|   |-- SollFlightData.java
|   |-- TrainingSession.java
|   `-- Video.java
|-- repository/
|   |-- PlayerRepository.java
|   |-- ShotRepository.java
|   |-- SollFlightDataRepository.java
|   |-- TrainingSessionRepository.java
|   `-- VideoRepository.java
|-- service/
|   |-- AnalysisImportService.java
|   |-- DashboardService.java
|   |-- PlayerService.java
|   |-- StatsService.java
|   `-- TrainingSessionService.java
`-- Source/
    `-- backend/
        `-- src/
            `-- main/
                `-- java/
                    `-- at/
                        `-- htlle/
                            `-- backend/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Implementirung des entity-Packages

Nach der Festlegung der Projektstruktur wurden die im ER-Diagramm definierten Tabellen als JPA-Entities in Java umgesetzt. Jede Entity entspricht dabei einer Datenbanktabelle, Attribute werden als Klassenfelder abgebildet und Beziehungen über JPA-Annotationen ```@ManyToOne```, ```@OneToMany```, ```@OneToOne``` modelliert. Dadurch kann Hibernate das Schema anhand der Entities automatisch erstellen beziehungsweise aktualisieren.


  - Entity: Player

  Die Entity Player speichert die Stammdaten einer Spielerin bzw. eines Spielers, beispielsweise Vorname, Nachname, E-Mail-Adresse, Passwort, Klasse, Geburtsdatum und Erstellungszeitpunkt. Sie bildet damit die Grundlage für die Zuordnung von Trainingseinheiten zu einer bestimmten Person.

  Das folgende Listing zeigt die Implementierung der Entity Player. Besonders relevant sind dabei die Annotationen @Entity, @Table, @Id und @GeneratedValue, da sie die Klasse als persistente Datenbankentität kennzeichnen und die automatische Vergabe des Primärschlüssels ermöglichen.


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="Player Entity" .java}
      package at.htlle.backend.model;

      import jakarta.persistence.*;
      import java.time.LocalDate;
      import java.time.LocalDateTime;

      @Entity
      @Table(name = "player")
      public class Player {

      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private Long id;

      @Column(nullable = false)
      private String firstName;

      @Column(nullable = false)
      private String lastName;

      @Column(nullable = false, unique = true)
      private String email;

      @Column(nullable = false)
      private String password;

      private String schoolClass;   // z.B. 4BHWIN
      private LocalDate birthdate;  // optional

      @Column(nullable = false)
      private LocalDateTime createdAt = LocalDateTime.now();

      public Player() {}

      public void setId(Long id) {
          this.id = id;
      }

      public String getEmail() {
          return email;
      }

      public void setEmail(String email) {
          this.email = email;
      }

      public String getPassword() {
          return password;
      }

      public void setPassword(String password) {
          this.password = password;
      }

      // Getter/Setter
      public Long getId() { return id; }

      public String getFirstName() { return firstName; }
      public void setFirstName(String firstName) { this.firstName = firstName; }

      public String getLastName() { return lastName; }
      public void setLastName(String lastName) { this.lastName = lastName; }

      public String getSchoolClass() { return schoolClass; }
      public void setSchoolClass(String schoolClass) { this.schoolClass = schoolClass; }

      public LocalDate getBirthdate() { return birthdate; }
      public void setBirthdate(LocalDate birthdate) { this.birthdate = birthdate; }

      public LocalDateTime getCreatedAt() { return createdAt; }
      public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }


      }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#### Weitere Entities
Neben Player wurden auch die Entities TrainingSession, Shot, SollFlightData und Video umgesetzt.

  - Entity: TrainingSession

    Diese Entity repräsentiert eine Trainingseinheit und enthält unter anderem Datum und Startzeitpunkt. Jede Trainingseinheit ist genau einem Player zugeordnet und enthält mehrere Würfe. Zusätzlich ist sie mit einem Video verknüpft.

  - Entity: Shot

    Die Entity Shot beschreibt einen einzelnen Wurf innerhalb einer Trainingseinheit. Gespeichert werden beispielsweise das Ergebnis und der Zeitpunkt. Jeder Shot gehört genau zu einer TrainingSession.

  - Entity: Video

    Die Entity Video verwaltet die zur Trainingseinheit gehörige Videodatei beziehungsweise deren Metadaten, insbesondere den Dateipfad und den Erstellungszeitpunkt.

  - Entity: FlightData

    Die Entity SollFlightData enthält die Analysewerte aus der Videoverarbeitung, beispielsweise Abwurfpunkt, Korbposition, Winkel, Geschwindigkeit und weitere Flugparameter. Diese Daten sind eindeutig einem Wurf zugeordnet und bilden die Grundlage für spätere statistische Auswertungen.

### Implementierung des repository-Packages
Nach der Modellierung der Entities im Package model wurde die Repository-Schicht umgesetzt. Ziel dieser Schicht ist es, alle Datenbankzugriffe zentral zu kapseln, damit Controller und Services nicht direkt mit SQL oder EntityManager arbeiten müssen. Spring Data JPA stellt dafür Repository-Interfaces bereit, die bereits Standardfunktionen für CRUD-Operationen enthalten.

Repositories in dem Projekt: 

  - PlayerRepository

    Für den Datenzugriff auf die Spielerinnen und Spieler wurde das Interface PlayerRepository implementiert. Es erweitert JpaRepository<Player, Long> und erhält dadurch automatisch grundlegende CRUD-Funktionen wie save(), findById(), findAll() und deleteById().

    Zusätzlich wurden zwei projektspezifische Methoden ergänzt: findByEmail(String email) liefert optional einen Player anhand der E-Mail-Adresse zurück, während existsByEmail(String email) prüft, ob bereits ein Datensatz mit dieser E-Mail existiert. Diese Methoden werden von Spring Data JPA automatisch anhand des Methodennamens in passende Datenbankabfragen übersetzt. Die Annotation ```@Repository``` kennzeichnet das Interface als Bestandteil der Persistenzschicht.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="PlayerRepository" .java}
      package at.htlle.backend.repository;

      import at.htlle.backend.model.Player;
      import org.springframework.data.jpa.repository.JpaRepository;
      import org.springframework.stereotype.Repository;

      import java.util.Optional;

      @Repository
      public interface PlayerRepository extends JpaRepository<Player, Long> {
          Optional<Player> findByEmail(String email);
          boolean existsByEmail(String email);
      }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Neben dem PlayerRepository wurden auch TrainingSessionRepository, ShotRepository, SollFlightDataRepository und VideoRepository implementiert. Damit war die Grundlage geschaffen, damit die Service-Schicht später zentral und wiederverwendbar auf Daten zugreifen kann.

### Implementireung des service-Packages
Ein weiterer zentraler Bestandteil der Backend-Struktur ist das Package service, das die Geschäftslogik des Backends kapselt. Während Controller lediglich HTTP-Anfragen entgegennehmen und Responses zurückgeben, übernimmt die Service-Schicht die eigentliche Verarbeitung. Dazu zählen insbesondere die Validierung von Eingaben, das Speichern und Verknüpfen von Entities über Repositories sowie die Berechnung von Statistiken oder das Importieren von Analysedaten.

Im Projekt sind im Service-Package unter anderem folgende Klassen vorhanden:

  - PlayerService

    Die Klasse PlayerService bildet die Service-Schicht für Benutzerfunktionen und kapselt die zugehörige Geschäftslogik. Sie ist mit @Service als Spring-Komponente gekennzeichnet und wird über ```@RequiredArgsConstructor``` automatisch mit dem benötigten PlayerRepository initialisiert.

    Ein zentraler Bestandteil ist die Methode registerPlayer(...). Dabei wird die übergebene E-Mail-Adresse zunächst normalisiert, anschließend auf Leerwert und Format geprüft und danach mit bestehenden Datensätzen abgeglichen. Erst danach wird ein Player-Objekt erstellt und in der Datenbank gespeichert.

    Die Methode loginPlayer(...) implementiert eine einfache Login-Logik, indem ein Player über die E-Mail gesucht und das gespeicherte Passwort mit dem eingegebenen Passwort verglichen wird. Ergänzend stellt getUserById(...) eine Zugriffsfunktion bereit, um Spielerinnen und Spieler anhand der ID abzurufen.[@SpringFrameworkService] [@LombokRequiredArgsConstructor]

Das folgende Listing zeigt die Implementierung des PlayerService. Es verdeutlicht, dass Validierung, Normalisierung und Persistenz nicht im Controller, sondern in der Service-Schicht gebündelt werden.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="PlayerService" .java}
package at.htlle.backend.service;

import at.htlle.backend.model.Player;
import at.htlle.backend.repository.PlayerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class PlayerService {
    private final PlayerRepository playerRepository;

    private static final Pattern EMAIL_PATTERN = Pattern.compile(
            "^[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"
    );

    public Player registerPlayer(String firstName,String lastName, String email, String password) {

        String normalizedEmail = email == null ? "" : email.trim().toLowerCase();

        if (normalizedEmail.isEmpty()) {
            throw new IllegalArgumentException("Email darf nicht leer sein");
        }

        if (!EMAIL_PATTERN.matcher(normalizedEmail).matches()) {
            throw new IllegalArgumentException("Ungültiges Email-Format");
        }

        if (playerRepository.findByEmail(normalizedEmail).isPresent()) {
            throw new IllegalArgumentException("Email bereits registriert");
        }

        Player player = new Player();
        player.setFirstName(firstName);
        player.setLastName(lastName);
        player.setEmail(normalizedEmail);
        player.setPassword(password);

        return playerRepository.save(player);
    }

    public Optional<Player> loginPlayer(String email, String password) {
        Optional<Player> player = playerRepository.findByEmail(email);
        if (player.isPresent() && player.get().getPassword().equals(password)) {
            return player;
        }
        return Optional.empty();
    }

    public Optional<Player> getUserById(Long id) {
        return playerRepository.findById(id);
    }

}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#### Weitere Services
  - TrainingSessionService
   nthält die Logik zur Verwaltung von Trainingseinheiten. Dazu gehören typischerweise das Anlegen neuer Sessions, das Abrufen vorhandener Sessions sowie das Verknüpfen einer Session mit einem bestimmten Player.

  - AnalysisImportService
    Diese Klasse übernimmt den Import der Analysedaten aus der Videoverarbeitung. Sie verarbeitet die eingehenden JSON-Daten, validiert sie und überführt sie in die entsprechenden Entities. Anschließend werden die Daten korrekt mit der passenden Trainingseinheit verknüpft und in der Datenbank gespeichert.

  - StatsService
    Zuständig für die Berechnung und Bereitstellung statistischer Kennzahlen. Dazu zählen beispielsweise Trefferquoten, Durchschnittswerte von Winkel und Geschwindigkeit sowie weitere aggregierte Auswertungen pro Spielerin, Spieler oder Trainingseinheit.

  - DashboardService
    Bündelt Daten für eine kompakte Übersicht im Frontend-Dashboard. Hierfür werden verschiedene Informationen kombiniert, etwa Session-Zusammenfassungen, Trenddaten oder Kennzahlen eines Spielers.

### Implementierung des contoller-Packages
Im Package controller wurden die REST-Endpunkte des Backends umgesetzt. Controller bilden die Schnittstelle zwischen Frontend und Backend. Sie nehmen HTTP-Anfragen entgegen, lesen Parameter oder JSON-Request-Bodies aus, rufen die passende Geschäftslogik in der Service-Schicht auf und geben das Ergebnis als JSON-Response zurück. Dadurch bleibt die Controller-Schicht schlank, während die eigentliche Logik in Services gekapselt ist.

In deinem Projekt gibt es unter anderem:

  - PlayerController

    Der PlayerController stellt die REST-Schnittstelle für Benutzerfunktionen bereit und ist über ```@RestController``` als Controller in Spring Boot registriert. Mit ```@RequestMapping("/api/users")``` wird ein gemeinsamer Basispfad für alle Endpunkte definiert. Über ```@RequiredArgsConstructor``` wird der PlayerService automatisch per Dependency Injection eingebunden. Die Annotation ```@CrossOrigin(origins = "*")``` erlaubt während der Entwicklung Cross-Origin-Anfragen vom Frontend.

    Der Controller implementiert drei zentrale Endpunkte:

    - POST /api/users/register
    Nimmt Registrierungsdaten als JSON entgegen und ruft playerService.registerPlayer(...) auf. Bei Erfolg wird eine strukturierte Antwort zurückgegeben.

    - POST /api/users/login
    Prüft Anmeldedaten. Wenn ein passender Benutzer gefunden wird, wird 200 OK zurückgegeben, andernfalls 401 Unauthorized.

   - GET /api/users/{playerId}
    Liefert einen Benutzer anhand der ID. Wird kein Datensatz gefunden, antwortet der Controller mit 404 Not Found.

Das folgende Listing zeigt die Implementierung des PlayerController. Es verdeutlicht, dass die Controller-Schicht auf die HTTP-Kommunikation fokussiert bleibt, während die eigentliche Verarbeitung im PlayerService erfolgt.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="PlayerController" .java}
package at.htlle.backend.controller;

import at.htlle.backend.dto.player.ApiResponse;
import at.htlle.backend.dto.player.LoginRequest;
import at.htlle.backend.dto.player.RegisterRequest;
import at.htlle.backend.model.Player;
import at.htlle.backend.service.PlayerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PlayerController {
    private final PlayerService playerService;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse> register(@RequestBody RegisterRequest request) {
        try {
            Player player = playerService.registerPlayer(request.getFirstName(),request.getLastName(), request.getEmail(), request.getPassword());
            return ResponseEntity.ok(new ApiResponse(true, "Registrierung erfolgreich", player));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(new ApiResponse(false, e.getMessage(), null));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse> login(@RequestBody LoginRequest request) {
        Optional<Player> player = playerService.loginPlayer(request.getEmail(), request.getPassword());
        if (player.isPresent()) {
            return ResponseEntity.ok(new ApiResponse(true, "Login erfolgreich", player.get()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ApiResponse(false, "Ungültige Anmeldedaten", null));
        }
    }



    @GetMapping("/{playerId}")
    public ResponseEntity<ApiResponse> getPlayer(@PathVariable Long playerId) {
        Optional<Player> player = playerService.getUserById(playerId);
        if (player.isPresent()) {
            return ResponseEntity.ok(new ApiResponse(true, "Benutzer gefunden", player.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#### Weitere Controller

  - TrainingSessionController
   Stellt Endpunkte zur Verwaltung von Trainingseinheiten bereit.

  - AnalysisImportController
    Bildet die Schnittstelle für den Import der Analysedaten aus der Videoverarbeitung.

  - StatsController
    Stellt Endpunkte bereit, über die statistische Kennzahlen abgerufen werden können.

  - DashboardController
    Dient zur Bereitstellung einer kompakten Übersicht für das Frontend-Dashboard.

### Implementireung des dto-Package
Im Package dto wurden Data Transfer Objects umgesetzt. DTOs sind einfache Klassen, die ausschließlich dazu verwendet werden, Daten strukturiert zwischen Client und Server zu übertragen. Sie trennen damit externe API-Datenmodelle von internen Datenbank-Entities. Dadurch werden REST-Schnittstellen klarer und stabiler, unnötige oder sensible Felder nicht versehentlich ausgegeben und Eingaben beziehungsweise Antworten unabhängig vom Datenbankschema anpassbar.

Im Projekt sind die DTOs nach Funktionsbereichen gegliedert, beispielsweise in dto/player, dto/session, dto/analysis, dto/stats und dto/dashboard.

  - RegisterRequest
    Die Klasse RegisterRequest ist ein DTO und dient dazu, Registrierungsdaten vom Frontend an das Backend zu übertragen. Sie enthält die benötigten Felder firstName, lastName, email und password, die beim Aufruf des Registrierungs-Endpunkts als JSON im Request-Body gesendet werden.

    Durch die Trennung von DTO und Entity wird verhindert, dass direkt mit der Datenbankstruktur gearbeitet werden muss. Dadurch bleibt die REST-Schnittstelle klar definiert und kann unabhängig vom internen Datenmodell angepasst werden.[@FowlerDTO] [@ProjectLombokData]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="RegisterRequest" .java}
        package at.htlle.backend.dto.player;

        import lombok.Data;

        @Data
        public class RegisterRequest {
            private String firstName;
            private String lastName;
            private String email;
            private String password;
        }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  - dto/session (CreateSession, SessionResponse)

  - dto/analysis (Import-Payloads, ShotDTO, SollDTO)

  - dto/stats (PlayerStats, SessionStats, Trend-Items)

  - dto/dashboard (Dashboard-Übersicht)

### Implementireung des config Package

Im Package config werden Klassen gesammelt, die technische Einstellungen für das Backend zentral definieren. Das betrifft vor allem Themen wie CORS, Web-Konfiguration und spätere Erweiterungen, etwa im Bereich Security oder Interceptors. Der Vorteil besteht darin, dass diese Einstellungen nicht auf einzelne Controller verteilt werden, sondern zentral an einer Stelle gebündelt sind.[@SpringFrameworkCors] [SpringFrameworkWebMvcConfig]

Im Projekt wurden hierfür unter anderem die Klassen CorsConfig.java und WebConfig.java angelegt.

## Testing
Im Rahmen der Implementierung wurde jede neu erstellte Controller-Klasse unmittelbar nach der Entwicklung mit Postman getestet. Dabei wurden die zugehörigen Endpunkte mit passenden Request-Bodys und Parametern aufgerufen und die Antworten anhand von HTTP-Statuscodes sowie der zurückgegebenen JSON-Strukturen überprüft.

Durch dieses fortlaufende Testen konnte sichergestellt werden, dass die Schnittstellen korrekt reagieren, die Daten wie vorgesehen verarbeitet werden und die Kommunikation zwischen Backend und Frontend zuverlässig funktioniert. Auf diese Weise konnten Fehler in der Request-Verarbeitung, Validierung oder Datenpersistenz frühzeitig erkannt und behoben werden.[@PostmanAPITesting]

![Getestet mit Postman](img/PostmanTesting.png)


## Ausblick
Als nächster Schritt wäre die vollständige Anbindung der Analyse-Komponente an das Backend und anschließend an das Frontend vorgesehen gewesen. Ziel wäre es, die von der Soll- und Ist-Analyse erzeugten Ergebnisse automatisiert an das Backend zu übergeben, dort zu speichern und über die REST-Schnittstelle für das Frontend bereitzustellen. Diese Integration konnte jedoch nicht mehr abgeschlossen werden, da der Analyse-Teil zum Zeitpunkt der Fertigstellung noch nicht vollständig implementiert war. Sobald die Analyse abgeschlossen ist, könnten darauf aufbauend sowohl das Backend (z. B. Importlogik, Validierungen, Auswertungen) als auch das Frontend (z. B. Visualisierung, Benutzerführung, Detailansichten) weiter verbessert und an reale Analyse-Daten angepasst werden.