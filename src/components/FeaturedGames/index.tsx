import CardFeaturedGames from "./CardFeaturedGames";
import FeaturedGamesWrapper from "./FeaturedGamesWrapper";
import { FeaturedGamesType } from "@/@types/FeaturedGamesType";

interface FeaturedGamesProps {
  FeaturedGamesData: FeaturedGamesType[];
}

export default function FeaturedGames({
  FeaturedGamesData,
}: FeaturedGamesProps) {
  return (
    <FeaturedGamesWrapper>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 md:w-16" />
          <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-[1.4rem] font-bold text-transparent md:text-[2rem] lg:text-[2.4rem] xl:text-[2.8rem]">
            Featured Games
          </h2>
        </div>
        <p className="max-w-[600px] text-[0.85rem] text-white/60 md:text-[1rem] lg:text-[1.1rem]">
          Discover handpicked games that are trending right now in the gaming
          community
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-6">
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
