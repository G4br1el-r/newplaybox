import { getDataForFeaturedGames } from "@/services/api";
import CardFeaturedGames from "./CardFeaturedGames";
import FeaturedGamesWrapper from "./FeaturedGamesWrapper";
import { FeaturedGamesType, TagsType } from "@/@types/FeaturedGamesType";

interface FeaturedGamesProps {
  FeaturedGamesData: FeaturedGamesType[];
}
export default function FeaturedGames({
  FeaturedGamesData,
}: FeaturedGamesProps) {
  return (
    <FeaturedGamesWrapper>
      <h2 className="text-[1.2rem] md:text-[1.8rem]">Featured Games</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {FeaturedGamesData.map((game, index) => (
          <CardFeaturedGames
            key={game.id}
            {...game}
            fullWidth={index === FeaturedGamesData.length - 1}
          />
        ))}
      </div>
    </FeaturedGamesWrapper>
  );
}
