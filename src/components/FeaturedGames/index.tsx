import CardFeaturedGames from "./CardFeaturedGames";
import FeaturedGamesWrapper from "./FeaturedGamesWrapper";

export default function FeaturedGames() {
  return (
    <FeaturedGamesWrapper>
      <h2 className="text-[1.2rem] md:text-[1.8rem]">Featured Games</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        <CardFeaturedGames />
        <CardFeaturedGames />
        <CardFeaturedGames />
        <CardFeaturedGames />
        <CardFeaturedGames fullWidth />
      </div>
    </FeaturedGamesWrapper>
  );
}
