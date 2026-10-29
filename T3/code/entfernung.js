const fs = require("fs"); // ganz oben

const roh = fs.readFileSync("orte.json", "utf8");
const orte = JSON.parse(roh);

const ERDRADIUS_KM = 6371; // mittlerer Erdradius

function gradZuRad(grad) {
  return (grad * Math.PI) / 180;
}

/**
 * Berechnet die Entfernung zwischen zwei Orten auf der Erdoberfläche
 * (Großkreisentfernung nach der Haversine-Formel).
 * @param {{lat: number, lon: number}} ortA
 * @param {{lat: number, lon: number}} ortB
 * @returns {number} Entfernung in km
 */
function entfernung(ortA, ortB) {
  const phi1 = gradZuRad(ortA.lat);
  const phi2 = gradZuRad(ortB.lat);
  const dPhi = gradZuRad(ortB.lat - ortA.lat);
  const dLambda = gradZuRad(ortB.lon - ortA.lon);

  const a =
    Math.sin(dPhi / 2) ** 2 +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(dLambda / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return ERDRADIUS_KM * c;
}

// Hilfsfunktion: Orte über ihren Namen suchen
function findeOrt(name) {
  const ort = orte.find((o) => o.name === name);
  if (!ort) throw new Error(`Ort "${name}" nicht gefunden`);
  return ort;
}

// Beispiele
const paare = [
  ["Nullinsel", "Prüfpunkt Ost"],
  ["Spitzbergen", "Prüfpunkt Nord"],
  ["Schwäbisch Gmünd", "Stuttgart"],
  ["Stuttgart", "Kapstadt"],
  ["Stuttgart", "NYC"],
];

for (const [a, b] of paare) {
  const km = entfernung(findeOrt(a), findeOrt(b));
  console.log(`${a} → ${b}: ${km.toFixed(2)} km`);
}

module.exports = { entfernung };