import { orteImUmkreis, nachEntfernung } from "./entfernung.js";
import { lonZuX, latZuY, zoomeAusschnitt } from "./projektion.js";

const AUSSCHNITT = { west: -180, ost: 180, nord: 90, sued: -90 };
const ZOOMPUNKT = { lat: 48.8, lon: 9.79 }; // Schwäbisch Gmünd

const response = await fetch("orte.json");
const orte = await response.json();

const sliderBreite = document.querySelector("#breite");
const sliderZoom = document.querySelector("#zoom");
const karte = document.querySelector("#karte");
const sliderRadius = document.querySelector("#radius");
const radiusAnzeige = document.querySelector("#radiusAnzeige");

function zeichnen() {
  const breite = Number(sliderBreite.value);
  const hoehe = breite / 2;
  const faktor = 2 ** Number(sliderZoom.value); // 0 → 1×, 1 → 2×, 7 → 128×
  const ausschnitt = zoomeAusschnitt(AUSSCHNITT, ZOOMPUNKT, faktor);

  const radiusKm = Number(sliderRadius.value);
  radiusAnzeige.textContent = radiusKm;
  const nah = orteImUmkreis(orte, ZOOMPUNKT, radiusKm);

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${breite}" height="${hoehe}">
  <rect width="${breite}" height="${hoehe}" fill="#f4f1ea" stroke="#222"/>`;

  for (const ort of nah) {
    const x = lonZuX(ort.lon, breite, ausschnitt);
    const y = latZuY(ort.lat, hoehe, ausschnitt);
    svg += `
  <circle cx="${x}" cy="${y}" r="4" fill="${ort.farbe}"/>
  <text x="${x + 8}" y="${y + 4}" font-family="sans-serif" font-size="11">${ort.name}</text>`;
  }

  svg += `
</svg>`;

  karte.innerHTML = svg;

  const sortiert = nachEntfernung(nah, ZOOMPUNKT);
  
  let listenElemente = "";
  
  for (const ort of sortiert) {
    listenElemente += `<li>${ort.name} – ${ort.km.toFixed(1)} km</li>`;
  }
  liste.innerHTML = listenElemente;
}

// Beide Slider rufen dieselbe Funktion auf. zeichnen() liest beide jedes Mal neu.
sliderBreite.addEventListener("input", zeichnen);
sliderZoom.addEventListener("input", zeichnen);
sliderRadius.addEventListener("input", zeichnen);

zeichnen();
