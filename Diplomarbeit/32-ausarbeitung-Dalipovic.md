# Teilaufgabe Dalipovic Nino
\textauthor{Nino Dalipovic}


## Theorieteil – Frontend


### Technischer Kontext und Zielsetzung des Frontend-Teils

Diese Arbeit befasst sich mit der Konzeption und Umsetzung einer webbasierten Benutzeroberfläche im Kontext einer sportbezogenen Trainingsanwendung. Der Fokus liegt dabei ausschließlich auf der clientseitigen Anwendung, die im Webbrowser ausgeführt wird und als Interaktionsschnittstelle zwischen Benutzer und serverseitiger Systemlogik fungiert.

Moderne Webanwendungen bestehen typischerweise aus mehreren logisch getrennten Komponenten. Während die serverseitige Schicht für Datenverarbeitung, Persistenz und Geschäftslogik zuständig ist, übernimmt das Frontend die Präsentation von Informationen, die Verarbeitung von Benutzereingaben sowie die Kommunikation mit definierten Programmierschnittstellen (APIs). Das Frontend stellt somit die sichtbare und interaktive Ebene eines verteilten Systems dar [@tanenbaum2007].

Im vorliegenden Projekt dient das Frontend als zentrale Interaktionsschicht zwischen Benutzer und Backend-System. Es ermöglicht die strukturierte Darstellung von Trainingsdaten, die Eingabe und Verarbeitung benutzerspezifischer Informationen sowie die visuelle Aufbereitung von Analyseergebnissen. Die Kommunikation mit dem Backend erfolgt über standardisierte HTTP-basierte Schnittstellen, wobei strukturierte Datenformate zum Einsatz kommen [@rfc9110].

Die clientseitige Anwendung verarbeitet empfangene Daten, verwaltet Zustände innerhalb des Browsers und aktualisiert die Benutzeroberfläche dynamisch. Dadurch wird eine interaktive Nutzererfahrung ermöglicht, bei der Inhalte ohne vollständiges Neuladen der Seite angepasst werden können.

Um die Architektur, Funktionsweise und Bewertung dieser Frontend-Implementierung nachvollziehen zu können, ist ein fundiertes Verständnis der zugrunde liegenden Webtechnologien erforderlich. Dazu gehören insbesondere:

- das Client-Server-Modell und das HTTP-Kommunikationsprinzip
- die Strukturierungsmechanismen von HTML
- die Gestaltungsmöglichkeiten durch CSS
- die dynamische Interaktionslogik mittels JavaScript
- architektonische Konzepte moderner Frontend-Anwendungen
- sowie sicherheits- und qualitätsrelevante Anforderungen an Websysteme

Der folgende Theorieteil schafft die technische und architektonische Grundlage, um die spätere praktische Umsetzung des Frontends einordnen und bewerten zu können. Dabei werden keine konkreten Implementierungsdetails vorweggenommen. Vielmehr werden die verwendeten Technologien und Architekturprinzipien allgemein erläutert, um ein systematisches Verständnis moderner Frontend-Entwicklung zu vermitteln.

Durch diese strukturierte theoretische Fundierung wird gewährleistet, dass die praktische Umsetzung nicht isoliert betrachtet wird, sondern im Kontext etablierter Konzepte und Standards der Webarchitektur analysiert werden kann.

\newpage

## Grundlagen von Webanwendungen

### Das Client-Server-Modell und das HTTP-Protokoll

Webanwendungen basieren grundlegend auf dem Client-Server-Architekturmodell. Dieses beschreibt ein verteiltes System, bei dem Aufgaben zwischen mindestens zwei logisch getrennten Komponenten aufgeteilt sind: einem Client und einem Server [@tanenbaum2007].

Der Client ist für die Interaktion mit dem Benutzer verantwortlich. Im Webkontext übernimmt in der Regel der Webbrowser diese Rolle. Der Server stellt Dienste bereit, verarbeitet Anfragen, führt Geschäftslogik aus und speichert Daten dauerhaft. Zwischen beiden Komponenten besteht eine Netzwerkverbindung, über die strukturierte Nachrichten ausgetauscht werden.

Die Kommunikation im World Wide Web erfolgt standardisiert über das Hypertext Transfer Protocol (HTTP). HTTP ist ein zustandsloses, textbasiertes Protokoll, das nach dem Request-Response-Prinzip funktioniert [@rfc9110]. Der Client sendet eine Anfrage (Request), die folgende Bestandteile enthalten kann:

- eine HTTP-Methode (z. B. GET, POST, PUT, DELETE)
- eine Zieladresse (URI)
- Header-Informationen
- optional einen Nachrichtenkörper (Body)

Der Server verarbeitet diese Anfrage und sendet eine strukturierte Antwort (Response), die einen Statuscode, Header-Felder sowie gegebenenfalls einen Nachrichtenkörper enthält.

Ein zentrales Merkmal von HTTP ist seine Zustandslosigkeit (Statelessness). Jede Anfrage wird unabhängig von vorherigen Interaktionen behandelt. Der Server speichert keinen impliziten Sitzungszustand zwischen einzelnen Requests [@rfc7231]. Diese Eigenschaft erhöht die Skalierbarkeit von Websystemen, da Anfragen parallel und unabhängig verarbeitet werden können.

Gleichzeitig entsteht dadurch die Notwendigkeit zusätzlicher Mechanismen zur Verwaltung von Benutzersitzungen, etwa durch Cookies oder tokenbasierte Authentifizierungsverfahren.

Die klare Trennung von Client- und Serververantwortlichkeiten bildet die architektonische Grundlage moderner Webanwendungen und ermöglicht eine modulare Weiterentwicklung beider Systemseiten.

![Client-Server-Kommunikation als Mehrschichtprinzip](img/threeTierArchitecture.jpg){ width=75% }

Abbildung: Vereinfachte Darstellung einer Webanwendung mit Präsentationsschicht (Client), Logikschicht (Server) und Datenhaltung (Datenbank).


### Strukturierung von Inhalten mit HTML

Die HyperText Markup Language (HTML) ist die standardisierte Auszeichnungssprache zur Strukturierung von Webdokumenten [@fielding2000]. Sie definiert die logische Gliederung von Inhalten und beschreibt, wie Informationen semantisch ausgezeichnet werden.

Ein HTML-Dokument besteht aus einer hierarchischen Baumstruktur von Elementen. Diese Struktur wird im Browser als sogenanntes Document Object Model (DOM) repräsentiert [@fowler2002]. Das DOM bildet das Dokument als Baum aus Knoten ab, wobei jedes HTML-Element einem Objekt im Speicher entspricht.

![DOM-Struktur eines HTML-Dokuments](img/html_dom.jpg){ width=70% }

Abbildung: Baumstruktur des Document Object Models (DOM) als interne Repräsentation eines HTML-Dokuments im Browser.

Die semantische Strukturierung durch HTML-Elemente wie:

- Überschriften
- Absätze
- Listen
- Formulare
- Tabellen

ermöglicht nicht nur eine visuelle Darstellung, sondern auch eine maschinelle Interpretierbarkeit. Dies ist insbesondere für Barrierefreiheit, Suchmaschinenoptimierung und Interoperabilität zwischen Systemen von Bedeutung.

HTML selbst enthält keine Informationen über Layout oder visuelles Design. Es beschreibt ausschließlich die Struktur und Bedeutung der Inhalte. Diese bewusste Trennung von Struktur und Darstellung ist ein zentrales Prinzip moderner Webarchitektur.


### Gestaltung und Layout mit CSS

Cascading Style Sheets (CSS) dienen der visuellen Gestaltung von HTML-Dokumenten. Während HTML die Struktur definiert, legt CSS fest, wie diese Struktur dargestellt wird.

Grundlage der CSS-Darstellung ist das sogenannte Box-Modell [@w3c-box-2018]. Jedes HTML-Element wird als rechteckige Box interpretiert, bestehend aus:

![CSS Box Model](img/cssBoxModel.png){ width=60% }

Abbildung: Darstellung des CSS Box Models mit Content, Padding, Border und Margin als Grundlage für Layout und Abstände.

- Content (Inhaltsbereich)
- Padding (Innenabstand)
- Border (Rahmen)
- Margin (Außenabstand)

