export function handleStarsMetacritic(metacriticScore: number) {
  const starsNumberBase = metacriticScore / 20;
  const starNumberForRender = Math.round(starsNumberBase * 2) / 2;
  const fullStars = Math.floor(starNumberForRender);
  const halfStar = starNumberForRender % 1 !== 0 ? 1 : 0;

  const starsRatingRender: string[] = [];

  for (let i = 0; i < fullStars; i++) {
    starsRatingRender.push("full");
  }

  if (halfStar) {
    starsRatingRender.push("half");
  }

  while (starsRatingRender.length < 5) {
    starsRatingRender.push("empty");
  }

  return { starsRatingRender };
}
