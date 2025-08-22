export function MetacriticScoreColor(metacriticScore: number) {
  if (metacriticScore > 74) return "bg-green-700";
  if (metacriticScore > 49) return "bg-orange-700";
  return "bg-red-700";
}
