1. Was tut dein Skript?
Das Skript wurde im Vergleich zu Termin-1 erweitert, sodass die Orte aus einer Datei namens orte.json geladen werden können.

In dieser Datei stehen die Namen der Städte, ihre Breiten- und Längengrade sowie ihre Einwohnerzahlen (population).

Mit require("./orte.json") werden die Daten in das Skript geladen.

Danach werden mit einer for-Schleife alle Orte durchgegangen und mit den Funktionen lonZuX() und latZuY() ihre Positionen auf der Karte berechnet.

Anschließend wird eine SVG-Karte erstellt, auf der die Orte als Kreise dargestellt werden. Neben jedem Kreis steht der Name der jeweiligen Stadt.s

Die Größe der Kreise hängt dabei von der Einwohnerzahl ab.

Dafür wird mit const radius = 2 + (ort.population / 1000000) der Radius berechnet. Die Einwohnerzahl wird durch eine Million geteilt und 2 dazu addiert, damit auch kleinere Städte sichtbar bleiben.

Je mehr Einwohner eine Stadt hat, desto größer ist der Kreis auf der Karte.

Zum Schluss wird die Karte mit fs.writeFileSync("karte.svg", svg) als SVG-Datei gespeichert.

2. Welche Stelle hättest du auch anders lösen können? Wie? 

Ich hätte die Berechnund des Radius auch direkt in r="..." inform einer Math. Formel eintragen können und nicht als seperate eigene constance radius.

3. Warum hast du es so gelöst?

Ich finde diese Art übersichtlicher und besser zu verstehen, auch wenn es mehr Code bedeutet.

4. Was fiel dir schwer bei der Aufgabe?

Es hat etwas gebraucht bis ich verstanden hab wie ich die JSON-Datei aufbaue und wie ich sie mit projektion.js verknüpfe.

5. Was ist dir unklar geblieben?