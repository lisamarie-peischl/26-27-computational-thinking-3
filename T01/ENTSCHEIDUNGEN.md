1. Was macht dein Skript?

Mein Skript soll eine Karte erstellen mit mehreren Orten. Gegeben sind die Orte mit ihren Breiten- und Längengraden, sowie die Breite und Höhe der Karte in Pixel.

Dabei gilt:

- let width = 720; das ist die Breite X
- let height = 360; das ist die Höhe Y

Um die Orte korrekt auf der Karte zu positioneren benötigt es zwei Funktionen:

- "function lonToX(lon)": Sie rechnet den Längengrad eines Ortes in eine X-Koordinate um.

- "function latToY(lat): Sie rechnet den Breitengrad eines Ortes in eine Y-Koordinate um.

Zusätzlich hat das Skript noch eine weitere Funktion. Es kann die Position eines Punktes B im Vergleich zur Position des Punktes A beschreiben.

Die Funktion "function comparePositions(latA, lonA, latB, lonB)" vergleicht die Längen- und Breitengraden der Punkte und kann somit aussagen, ob der Punkt B im Vergleich zu Punkt A westlich oder östlich und südlich oder nördlich liegt.

Dafür wird erst mit Hilfe von drei "if's" gefragt ob der Längengrad von Punkt B im Vergleich zu Punkt A kleiner (südlich), größer (nördlich) oder gleich groß (gleicher Breitengrad) ist. 

Dann sind innerhalb der drei "if's" nochmal drei "if's" die überprüfen ob der Längengrad von Punkt B im Vergleich zu Punkt A kleiner (westlich), größer "östlich" oder gleichgroß (selber Breitengrad) ist.

Dann wird mit einem console.log in einem Satz ausgegeben wie Punkt B zu Punkt A liegt, z.B. "Der Punkt B liegt südwestlich von A."

2. Welche Stelle hättest du auch anders lösen können? Wie?

Ich hätte die dritte Funktion "function comparePositions(latA, lonA, latB, lonB)" anders strukturieren können.

Zum Beispiel wäre es möglich gewesen den Längen- und Breitengrad getrennt zu betrachten. Also erst seperat abgefragen, ob der Punkt südlich oder nörlich liegt und danach im seperaten Abschnitt, ob der Punkt westlich oder östlich liegt.

Auch hätte ich, die dritte Möglichkeit des auf dem selben Grad liegens außenvor lassen können, wenn ich davon ausgegangen wäre, dass die Wahrscheinlichkeit für identische Grade nur sehr gering ist. 

3. Warum hast du es so gelöst?

Dadurch, dass die Überprüfungen miteinander verkettet sind, wird das Ergebnis in einem Satz ausgegeben. Hätte ich mich für zwei getrennte if-Abschnitte oder Funktionen entschieden, hätte es zwei einzelne Lösungen gegeben. Mir war es aber wichtig, dass es sich um eine Ausgabe handelt die die Positionierung beschreibt. Auch war es mir wichtig den Fall, dass die Breitengrade identisch sind nicht auslassen, da dieser vorkommen kann.

4. Was viel dir schwer bei der Aufgabe?

Schwer fiel mir zu überlegen wie die Funktion aufgebaut sein soll.