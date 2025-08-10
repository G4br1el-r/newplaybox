import CardFeaturedGames from "./CardFeaturedGames";
import FeaturedGamesWrapper from "./FeaturedGamesWrapper";

export default function FeaturedGames() {
  return (
    <FeaturedGamesWrapper>
      <p className="text-[1.2rem]">Featured Games</p>
      <div className="flex flex-col gap-3">
        <CardFeaturedGames />
        <CardFeaturedGames />
        <CardFeaturedGames />
        <CardFeaturedGames />
        <CardFeaturedGames />
      </div>
    </FeaturedGamesWrapper>
  );
}
