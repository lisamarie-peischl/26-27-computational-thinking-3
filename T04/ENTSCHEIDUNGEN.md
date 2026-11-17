Wie funktionieren Ausschnitt und Zoom?

Ausschnitt:
Die const AUSSCHNITT gibt die Grenzen an. Dabei ist z.B west: -25 die linke Grenze. Liegt ein Punkt auf dieser Grenze bekommt er den X-Wert 0. Die Funktionen lonToX und latToY rechnen damit die geografischen Koordinaten der Orte in Pixelkoordinaten um. In meinem Fall zeigt der Auschnitt Europa und Asien.

Zoom:

Mit const ZOOMPUNKT = { lat: 48.8, lon: 9.8 }; wird der Punkt festgelegt an den herangezoomt werden soll (in diesem Fall Gmünd).

In zeichnen() wird das Heranzoomen berechnet. Dafür wird z.B.  west: ZOOMPUNKT.lon - (ZOOMPUNKT.lon - AUSSCHNITT.west) / zoom, berechnet. Bei dieser Rechnung wird der Abstand zwischen Schwäbisch Gmünd und der westlichen Kartengrenze durch den Zoomwert geteilt. Das selbe wird auch mit den anderen drei Grenzen gemacht. Dadurch wird der Ausschnitt mit einem höheren Zoom-Wert immer kleiner. Statt AUSSCHNITT wird bei der Berechnung von const X und const Y ausschnittZoom verwendet, dadurch wird der Kartenausschnitt, wenn man heranzoomt neu berechnet.  

Welche Stolpersteine gab es bei der Umsetzung?
Ich habe etwas gebraucht die Aufgabe zu verstehen, deswegen ist es viel mir schwer gefallen zu verstehen was ich erreichen möchte und dementsprechend passende Prompts zu schreiben. 

Was ist dir unklar geblieben?