import CardFeaturedGames from "./CardFeaturedGames";
import FeaturedGamesWrapper from "./FeaturedGamesWrapper";

export default function FeaturedGames() {
  return (
    <FeaturedGamesWrapper>
      <h2 className="text-[1.2rem]">Featured Games</h2>
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
