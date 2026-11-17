
const BREITE_SVG = 720;
const HOEHE_SVG = 360;

const sliderBreite = document.querySelector("#breite");
console.log(sliderBreite);
const sliderZoom = document.querySelector("#zoom");
console.log(sliderZoom);

// const orte = require(path.join(__dirname, "orte.json"));
const responseOrte = await fetch("orte.json");
const orte = await responseOrte.json();
console.log(orte);

// function lonZuX(lon, breite) {
//   return ((lon + 180) / 360) * breite;
// }

// function latZuY(lat, hoehe) {
//   return ((90 - lat) / 180) * hoehe;
// }

function lonZuX(lon, breite, ausschnitt) {
  return ((lon - ausschnitt.west) / (ausschnitt.ost - ausschnitt.west)) * breite;
}

function latZuY(lat, hoehe, ausschnitt) {
  return ((ausschnitt.nord - lat) / (ausschnitt.nord - ausschnitt.sued)) * hoehe;
}

const AUSSCHNITT = { west: -25, ost: 180, nord: 82, sued: -12 };
const ZOOMPUNKT = { lat: 48.8, lon: 9.8 };

for (const ort of orte) {
  const x = lonZuX(ort.lon, BREITE_SVG, AUSSCHNITT);
  const y = latZuY(ort.lat, HOEHE_SVG, AUSSCHNITT);
  console.log(ort.name, "→ x:", x, "y:", y);
}



// let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${BREITE_SVG}" height="${HOEHE_SVG}">
//   <rect width="${BREITE_SVG}" height="${HOEHE_SVG}" fill="#f4f1ea" stroke="#222"/>`;

// const MAX_RADIUS = 10;
// const maxPopulation = Math.max(...orte.map((o) => o.population));

// for (const ort of orte) {
//   const x = lonZuX(ort.lon, BREITE_SVG);
//   const y = latZuY(ort.lat, HOEHE_SVG);

//   const radius = MAX_RADIUS * Math.sqrt(ort.population / maxPopulation);
//   svg += `
//   <circle cx="${x}" cy="${y}" r="${radius}" fill="#c0392b"/>
//   <text x="${x + radius + 3}" y="${y + 4}" font-family="sans-serif" font-size="11">${ort.name}</text>`;
// }
function zeichnen() {
    const breite = sliderBreite.value;
    const hoehe = breite / 2;
    const zoom = Number(sliderZoom.value);

    const ausschnittZoom = {
    west: ZOOMPUNKT.lon - (ZOOMPUNKT.lon - AUSSCHNITT.west) / zoom,
    ost: ZOOMPUNKT.lon + (AUSSCHNITT.ost - ZOOMPUNKT.lon) / zoom,
    nord: ZOOMPUNKT.lat + (AUSSCHNITT.nord - ZOOMPUNKT.lat) / zoom,
    sued: ZOOMPUNKT.lat - (ZOOMPUNKT.lat - AUSSCHNITT.sued) / zoom,
};

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${breite}" height="${hoehe}">
  <rect width="${breite}" height="${hoehe}" fill="#f4f1ea" stroke="#222"/>`;

const MAX_RADIUS = 10;
const maxPopulation = Math.max(...orte.map((o) => o.population));

for (const ort of orte) {
  const x = lonZuX(ort.lon, breite, ausschnittZoom);
  const y = latZuY(ort.lat, hoehe, ausschnittZoom);

  const radius = MAX_RADIUS * Math.sqrt(ort.population / maxPopulation);
  svg += `
  <circle cx="${x}" cy="${y}" r="${radius}" fill="#c0392b"/>
  <text x="${x + radius + 3}" y="${y + 4}" font-family="sans-serif" font-size="11">${ort.name}</text>`;
}

svg += `
</svg>`;

// fs.writeFileSync(path.join(__dirname, "karte.svg"), svg);
document.querySelector("#karte").innerHTML = svg;

};

sliderBreite.addEventListener("input", zeichnen);
zeichnen(); 
sliderZoom.addEventListener("input", zeichnen);
zeichnen();
