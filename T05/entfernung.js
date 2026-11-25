const ERDRADIUS_KM = 6371;

export function gradZuBogenmass(grad) {
  return (grad * Math.PI) / 180;
}

export function entfernung(a, b) {
  const dLat = gradZuBogenmass(b.lat - a.lat);
  const dLon = gradZuBogenmass(b.lon - a.lon);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(gradZuBogenmass(a.lat)) *
      Math.cos(gradZuBogenmass(b.lat)) *
      Math.sin(dLon / 2) ** 2;
  return 2 * ERDRADIUS_KM * Math.asin(Math.sqrt(h));
}

export function orteImUmkreis(orte, zentrum, radiusKM) {
  return orte.filter((ort) => entfernung(zentrum, ort) <= radiusKM);
}

export function nachEntfernung(orte, zentrum) {
  return orte
    .map((ort) => ({ ...ort, km: entfernung(zentrum, ort) }))
    .sort((a, b) => a.km - b.km);
}