Dieses Modell bildet die Grundlage für Layout-Berechnungen und Abstandsdefinitionen.

Moderne Layout-Techniken wie Flexbox und CSS Grid erweitern das klassische Box-Modell erheblich [@w3c-flexbox-2017]. Flexbox ermöglicht eine flexible, eindimensionale Anordnung von Elementen entlang einer Hauptachse. CSS Grid hingegen erlaubt eine zweidimensionale Rasterstruktur, die komplexe Layouts mit klar definierten Zeilen- und Spaltenstrukturen ermöglicht.

Diese Mechanismen sind essenziell für responsive Webdesign-Konzepte, bei denen sich die Benutzeroberfläche an unterschiedliche Bildschirmgrößen und Gerätetypen anpasst.

Die konsequente Trennung von Struktur (HTML) und Gestaltung (CSS) verbessert Wartbarkeit und Erweiterbarkeit, da Layout-Anpassungen unabhängig von der Dokumentenstruktur vorgenommen werden können.


### Dynamische Interaktion mit JavaScript

JavaScript ergänzt HTML und CSS um Interaktivität und dynamisches Verhalten. Es handelt sich um eine skriptbasierte Programmiersprache, die direkt im Browser ausgeführt wird.

JavaScript besitzt Zugriff auf das DOM und kann somit:

- Elemente erzeugen
- Inhalte verändern
- Attribute anpassen
- Ereignisse verarbeiten
- Elemente entfernen

Das Ausführungsmodell von JavaScript basiert auf einem ereignisgesteuerten Paradigma mit einer Event-Loop-Mechanik [@mdn-execution-model-2023]. Ereignisse wie Mausklicks, Tastatureingaben oder Netzwerkantworten werden in einer Warteschlange verarbeitet. Dadurch können asynchrone Operationen ausgeführt werden, ohne die Benutzeroberfläche zu blockieren.

![JavaScript Event Loop](img/Event-Loop-in-JavaScript.jpg){ width=80% }

Abbildung: JavaScript-Ausführungsmodell mit Call Stack, Web APIs, Callback Queue und Event Loop zur Verarbeitung asynchroner Aufgaben.

Ein zentrales Konzept ist dabei die asynchrone Kommunikation mit Servern. Über HTTP-Anfragen können Daten abgerufen oder gesendet werden, ohne dass die gesamte Seite neu geladen werden muss. Diese Technik bildet die Grundlage moderner interaktiver Webanwendungen.

Die Kombination aus HTML (Struktur), CSS (Gestaltung) und JavaScript (Logik und Interaktion) bildet somit das fundamentale technologische Dreieck der Frontend-Entwicklung.

\newpage

## Moderne Frontend-Entwicklung

### Von statischen Webseiten zu dynamischen Anwendungen

Die Entwicklung von Webanwendungen hat sich im Laufe der Zeit grundlegend verändert. Während frühe Webseiten überwiegend aus statischen HTML-Dokumenten bestanden, die bei jeder Interaktion vollständig neu geladen wurden, verfolgen moderne Webanwendungen zunehmend dynamische, clientseitige Architekturen.

Im klassischen Multi-Page-Application-Modell (MPA) generiert der Server für jede Benutzerinteraktion ein vollständiges HTML-Dokument. Jede Navigation, Formularübermittlung oder Statusänderung führt zu einer neuen HTTP-Anfrage und einem vollständigen Rendering der Zielseite im Browser. Dieses Modell ist konzeptionell einfach und klar strukturiert, verursacht jedoch höhere Netzwerklast und führt zu sichtbaren Unterbrechungen im Nutzungserlebnis.

Mit steigenden Anforderungen an Interaktivität, Benutzerfreundlichkeit und Reaktionsgeschwindigkeit verlagerte sich ein zunehmender Anteil der Logik vom Server in den Client. Anstatt komplette HTML-Seiten auszutauschen, werden heute häufig nur noch strukturierte Daten übertragen, während die Darstellung im Browser dynamisch aktualisiert wird.

Diese Entwicklung führte zu einer stärkeren Rolle des Frontends innerhalb der Gesamtarchitektur. Der Client fungiert nicht mehr ausschließlich als Anzeigemedium, sondern als eigenständige Laufzeitumgebung mit komplexer Zustandsverwaltung und Interaktionslogik.


### Single Page Applications (SPA)

Eine Single Page Application (SPA) ist eine Webanwendung, die innerhalb eines einzigen HTML-Dokuments betrieben wird. Im Gegensatz zu klassischen Multi-Page-Ansätzen wird bei Benutzerinteraktionen nicht die gesamte Seite neu geladen. Stattdessen wird der sichtbare Inhalt dynamisch im Browser aktualisiert.

SPAs verwenden asynchrone HTTP-Anfragen, um Daten vom Server abzurufen. Diese Daten werden anschließend in bestehende DOM-Strukturen eingebettet oder führen zu gezielten Benutzeroberflächen-Updates. Die wahrgenommene Performance verbessert sich, da vollständige Seitenneuladungen entfallen.

![Grundprinzip einer Single Page Application](img/spaArchitecture.jpeg){ width=80% }

Abbildung: SPA-Prinzip: initiales Laden der Anwendung und dynamische Aktualisierung von Inhalten über asynchrone Backend-Kommunikation.

Typische Merkmale einer SPA sind:

- ein initial geladenes HTML-Grundgerüst
- clientseitige Zustandsverwaltung
- dynamische DOM-Manipulation
- asynchrone Datenkommunikation mit dem Backend

Architektonisch verschiebt sich ein Teil der Anwendungslogik in den Client. Der Server stellt primär Daten und Schnittstellen bereit, während Präsentations- und Interaktionslogik im Browser ausgeführt werden.

Gleichzeitig entstehen neue Herausforderungen. Dazu gehören:

- erhöhte Komplexität der Zustandsverwaltung
- strukturierte Organisation von UI-Komponenten
- effizientes Rendering bei häufigen Zustandsänderungen
- erhöhte Verantwortung für Sicherheitsmechanismen auf Client-Seite

Trotz dieser Herausforderungen haben sich SPAs als dominierendes Architekturmodell für interaktive Webanwendungen etabliert.


### Utility-First CSS und moderne Styling-Paradigmen

Mit wachsender Komplexität von Benutzeroberflächen entwickelten sich unterschiedliche Strategien zur Organisation von CSS. Klassische Ansätze verwenden häufig semantische Klassennamen, die größere Stildefinitionen kapseln. Mit zunehmender Projektgröße können dabei umfangreiche und schwer wartbare Stylesheets entstehen.

Utility-First CSS verfolgt einen anderen Ansatz. Statt semantische Klassen mit umfangreichen Stildefinitionen zu erstellen, werden atomare Klassen verwendet, die jeweils eine einzelne CSS-Eigenschaft repräsentieren. Layout-, Farb- oder Abstandsentscheidungen werden durch die Kombination dieser kleinen Klassen direkt im Markup umgesetzt.

Vorteile dieses Ansatzes sind:

- Reduktion redundanter CSS-Regeln
- höhere Konsistenz im Design
- geringere Notwendigkeit individueller Stildefinitionen
- vereinfachte Wartbarkeit durch standardisierte Stilbausteine

Demgegenüber kann die starke Nutzung von Utility-Klassen die Lesbarkeit des Markups beeinträchtigen, da viele Klassenkombinationen direkt im HTML sichtbar sind.

Die Wahl eines Styling-Paradigmas beeinflusst somit unmittelbar Wartbarkeit, Skalierbarkeit und Teamarbeit innerhalb eines Frontend-Projekts.


### CDN-basierte Einbindung versus Build-Prozesse

Frontend-Abhängigkeiten können entweder direkt über Content Delivery Networks (CDNs) eingebunden oder über lokale Build-Prozesse verwaltet werden.

Bei einer CDN-basierten Integration werden Bibliotheken und Frameworks über externe Server geladen. Dies reduziert die lokale Projektkomplexität und ermöglicht einen schnellen Einstieg ohne umfangreiche Toolchain.

Vorteile einer CDN-basierten Integration:

- kein komplexer Build-Schritt erforderlich
- einfache Projektstruktur
- schnelle Entwicklungsumgebung
- potenziell optimiertes Caching durch globale Netzwerke

