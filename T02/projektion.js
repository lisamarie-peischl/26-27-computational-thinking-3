const fs = require("fs");
const path = require("path");

const BREITE_SVG = 720;
const HOEHE_SVG = 360;

const orte = require(path.join(__dirname, "orte.json"));

function lonZuX(lon, breite) {
  return ((lon + 180) / 360) * breite;
}

function latZuY(lat, hoehe) {
  return ((90 - lat) / 180) * hoehe;
}

for (const ort of orte) {
  const x = lonZuX(ort.lon, BREITE_SVG);
  const y = latZuY(ort.lat, HOEHE_SVG);
  console.log(ort.name, "→ x:", x, "y:", y);
}



let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${BREITE_SVG}" height="${HOEHE_SVG}">
  <rect width="${BREITE_SVG}" height="${HOEHE_SVG}" fill="#f4f1ea" stroke="#222"/>`;

const MAX_RADIUS = 10;
const maxPopulation = Math.max(...orte.map((o) => o.population));

for (const ort of orte) {
  const x = lonZuX(ort.lon, BREITE_SVG);
  const y = latZuY(ort.lat, HOEHE_SVG);

  const radius = MAX_RADIUS * Math.sqrt(ort.population / maxPopulation);
  svg += `
  <circle cx="${x}" cy="${y}" r="${radius}" fill="#c0392b"/>
  <text x="${x + radius + 3}" y="${y + 4}" font-family="sans-serif" font-size="11">${ort.name}</text>`;
}

svg += `
</svg>`;

fs.writeFileSync(path.join(__dirname, "karte.svg"), svg);