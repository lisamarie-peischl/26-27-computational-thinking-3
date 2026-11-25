export function lonZuX(lon, breite, ausschnitt) {
  return ((lon - ausschnitt.west) / (ausschnitt.ost - ausschnitt.west)) * breite;
}

export function latZuY(lat, hoehe, ausschnitt) {
  return ((ausschnitt.nord - lat) / (ausschnitt.nord - ausschnitt.sued)) * hoehe;
}

export function zoomeAusschnitt(ausschnitt, punkt, faktor) {
  return {
    west: punkt.lon - (punkt.lon - ausschnitt.west) / faktor,
    ost: punkt.lon + (ausschnitt.ost - punkt.lon) / faktor,
    nord: punkt.lat + (ausschnitt.nord - punkt.lat) / faktor,
    sued: punkt.lat - (punkt.lat - ausschnitt.sued) / faktor,
  };
}