Demgegenüber bieten Build-Prozesse zusätzliche Möglichkeiten zur Optimierung:

- Code-Minimierung
- Modul-Bundling
- Dead-Code-Elimination
- strukturierte Abhängigkeitsverwaltung
- Produktionsoptimierung von Assets

Während CDN-basierte Ansätze insbesondere für kleinere Projekte oder Prototypen geeignet sind, gewinnen Build-Prozesse mit steigender Projektgröße und wachsender Komplexität an Bedeutung.


### Browser-APIs und clientseitige Erweiterungsmechanismen

Moderne Webbrowser stellen eine Vielzahl zusätzlicher Programmierschnittstellen (APIs) bereit, die über die klassische DOM-Manipulation hinausgehen. Diese APIs erweitern die Funktionalität des Clients erheblich.

Zu den wichtigsten Kategorien zählen:

- Web Storage APIs zur persistenten Datenspeicherung im Browser
- File- und Media-APIs zur Verarbeitung lokaler Dateien
- Drag-and-Drop-Schnittstellen
- Multimedia- und Audio-APIs
- Sprach- und Interaktionsschnittstellen

Diese Mechanismen ermöglichen die Umsetzung komplexer Anwendungen direkt im Browser, ohne dass zusätzliche Plugins oder native Software erforderlich sind.

Mit der steigenden Funktionalität des Clients wächst jedoch auch die Verantwortung hinsichtlich Sicherheitskonzepten, Datenschutz und kontrollierter Zustandsverwaltung. Die Architektur moderner Frontend-Anwendungen muss diese Aspekte systematisch berücksichtigen.

\newpage

## Client-Server-Architektur und REST-basierte Kommunikation

### Verteilte Systeme und Mehrschichtarchitektur

Webanwendungen sind als verteilte Systeme konzipiert. Ein verteiltes System besteht aus mehreren unabhängigen Komponenten, die über ein Netzwerk miteinander kommunizieren und gemeinsam eine funktionale Einheit bilden [@tanenbaum2007]. Diese Komponenten sind logisch voneinander getrennt und übernehmen jeweils klar definierte Aufgaben.

In webbasierten Anwendungen wird häufig eine Mehrschichtarchitektur eingesetzt. Diese gliedert das System typischerweise in:

- Präsentationsschicht (Client)
- Anwendungsschicht (Business Logic)
- Persistenzschicht (Datenhaltung)

Die Präsentationsschicht ist für die Benutzerinteraktion verantwortlich. Sie stellt Informationen dar, verarbeitet Eingaben und kommuniziert mit der Anwendungsschicht. Die Anwendungsschicht enthält Geschäftslogik, Validierungsmechanismen und Koordinationsprozesse für Datenzugriffe. Die Persistenzschicht speichert strukturierte Daten dauerhaft in Datenbanksystemen oder vergleichbaren Speichermedien.

Dieses Architekturmodell folgt dem Prinzip der Separation of Concerns. Jede Schicht übernimmt eine klar definierte Verantwortung. Dadurch erhöhen sich Wartbarkeit, Erweiterbarkeit und Testbarkeit des Systems.

Die Trennung der Verantwortlichkeiten ist insbesondere bei größeren Anwendungen entscheidend, da sie parallele Weiterentwicklung sowie unabhängige Skalierung einzelner Systemkomponenten ermöglicht.


### REST als Architekturstil

Representational State Transfer (REST) ist ein Architekturstil für verteilte hypermediale Systeme, der von Roy T. Fielding definiert wurde [@fielding2000]. REST beschreibt keine konkrete Implementierung, sondern eine Menge architektonischer Constraints, die ein System erfüllen muss.

Zu den zentralen REST-Constraints zählen:

- Client-Server-Trennung
- Zustandslosigkeit (Statelessness)
- Cachebarkeit
- Einheitliche Schnittstelle (Uniform Interface)
- Schichtenarchitektur (Layered System)

Die Einhaltung dieser Constraints führt zu Systemen mit hoher Skalierbarkeit, Modifizierbarkeit und Transparenz [@fielding2000].

Besonders relevant ist die Zustandslosigkeit. Jede Anfrage enthält alle notwendigen Informationen zur Verarbeitung. Der Server speichert keinen impliziten Sitzungszustand zwischen einzelnen Requests. Dadurch wird horizontale Skalierung erleichtert, da Anfragen unabhängig voneinander verarbeitet werden können.

Die einheitliche Schnittstelle sorgt dafür, dass Interaktionen standardisiert über HTTP-Methoden und klar definierte Ressourcen erfolgen. Dies erhöht die Interoperabilität zwischen Systemen.

![REST-Kommunikation über HTTP](img/restApiDiagram.jpeg){ width=75% }

Abbildung: REST-Kommunikation zwischen Client und Server über HTTP-Methoden und strukturierte Datenaustauschformate (z. B. JSON).

### Ressourcenorientierung und HTTP-Semantik

Im REST-Architekturstil werden Funktionalitäten als Ressourcen modelliert. Jede Ressource besitzt eine eindeutige Adresse (URI) und kann über standardisierte HTTP-Methoden manipuliert werden.

Die HTTP-Spezifikation definiert die Semantik der einzelnen Methoden [@rfc9110]:

- **GET** dient dem Abrufen von Ressourcen und gilt als sicher sowie idempotent.
- **POST** wird zur Erstellung neuer Ressourcen oder zur Ausführung nicht-idempotenter Operationen verwendet.
- **PUT** ersetzt eine bestehende Ressource vollständig und ist idempotent.
- **DELETE** entfernt eine Ressource und ist ebenfalls idempotent.

Idempotenz bedeutet, dass die wiederholte Ausführung derselben Anfrage zum gleichen Ergebnis führt wie eine einmalige Ausführung. Diese Eigenschaft ist für Fehlertoleranz und Wiederholungsmechanismen von großer Bedeutung.

HTTP unterscheidet Statuscodes in verschiedene Klassen:

- 2xx – erfolgreiche Verarbeitung
- 3xx – Weiterleitungen
- 4xx – Client-Fehler
- 5xx – Server-Fehler

Diese standardisierte Statuskommunikation ermöglicht eine strukturierte Fehlerbehandlung auf Client-Seite.

Die korrekte Nutzung von HTTP-Semantik ist wesentlich für Vorhersagbarkeit, Caching-Strategien und Interoperabilität verteilter Systeme.


### Data Transfer Objects und API-Verträge

In mehrschichtigen Architekturen werden interne Domänenmodelle häufig nicht direkt an externe Clients übertragen. Stattdessen werden spezielle Übertragungsstrukturen verwendet, sogenannte Data Transfer Objects (DTOs) [@fowler2002].

DTOs erfüllen mehrere Funktionen:

- Bündelung relevanter Daten für Netzwerkübertragungen
- Reduktion unnötiger Attribute
- Schutz interner Geschäftslogik
- klare Definition externer Schnittstellen

Ein API-Vertrag beschreibt die erwarteten Eingabe- und Ausgabeformate einer Schnittstelle. Er definiert:

- Datenstruktur
- Datentypen
- Pflicht- und optionale Felder
- mögliche Antwortformate
- Fehlerstrukturen

Ein konsistenter API-Vertrag ist entscheidend für Wartbarkeit und Stabilität. Änderungen an Schnittstellen ohne Versionierung oder Dokumentation können zu Integrationsproblemen führen.

Die Gestaltung von API-Verträgen ist somit eine zentrale architektonische Entscheidung und beeinflusst die langfristige Erweiterbarkeit eines Systems.


### Fehlerbehandlung und Robustheit in Web-APIs

Robustheit ist eine zentrale Eigenschaft verteilter Systeme. Fehler können auf unterschiedlichen Ebenen auftreten, beispielsweise durch:

- ungültige Eingaben
- fehlende Ressourcen
- Netzwerkprobleme
- serverseitige Ausfälle

REST-basierte Systeme kommunizieren Fehler primär über HTTP-Statuscodes. Ergänzend werden häufig strukturierte Fehlerobjekte im Nachrichtenkörper übertragen, um maschinenlesbare Fehlermeldungen bereitzustellen.

Eine konsistente Fehlerstruktur ermöglicht:

