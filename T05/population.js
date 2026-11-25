
export function berechneRadius(population, maxPopulation) {
  const MAX_RADIUS = 10;
  return MAX_RADIUS * Math.sqrt(population / maxPopulation);
}