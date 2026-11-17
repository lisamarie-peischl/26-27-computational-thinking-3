Aufgabe 1

Ich habe mit JavaScript eine Landkarte programmiert. Nun möchte ich dass sich nur ein bestimmter Ausschnitt der Karte anzeigen lässt. Dafür sollen die Funktionen lonZuX und latZuY einen dritten Parameter namens ausschnitt bekommen. Der Ausschnitt wird definiert mit 
const AUSSCHNITT = {  west: ..., ost: ..., nord: ..., sued: …}; . Bitte passe meine beiden Funktionen so an, dass die geografischen Koordinaten anhand dieses Ausschnitts in X- und Y-Positionen auf der Karte umgerechnet werden. Bitte verändere dabei so wenig wie möglich an den Funktionen und mache es möglichst simpel. Meine Funktionen:
function lonZuX(lon, breite) {
  return ((lon + 180) / 360) * breite;
}
function latZuY(lat, hoehe) {
  return ((90 - lat) / 18) * hoehe;
}


Aufgabe 2

Als nächstes möchte ich einen Slider einbauen der an Gmünd ranzoomt. Dafür habe ich die Konstante const ZOOMPUNKT = { lat: 48.8, lon: 9.8 };. Ich habe einen Zoom-Slider mit der ID zoom eingebaut, der Werte von 1 bis 10 hat. In JavaScript greife ich über sliderZoom darauf zu. Beim Ranzoomen soll Schwäbisch Gmünd immer and der selben Stelle auf dem Bildschirm bleiben. Die Funktionen habe ich dir bereits geschickt. Bitte zeige mir wo ich was verändern und einfügen muss. Bitte mach es möglichst einfach und simpel. 