- automatisierte Reaktionen im Client
- präzise Benutzerfeedback-Mechanismen
- vereinfachtes Debugging
- höhere Integrationsstabilität

Uneinheitliche oder unstrukturierte Fehlermeldungen erhöhen hingegen die Komplexität auf Client-Seite und erschweren Wartung sowie Weiterentwicklung.

Fehlermanagement ist daher kein Nebenaspekt, sondern ein integraler Bestandteil der API-Architektur.

\newpage

## Architekturprinzipien im Frontend

### Monolithische Frontend-Architekturen

In kleineren oder frühen Webanwendungen wird die gesamte clientseitige Logik häufig innerhalb einer zentralen Struktur organisiert. Eine solche Architektur wird als monolithisches Frontend bezeichnet. Charakteristisch ist, dass Präsentationslogik, Zustandsverwaltung, Ereignisbehandlung und Netzwerkkommunikation innerhalb weniger oder sogar einer einzigen zentralen Codebasis gebündelt sind.

Der Vorteil eines monolithischen Ansatzes liegt in seiner Einfachheit. Die Einstiegshürde ist gering, da keine komplexe Projektstruktur oder zusätzliche Abstraktionsebenen erforderlich sind. Für kleinere Anwendungen oder Prototypen kann diese Struktur effizient und ausreichend sein.

Mit steigender Anwendungsgröße entstehen jedoch strukturelle Herausforderungen. Dazu gehören:

- zunehmende Kopplung zwischen Logik und Darstellung
- erschwerte Wartbarkeit bei Funktionserweiterungen
- steigende Komplexität bei paralleler Weiterentwicklung
- geringere Testbarkeit einzelner Funktionseinheiten

Monolithische Frontend-Architekturen können somit kurzfristig effizient sein, stoßen jedoch bei wachsender Funktionsvielfalt und steigender Projektkomplexität an ihre Grenzen.


### Komponentenbasierte Architekturen

Als Reaktion auf die Skalierungsprobleme monolithischer Ansätze etablierten sich komponentenbasierte Architekturen. In diesem Modell wird die Benutzeroberfläche in eigenständige, wiederverwendbare Bausteine unterteilt. Jede Komponente kapselt Struktur, Darstellung und häufig auch einen Teil der Logik.

![Komponentenbasierte Struktur einer Anwendung](img/componentArchitecture.png){ width=80% }

Abbildung: Komponentenbasierte Architektur: UI wird in modulare Bausteine zerlegt, die unabhängig entwickelt und wiederverwendet werden können.

Die Vorteile dieses Ansatzes sind:

- klare Verantwortlichkeitsverteilung
- Wiederverwendbarkeit von UI-Elementen
- verbesserte Wartbarkeit
- bessere Skalierbarkeit bei wachsender Funktionalität

Komponenten können isoliert entwickelt, getestet und bei Bedarf ersetzt werden. Dadurch reduziert sich die Gefahr unbeabsichtigter Seiteneffekte bei Änderungen.

Allerdings erfordert eine komponentenbasierte Architektur eine klare Strategie zur Verwaltung von Zuständen und zur Kommunikation zwischen Komponenten. Ohne definierte Konventionen kann auch hier Komplexität entstehen.


### Separation of Concerns im Frontend

Das Prinzip der Separation of Concerns beschreibt die klare Trennung unterschiedlicher Verantwortlichkeiten innerhalb eines Systems. Im Frontend-Kontext betrifft dies insbesondere:

- Struktur (HTML)
- Gestaltung (CSS)
- Interaktionslogik (JavaScript)
- Netzwerkkommunikation
- Zustandsverwaltung

Eine saubere Trennung dieser Bereiche reduziert implizite Abhängigkeiten und erleichtert langfristige Wartbarkeit. Werden beispielsweise Netzwerklogik und UI-Darstellung stark vermischt, erhöht sich der Änderungsaufwand bei Anpassungen erheblich.

Architektonisch betrachtet ist die konsequente Umsetzung dieses Prinzips entscheidend für Skalierbarkeit und Teamarbeit. Je klarer Verantwortlichkeiten abgegrenzt sind, desto leichter lassen sich einzelne Teile unabhängig weiterentwickeln.


### Zustandsverwaltung in Webanwendungen

Der Zustand (State) einer Anwendung beschreibt alle Informationen, die den aktuellen Kontext der Benutzerinteraktion definieren. Dazu gehören unter anderem:

- Benutzereingaben
- geladene Daten
- Sichtbarkeitszustände von UI-Elementen
- temporäre Zwischenergebnisse

In einfachen Anwendungen wird der Zustand häufig direkt im DOM oder in globalen Variablen gespeichert. Mit wachsender Komplexität können jedoch Inkonsistenzen entstehen, wenn mehrere Teile der Anwendung denselben Zustand verändern.

Architektonische Konzepte zur Zustandsverwaltung umfassen:

- lokale Zustände innerhalb einzelner Komponenten
- zentrale Zustandscontainer
- unidirektionalen Datenfluss

Ein unidirektionales Datenflussmodell erhöht Transparenz und Nachvollziehbarkeit von Zustandsänderungen. Änderungen erfolgen kontrolliert über definierte Mechanismen, wodurch unbeabsichtigte Seiteneffekte reduziert werden.

Die Wahl einer Zustandsstrategie beeinflusst maßgeblich Wartbarkeit, Testbarkeit und Erweiterbarkeit einer Frontend-Anwendung.


### Rendering-Strategien: Imperativ versus Deklarativ

Rendering beschreibt den Prozess, bei dem Daten in visuelle Elemente übersetzt werden. In klassischen, imperativen Ansätzen wird das DOM direkt manipuliert. Entwickler definieren explizit, welche Elemente erstellt, verändert oder entfernt werden.

Deklarative oder reaktive Ansätze hingegen beschreiben, wie die Benutzeroberfläche in Abhängigkeit vom aktuellen Zustand aussehen soll. Das Rendering-System berechnet selbstständig die notwendigen Änderungen und aktualisiert das DOM entsprechend.

Imperative Modelle bieten direkte Kontrolle, erfordern jedoch sorgfältige Verwaltung von Zustandsänderungen. Deklarative Modelle abstrahieren diese Komplexität, bringen jedoch zusätzliche Architektur- und Frameworkabhängigkeiten mit sich.

Die Wahl einer Rendering-Strategie ist somit eine grundlegende Architekturentscheidung, die Auswirkungen auf Performance, Wartbarkeit und Entwicklungsaufwand hat.

\newpage

## Nichtfunktionale Anforderungen und Sicherheitsaspekte

Neben funktionalen Anforderungen – also den konkret umgesetzten Fähigkeiten einer Anwendung – spielen nichtfunktionale Anforderungen eine zentrale Rolle in der Architektur moderner Softwaresysteme. Nichtfunktionale Anforderungen beschreiben Qualitätsmerkmale, die das Verhalten und die Eigenschaften eines Systems betreffen [@bass2012].

Im Kontext von Webanwendungen sind insbesondere Wartbarkeit, Erweiterbarkeit, Skalierbarkeit, Performance und Sicherheit von Bedeutung.


### Wartbarkeit

Wartbarkeit beschreibt die Fähigkeit eines Systems, effizient angepasst, erweitert oder korrigiert werden zu können. Eine hohe Wartbarkeit reduziert langfristige Entwicklungskosten und erleichtert die Weiterentwicklung über den ursprünglichen Projektumfang hinaus.

Im Frontend-Kontext hängt Wartbarkeit maßgeblich von folgenden Faktoren ab:

- klare Strukturierung der Codebasis
- konsistente Trennung von Verantwortlichkeiten
- verständliche Zustandsverwaltung
- dokumentierte Schnittstellen
- modularer Aufbau

Eine stark gekoppelte Architektur erschwert Änderungen erheblich. Werden beispielsweise Präsentationslogik und Netzwerkkommunikation eng miteinander vermischt, führt jede Anpassung potenziell zu unerwarteten Nebeneffekten.

Architektonische Prinzipien wie Modularisierung und Separation of Concerns erhöhen die Wartbarkeit signifikant. Durch klar definierte Verantwortlichkeiten können einzelne Komponenten isoliert analysiert und angepasst werden.


### Erweiterbarkeit

Erweiterbarkeit beschreibt die Fähigkeit eines Systems, neue Funktionen zu integrieren, ohne bestehende Komponenten grundlegend verändern zu müssen.

Webanwendungen unterliegen häufig evolutiven Anforderungen. Neue Features, zusätzliche Datenmodelle oder veränderte Benutzerinteraktionen sind typische Weiterentwicklungen.

Eine erweiterbare Architektur zeichnet sich aus durch:

- lose Kopplung zwischen Modulen
- klar definierte Schnittstellen
- konsistente API-Verträge
- strukturierte Zustandsverwaltung

Fehlt diese strukturelle Vorbereitung, steigt mit jeder Erweiterung die Komplexität des Systems. Änderungen werden zunehmend riskanter und fehleranfälliger.

Erweiterbarkeit ist daher nicht nur eine Implementierungsfrage, sondern eine architektonische Grundentscheidung.


### Skalierbarkeit

Skalierbarkeit kann sowohl technisch als auch organisatorisch verstanden werden.

Technische Skalierbarkeit beschreibt die Fähigkeit eines Systems, mit steigender Benutzerzahl oder wachsendem Datenvolumen umzugehen. Im Frontend betrifft dies unter anderem:

- effiziente Rendering-Strategien
- reduzierte DOM-Manipulation
- optimierte Netzwerkanfragen
- Caching-Mechanismen

  ![Beispiel einer skalierbaren Webarchitektur](img/Web_Application_Architecture_Diagram__diagram_.png){ width=95% }

Abbildung: Beispielhafte skalierbare Webarchitektur mit Load Balancer, Services, Caching und Datenhaltung zur Verarbeitung hoher Last.

Organisatorische Skalierbarkeit hingegen beschreibt die Fähigkeit eines Projekts, parallele Entwicklung durch mehrere Entwickler zu ermöglichen. Hier spielen klare Architekturprinzipien und modulare Strukturen eine zentrale Rolle.

Ein schlecht strukturiertes Frontend kann bei wachsender Teamgröße schnell zu Integrationsproblemen führen. Eine klare Komponentenstruktur erleichtert hingegen parallele Entwicklung.


### Performance

Performance beschreibt die Effizienz, mit der eine Anwendung auf Benutzerinteraktionen reagiert. Wahrgenommene Performance beeinflusst unmittelbar die Benutzerzufriedenheit.

Im Frontend-Kontext umfasst Performance insbesondere:

- Initiale Ladezeit
- Rendering-Geschwindigkeit
- Reaktionszeit auf Interaktionen
- Effizienz von Netzwerkkommunikation
- Speicherverbrauch im Browser

Strategien zur Performance-Optimierung umfassen:

- Minimierung unnötiger DOM-Manipulationen
- effiziente Nutzung asynchroner HTTP-Anfragen
- Caching statischer Ressourcen
- Reduktion externer Abhängigkeiten
- strukturierte Zustandsverwaltung zur Vermeidung redundanter Updates

Die Wahl der Architektur beeinflusst Performance erheblich. Komplexe Rendering-Mechanismen oder ineffiziente Zustandsänderungen können zu spürbaren Verzögerungen führen.


### Sicherheit in Webanwendungen

Sicherheit ist eine zentrale nichtfunktionale Anforderung moderner Websysteme. Webanwendungen sind öffentlich zugänglich und potenziellen Angriffen ausgesetzt.

#### Passwortspeicherung und Hashing

Passwörter dürfen niemals im Klartext gespeichert werden. Stattdessen werden kryptographische Hashfunktionen eingesetzt, um das Passwort in eine nicht rückrechenbare Form zu überführen.

Empfohlene Verfahren umfassen adaptive, speicherintensive Algorithmen wie bcrypt, scrypt oder Argon2 [@owasp-password-storage]. Diese Algorithmen erhöhen den Rechenaufwand für Angreifer und erschweren Brute-Force-Angriffe erheblich.

Zusätzlich wird empfohlen, für jedes Passwort einen individuellen Salt-Wert zu verwenden. Dadurch werden sogenannte Rainbow-Table-Angriffe verhindert.

Die sichere Passwortverarbeitung ist ein fundamentaler Bestandteil jeder Webanwendung mit Benutzerverwaltung.


#### Token-basierte Authentifizierung

In zustandslosen Architekturen wird Authentifizierung häufig über Token realisiert. JSON Web Tokens (JWT) sind ein verbreiteter Standard für tokenbasierte Authentifizierungsmechanismen [@rfc7519].

Ein JWT enthält strukturierte Claims über die Identität eines Benutzers und wird kryptographisch signiert. Der Client sendet dieses Token bei jeder Anfrage mit, wodurch der Server die Identität überprüfen kann, ohne einen Sitzungszustand speichern zu müssen.

![JWT-Authentifizierungsablauf](img/JwtAuthenticationFlow.png){ width=85% }

Abbildung: Token-basierte Authentifizierung mit JWT: Token-Ausstellung und Übermittlung bei weiteren Requests zur Identitätsprüfung.

Vorteile tokenbasierter Authentifizierung:

- Unterstützung zustandsloser Architekturen
- horizontale Skalierbarkeit
- reduzierte serverseitige Sitzungsverwaltung

Gleichzeitig müssen Ablaufzeiten, Signaturvalidierung und sichere Speicherung im Client sorgfältig umgesetzt werden.


#### Same-Origin-Policy und CORS

Die Same-Origin-Policy ist ein grundlegender Sicherheitsmechanismus von Webbrowsern. Sie verhindert, dass Skripte einer Herkunft (Origin) unkontrolliert auf Ressourcen einer anderen Herkunft zugreifen [@whatwg-fetch].

Cross-Origin Resource Sharing (CORS) erweitert dieses Modell kontrolliert. Server können explizit festlegen, welche Ursprünge auf bestimmte Ressourcen zugreifen dürfen.

Fehlkonfigurationen von CORS können Sicherheitsrisiken darstellen. Zu weit gefasste Freigaben ermöglichen potenziell unautorisierten Zugriff auf sensible Daten.


#### Clientseitige Speicherung sensibler Daten

Moderne Browser bieten mit localStorage und sessionStorage persistente Speichermechanismen. Diese APIs sind komfortabel, bergen jedoch Sicherheitsrisiken.

Insbesondere bei Cross-Site-Scripting-Angriffen (XSS) können gespeicherte Tokens oder sensible Informationen ausgelesen werden [@owasp-password-storage].

Daher sollten sicherheitsrelevante Daten nur mit Vorsicht im Browser gespeichert werden. Alternative Konzepte wie HttpOnly-Cookies reduzieren das Risiko clientseitiger Token-Exfiltration.


### Datenschutz und Privacy by Design

Neben technischer Sicherheit gewinnt Datenschutz zunehmend an Bedeutung. Konzepte wie „Privacy by Design“ fordern, Datenschutz bereits auf Architekturebene zu berücksichtigen [@enisa-privacy].

Technische Prinzipien umfassen:

- Datenminimierung
- Zugriffsbeschränkungen
- transparente Datenflüsse
- definierte Speicher- und Löschstrategien

Webanwendungen, die personenbezogene Daten verarbeiten, müssen diese Prinzipien frühzeitig in Architekturentscheidungen integrieren, um rechtliche und ethische Anforderungen zu erfüllen.

\newpage








# Teilaufgabe Dalipovic Nino
\textauthor{Nino Dalipovic}

## Praxisteil – Frontend

### Einleitung zum Praxisteil

Im folgenden Kapitel wird die praktische Umsetzung des Frontends der entwickelten Anwendung beschrieben. Während der Theorieteil die grundlegenden Technologien und Architekturprinzipien moderner Webanwendungen erläutert, liegt der Fokus dieses Abschnitts auf der konkreten Implementierung der Benutzeroberfläche sowie der Interaktionslogik im Browser.

Das Frontend bildet die zentrale Interaktionsschnittstelle zwischen Benutzer und System. Es ermöglicht die Anmeldung eines Benutzers, die Durchführung einer Trainingsanalyse sowie die visuelle Darstellung der Analyseergebnisse. Dabei werden moderne Webtechnologien eingesetzt, die vollständig im Browser ausgeführt werden.

Die Anwendung ist als webbasierte Trainingsplattform konzipiert, deren Ziel es ist, Basketballwürfe über Videoaufnahmen auszuwerten und dem Benutzer eine visuelle Rückmeldung über seine Wurfmechanik zu geben. Das Frontend stellt hierbei die Benutzeroberfläche bereit, über die Videos ausgewählt, Trainingssessions gestartet und Analyseergebnisse dargestellt werden können.

Besonderes Augenmerk liegt auf einer klar strukturierten Benutzeroberfläche, einer intuitiven Bedienung sowie einer modular aufgebauten Architektur. Dadurch kann die Anwendung sowohl erweitert als auch an zukünftige Analysefunktionen angepasst werden.

\newpage


### Projektkontext der Anwendung

Die entwickelte Anwendung ist Teil eines Systems zur Analyse von Basketballwürfen. Ziel des Systems ist es, durch Videoaufnahmen eines Wurfes eine Analyse der Flugbahn sowie bestimmter Wurfparameter durchzuführen und diese visuell aufzubereiten.

Das Frontend übernimmt dabei mehrere zentrale Aufgaben:

- Darstellung der Benutzeroberfläche
- Verarbeitung von Benutzereingaben
- Auswahl und Vorschau von Trainingsvideos
- Kommunikation mit Backend-Schnittstellen
- Visualisierung von Analyseergebnissen

Die Anwendung ist als **Single Page Application (SPA)** konzipiert. Das bedeutet, dass nach dem initialen Laden der Anwendung sämtliche Interaktionen innerhalb einer einzigen HTML-Seite stattfinden. Inhalte werden dynamisch über JavaScript aktualisiert, ohne dass ein vollständiges Neuladen der Seite erforderlich ist.

Dadurch entsteht eine flüssige Benutzererfahrung, die sich ähnlich wie eine native Anwendung verhält.

Die Frontend-Anwendung arbeitet eng mit einer serverseitigen Backend-Komponente zusammen. Das Backend stellt REST-basierte Schnittstellen bereit, über die Benutzer authentifiziert, Trainingssessions gespeichert und statistische Daten abgerufen werden können.

\newpage


### Überblick über die Frontend-Architektur

Die Frontend-Architektur folgt einer klar strukturierten Trennung zwischen Darstellung, Logik und Kommunikationsschnittstellen.

Die wichtigsten Bestandteile der Anwendung sind:

- **HTML-Struktur** zur Definition der Benutzeroberfläche
- **CSS-Styling** zur Gestaltung und Layoutsteuerung
- **JavaScript-Logik** zur Verarbeitung von Ereignissen
- **API-Module** zur Kommunikation mit dem Backend

Die gesamte Anwendung wird im Browser ausgeführt und nutzt dabei die DOM-Struktur zur dynamischen Aktualisierung der Oberfläche.

Ein zentrales Element der Architektur ist die Zustandsverwaltung innerhalb der Anwendung. Hierbei wird der aktuell angemeldete Benutzer im Browser gespeichert, sodass die Oberfläche entsprechend angepasst werden kann.

Die Anwendung besitzt zwei Hauptansichten:

1. Authentifizierungsansicht (Login und Registrierung)
2. Hauptanwendung (Dashboard)

Zwischen diesen Ansichten wird dynamisch gewechselt, sobald ein Benutzer erfolgreich angemeldet oder registriert wurde.

Dieses Architekturprinzip ermöglicht eine klare Trennung zwischen Authentifizierung und eigentlicher Trainingsfunktionalität.

\newpage


### Technische Projektstruktur

Die Frontend-Anwendung befindet sich im Projektverzeichnis innerhalb des Ordners `frontend`. Die Struktur ist bewusst übersichtlich gehalten, um eine einfache Wartbarkeit zu gewährleisten.

Die wichtigsten Bestandteile der Projektstruktur sind:

- **index.html**  
  Einstiegspunkt der Anwendung und grundlegende HTML-Struktur.

- **app.js**  
  Zentrale Logik der Anwendung. Hier werden Ereignisse verarbeitet, Views gewechselt und Benutzeraktionen gesteuert.

- **src/api/**  
  Enthält Module für API-Aufrufe zum Backend.

- **client.js**  
  Implementiert einen Wrapper für HTTP-Anfragen.

- **charts.html**  
  Testseite zur Darstellung von Diagrammen.

Diese Struktur erlaubt eine klare Trennung zwischen UI-Logik und Kommunikationsschnittstellen.

Darüber hinaus werden externe Bibliotheken über ein Content Delivery Network (CDN) eingebunden. Dies reduziert die Komplexität der Projektstruktur und ermöglicht eine schnelle Integration von Visualisierungsbibliotheken.

\newpage


### Start der Anwendung im Browser

Die Anwendung wird als statische Webanwendung im Browser ausgeführt. Damit alle Funktionen korrekt arbeiten, muss sie über einen lokalen Webserver gestartet werden.

Der Start erfolgt beispielsweise über ein einfaches statisches Serving-Tool.

Der Grund hierfür liegt darin, dass moderne Browser Sicherheitsmechanismen besitzen, die bestimmte Funktionen – insbesondere Netzwerkzugriffe – blockieren können, wenn eine Seite direkt über das lokale Dateisystem (`file://`) geöffnet wird.

Durch den Einsatz eines lokalen Servers erhält die Anwendung eine definierte Herkunft (Origin), wodurch Netzwerkzugriffe sowie API-Kommunikation korrekt funktionieren.

Nach dem Start öffnet der Browser die `index.html`-Datei, welche das Grundgerüst der Anwendung lädt. Anschließend wird die JavaScript-Logik initialisiert und die Benutzeroberfläche dargestellt.

\newpage


### Login-Oberfläche

Beim ersten Aufruf der Anwendung erscheint die Login-Ansicht. Diese stellt die Einstiegsschnittstelle für den Benutzer dar und ermöglicht die Anmeldung mit bestehenden Zugangsdaten.

![Login-Oberfläche der Anwendung](img/homescreenLogin.jpeg){ width=80% }

Abbildung: Login-Oberfläche der Anwendung mit Eingabefeldern für Benutzername oder E-Mail sowie Passwort.

Die Login-Oberfläche enthält folgende zentrale Elemente:

- Eingabefeld für Benutzername oder E-Mail
- Passwortfeld
- Passwort-Sichtbarkeitsschalter
- Button zur Anmeldung
- Link zur Registrierung

Die Benutzeroberfläche wurde bewusst minimalistisch gestaltet, um eine klare Benutzerführung zu ermöglichen.

Nach Eingabe der Zugangsdaten wird eine Anfrage an das Backend gesendet, welches die Authentifizierung durchführt.

\newpage


### Registrierung neuer Benutzer

Neben der Anmeldung bietet die Anwendung auch eine Registrierungsfunktion für neue Benutzer.

![Registrierungsoberfläche der Anwendung](img/homescreenRegistrierung.jpeg){ width=80% }

Abbildung: Registrierungsformular zur Erstellung eines neuen Benutzerkontos.

Die Registrierung erfordert folgende Informationen:

- Vorname
- Nachname
- E-Mail-Adresse
- Passwort

Nach erfolgreicher Registrierung wird der Benutzer automatisch in die Hauptansicht der Anwendung weitergeleitet.

Diese Funktion ermöglicht es neuen Nutzern, ohne zusätzliche Systemadministration ein Konto zu erstellen und direkt mit der Trainingsanalyse zu beginnen.

\newpage


### Authentifizierungs-Flow im Frontend

Der Authentifizierungsprozess besteht aus mehreren Schritten.

Zunächst gibt der Benutzer seine Zugangsdaten in das Login-Formular ein. Nach dem Absenden des Formulars wird eine HTTP-Anfrage an die entsprechende Backend-Schnittstelle gesendet.

Das Backend überprüft die übermittelten Daten und sendet eine Antwort an den Client zurück. Bei erfolgreicher Authentifizierung wird der Benutzer im Frontend als angemeldet gespeichert.

Anschließend erfolgt ein Wechsel der Benutzeroberfläche von der Authentifizierungsansicht zur Hauptanwendung.

Dieser Wechsel erfolgt vollständig clientseitig. Das Frontend blendet die Authentifizierungsoberfläche aus und zeigt stattdessen das Dashboard der Anwendung an.

Der aktuell angemeldete Benutzer wird im Browser gespeichert, sodass der Zustand auch nach einem Neuladen der Seite wiederhergestellt werden kann.

\newpage

## Dashboard der Anwendung

Nach erfolgreicher Authentifizierung wechselt die Anwendung automatisch in die Hauptansicht, das sogenannte Dashboard. Dieses stellt die zentrale Benutzeroberfläche dar, über die sämtliche Trainingsaktionen gesteuert werden können.

Das Dashboard wurde so gestaltet, dass die wichtigsten Informationen und Funktionen direkt sichtbar sind. Ziel der Oberfläche ist es, dem Benutzer eine klare Übersicht über seine Trainingsdaten zu geben und gleichzeitig den Einstieg in eine neue Analyse möglichst einfach zu gestalten.

Die Oberfläche besteht aus mehreren logisch getrennten Bereichen:

- Kopfbereich mit Benutzerinformationen
- KPI-Anzeige für aktuelle Leistungswerte
- Trainingsbereich zum Starten einer Analyse
- Liste vergangener Würfe
- Navigationsleiste

Diese Struktur ermöglicht eine intuitive Bedienung der Anwendung, ohne dass zusätzliche Menüs oder komplexe Navigation erforderlich sind.

![Dashboard der Anwendung](img/dashboard.jpeg){ width=80% }

Abbildung: Hauptansicht der Anwendung nach erfolgreicher Anmeldung.

Im oberen Bereich der Oberfläche wird der aktuell angemeldete Benutzer angezeigt. Zusätzlich steht dort eine Logout-Funktion zur Verfügung, mit der der Benutzer seine Sitzung beenden kann.

Das Dashboard bildet somit die zentrale Steuerungsoberfläche für alle weiteren Funktionen der Anwendung.

\newpage


## Live Performance Anzeige

Ein wichtiger Bestandteil des Dashboards ist der sogenannte **Live Performance Bereich**. Dieser zeigt Kennzahlen an, die dem Benutzer eine unmittelbare Rückmeldung über seine Wurfmechanik geben.

![Live Performance Bereich](img/livePerformanceFenster.jpeg){ width=80% }

Abbildung: KPI-Bereich der Anwendung mit Wurfparametern.

In der aktuellen Implementierung werden zwei zentrale Kennzahlen dargestellt:

- **Release Angle**  
  Der Winkel, in dem der Ball beim Wurf die Hand verlässt.

- **Shot Quality Score**  
  Ein zusammengefasster Bewertungswert, der verschiedene Wurfparameter berücksichtigt.

Der Release Angle wird dabei als Gradwert angezeigt. Zusätzlich wird ein optimaler Bereich angegeben, der sich typischerweise zwischen etwa 45° und 55° befindet.

Der Shot Quality Score wird als Punktwert dargestellt und soll dem Benutzer eine schnelle Einschätzung seiner Wurfqualität geben.

Im aktuellen Entwicklungsstand werden diese Werte prototypisch generiert. Sie dienen primär dazu, die spätere Darstellung realer Analysewerte im Interface vorzubereiten.

\newpage


## Start einer Trainingssession

Im Zentrum des Dashboards befindet sich der Bereich **New Training Session**. Dieser dient dazu, eine neue Analyse eines Basketballwurfs zu starten.

Die Benutzeroberfläche zeigt hierfür einen klar hervorgehobenen Button mit der Beschriftung **Start Analysis**.

Durch diese Gestaltung wird die wichtigste Aktion der Anwendung visuell betont.

Der Ablauf für eine neue Trainingsanalyse ist folgender:

1. Benutzer klickt auf „Start Analysis“
2. Auswahl eines Videos
3. Vorschau des ausgewählten Videos
4. Darstellung der Analysewerte

Die Benutzerführung ist bewusst einfach gehalten, sodass auch neue Benutzer ohne Anleitung eine Analyse starten können.

\newpage


## Auswahl eines Trainingsvideos

Um eine Analyse durchführen zu können, muss zunächst ein Video eines Basketballwurfs ausgewählt werden. Die Anwendung unterstützt hierfür zwei unterschiedliche Methoden:

- Auswahl über einen Dateidialog
- Drag-and-Drop direkt auf die Anwendung

Diese Flexibilität ermöglicht es dem Benutzer, Videos schnell und unkompliziert auszuwählen.

Der Dateiinput akzeptiert ausschließlich Videodateien. Dadurch wird sichergestellt, dass nur geeignete Dateien verarbeitet werden können.

Technisch erfolgt die Auswahl über ein HTML-Dateieingabeelement, das mit JavaScript verbunden ist. Sobald der Benutzer eine Datei auswählt, wird ein Ereignis ausgelöst, das die weitere Verarbeitung im Frontend startet.

\newpage


## Drag-and-Drop Unterstützung

Zusätzlich zur klassischen Dateiauswahl unterstützt die Anwendung auch Drag-and-Drop. Dabei kann der Benutzer eine Videodatei direkt aus dem Dateisystem in das Browserfenster ziehen.

Dieses Verhalten wird über sogenannte Drag-Events im Browser umgesetzt.

Die wichtigsten Ereignisse dabei sind:

- `dragover`
- `drop`

Während des Drag-Vorgangs verhindert die Anwendung das Standardverhalten des Browsers, um das Ablegen der Datei innerhalb der Anwendung zu ermöglichen.

Beim Drop-Ereignis wird anschließend überprüft, ob es sich um eine gültige Videodatei handelt. Falls dies der Fall ist, wird die Datei an die gleiche Verarbeitungsroutine übergeben wie bei der klassischen Dateiauswahl.

Diese Funktion erhöht die Benutzerfreundlichkeit erheblich und entspricht modernen Webanwendungsstandards.

\newpage


## Video-Vorschau im Dashboard

Nachdem ein Video ausgewählt wurde, zeigt die Anwendung eine Vorschau des Clips direkt im Dashboard an.

![Dashboard nach Analyse](img/dashboardNachAnalyse.jpeg){ width=80% }

Abbildung: Dashboard mit Video-Vorschau nach Auswahl eines Trainingsvideos.

Die Vorschau wird mithilfe eines HTML-Videoelements realisiert. Damit das Video direkt im Browser abgespielt werden kann, wird aus der ausgewählten Datei eine temporäre lokale URL erzeugt.

Diese URL wird anschließend als Quelle (`src`) für das Videoelement verwendet.

Der Vorteil dieses Ansatzes besteht darin, dass keine sofortige Serverkommunikation erforderlich ist. Das Video kann direkt lokal abgespielt werden, wodurch eine schnelle Rückmeldung für den Benutzer entsteht.

Der Benutzer kann den Clip damit nochmals überprüfen, bevor weitere Analysefunktionen ausgeführt werden.

\newpage


## Anzeige von Trainingseinträgen (Recent Throws)

Unterhalb des Analysebereichs befindet sich eine Liste mit dem Titel **Recent Throws**. Diese Liste zeigt vergangene Würfe an und dient als Übersicht über bereits durchgeführte Trainingsanalysen.

Ein Eintrag enthält typischerweise folgende Informationen:

- Bezeichnung des Wurfs
- kurze Beschreibung oder Feedback
- Zeitstempel

Die Darstellung erfolgt in Form einer einfachen Liste, wodurch die Ergebnisse leicht überblickt werden können.

Ein Beispiel für einen solchen Eintrag ist:

"Wurf 1 – Leichte Abweichung vom perfekten Wurf."

Diese Funktion bildet die Grundlage für eine zukünftige Trainingshistorie. In einer erweiterten Version der Anwendung könnten hier mehrere Trainingssessions gespeichert und analysiert werden.

Dadurch wäre es möglich, langfristige Verbesserungen der Wurfmechanik zu verfolgen.

\newpage

## Visualisierung der Wurftrajektorie

Ein zentrales Element der Anwendung ist die visuelle Darstellung einer Wurftrajektorie. Ziel dieser Visualisierung ist es, dem Benutzer eine verständliche Darstellung der Flugbahn des Basketballs zu geben.

Die Darstellung erfolgt in Form eines Liniencharts. Dabei werden zwei Kurven dargestellt:

- eine Referenzkurve (Soll-Flugbahn)
- eine gemessene Flugbahn (Ist-Flugbahn)

Die Referenzkurve stellt eine idealisierte Flugbahn dar, während die Ist-Kurve den tatsächlichen Verlauf eines Wurfes repräsentieren soll.

Durch den Vergleich dieser beiden Kurven kann der Benutzer erkennen, ob sein Wurf beispielsweise zu flach, zu hoch oder zu kurz war.

Die Visualisierung erfolgt mithilfe der JavaScript-Bibliothek **Chart.js**, welche eine einfache Integration von Diagrammen in Webanwendungen ermöglicht.

\newpage


## Darstellung der Analyse im Chart-Overlay

Die Diagrammvisualisierung wird nicht direkt im Dashboard angezeigt, sondern innerhalb eines sogenannten Overlays dargestellt.

Ein Overlay ist ein zusätzliches Fenster, das über die bestehende Benutzeroberfläche gelegt wird. Dadurch bleibt das Dashboard sichtbar, während gleichzeitig eine detaillierte Visualisierung angezeigt werden kann.

![Chart-Overlay der Anwendung](img/charts.jpeg){ width=80% }

Abbildung: Diagrammvisualisierung der Wurftrajektorie mit Soll- und Ist-Kurve.

Das Overlay wird über ein Symbol in der Navigationsleiste geöffnet. Nach dem Öffnen wird ein Canvas-Element erzeugt, in das das Diagramm gezeichnet wird.

Die Darstellung erfolgt als Linienchart mit zwei Datensätzen:

- **Soll-Kurve** (grün dargestellt)
- **Ist-Kurve** (blau dargestellt)

Die X-Achse repräsentiert dabei die Zeit bzw. den Verlauf des Wurfes, während die Y-Achse die Höhe des Balls darstellt.

Im aktuellen Projektstand werden die Kurvenwerte prototypisch erzeugt. Sie dienen dazu, die Visualisierungslogik sowie das Layout der Analyseansicht zu demonstrieren.

\newpage


## Analysekonzept einer Wurftrajektorie

Um eine Wurftrajektorie zu analysieren, müssen verschiedene physikalische Parameter berücksichtigt werden.

Zu den wichtigsten Parametern gehören:

- Abwurfwinkel (Release Angle)
- Abwurfgeschwindigkeit
- Flugbahn des Balls
- Treffpunkt im Korb

Diese Werte können theoretisch aus Videodaten berechnet werden, indem die Position des Balls in mehreren Frames verfolgt wird.

Die daraus resultierenden Positionsdaten können anschließend verwendet werden, um eine Flugkurve zu berechnen.

Ein Beispiel für eine solche Visualisierung zeigt die folgende Abbildung.

![Beispiel einer Analysevisualisierung](img/analyseWieEsAusschauenSollte.jpeg){ width=80% }

Abbildung: Beispielhafte Darstellung einer idealisierten Wurftrajektorie.

In einer erweiterten Version des Systems könnten reale Trackingdaten aus der Videoanalyse verwendet werden, um diese Kurven automatisch zu generieren.

\newpage


## Zustandsverwaltung im Frontend

Damit eine Webanwendung korrekt funktioniert, muss der aktuelle Zustand der Anwendung verwaltet werden. Dieser Zustand umfasst beispielsweise:

- den aktuell angemeldeten Benutzer
- geladene Trainingsdaten
- ausgewählte Videos
- aktuelle Analysewerte

In der implementierten Anwendung wird dieser Zustand in JavaScript-Variablen gespeichert.

Eine zentrale Variable ist dabei `currentUser`. Diese enthält Informationen über den aktuell angemeldeten Benutzer.

Zusätzlich existiert eine Liste für vergangene Würfe, die im Dashboard angezeigt werden können.

Die Zustandsverwaltung ist bewusst einfach gehalten, da die Anwendung keine komplexen parallelen Interaktionen enthält.

Für größere Anwendungen werden häufig spezielle Zustandsverwaltungsbibliotheken eingesetzt, die eine strukturierte Verwaltung von Daten ermöglichen.

\newpage


## Speicherung von Benutzerdaten im Browser

Um den Benutzerzustand auch nach einem Neuladen der Seite zu erhalten, werden bestimmte Informationen im Browser gespeichert.

Hierfür wird die sogenannte **LocalStorage API** verwendet.

LocalStorage ermöglicht es, kleine Datenmengen dauerhaft im Browser zu speichern. Diese Daten bleiben auch nach dem Schließen des Browsers erhalten.

Im Kontext dieser Anwendung wird LocalStorage verwendet, um den aktuell angemeldeten Benutzer zu speichern.

Beim Start der Anwendung wird überprüft, ob ein Benutzer im LocalStorage vorhanden ist. Falls dies der Fall ist, wird die Anwendung direkt im Dashboard gestartet.

Dieses Verhalten verbessert die Benutzerfreundlichkeit, da der Benutzer sich nicht bei jedem Aufruf erneut anmelden muss.

\newpage


## Kommunikation mit dem Backend

Das Frontend kommuniziert mit dem Backend über REST-basierte Schnittstellen. Diese Kommunikation erfolgt über HTTP-Anfragen.

Für die Umsetzung wird die JavaScript-Funktion `fetch()` verwendet, welche moderne Browser standardmäßig unterstützen.

Die wichtigsten API-Aufrufe der Anwendung sind:

- Benutzerregistrierung
- Benutzerlogin
- Erstellung einer Trainingssession
- Abrufen von Trainingsdaten

Die API-Kommunikation erfolgt über JSON-Daten. Das bedeutet, dass sowohl die Anfrage als auch die Antwort strukturierte JSON-Objekte enthalten.

Diese Daten werden im Frontend verarbeitet und anschließend in der Benutzeroberfläche dargestellt.

Durch diese Architektur bleibt das Frontend unabhängig von der internen Implementierung des Backends.

\newpage


## Fehlerbehandlung im Frontend

In Webanwendungen können unterschiedliche Fehler auftreten. Dazu gehören beispielsweise:

- ungültige Login-Daten
- fehlgeschlagene Netzwerkverbindungen
- unerwartete Serverantworten

Die Anwendung berücksichtigt solche Situationen und zeigt dem Benutzer entsprechende Fehlermeldungen an.

Ein Beispiel ist der Login-Prozess. Wenn das Backend eine fehlerhafte Authentifizierung zurückmeldet, erscheint im Frontend eine entsprechende Meldung.

Zusätzlich werden Netzwerkfehler abgefangen, um zu verhindern, dass die Anwendung in einen undefinierten Zustand gerät.

Eine robuste Fehlerbehandlung ist besonders wichtig, um eine stabile Benutzererfahrung zu gewährleisten.

\newpage


## Grenzen der aktuellen Implementierung

Wie viele Softwareprojekte befindet sich auch diese Anwendung in einem Entwicklungsstand, der bereits funktionsfähige Komponenten enthält, jedoch noch Erweiterungsmöglichkeiten besitzt.

Einige Funktionen sind aktuell prototypisch umgesetzt. Dazu gehören insbesondere:

- Analysewerte im Dashboard
- Diagrammdaten im Chart
- Trainingshistorie

Diese Elemente sind bereits in der Benutzeroberfläche vorgesehen, werden jedoch derzeit noch nicht vollständig durch reale Analysewerte gespeist.

Die vorhandene Struktur ermöglicht jedoch eine spätere Erweiterung, ohne dass grundlegende Änderungen an der Benutzeroberfläche notwendig sind.

\newpage


## Weiterentwicklungsmöglichkeiten

Für zukünftige Versionen der Anwendung ergeben sich mehrere mögliche Erweiterungen.

Eine zentrale Weiterentwicklung wäre die Integration einer automatischen Videoanalyse. Dabei könnten Computer-Vision-Algorithmen verwendet werden, um die Position des Balls in einzelnen Frames zu erkennen und daraus eine Flugkurve zu berechnen.

Weitere mögliche Erweiterungen sind:

- automatische Wurferkennung in Trainingsvideos
- detaillierte Trainingsstatistiken
- langfristige Performanceanalyse
- mobile Optimierung der Benutzeroberfläche

Durch diese Erweiterungen könnte die Anwendung zu einem umfassenden Trainingswerkzeug für Basketballspieler weiterentwickelt werden.

\newpage


