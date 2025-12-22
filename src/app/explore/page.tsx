import ExploreFilterGames from "@/components/Explore/FilterGames";
import GamesList from "@/components/Explore/GameList";
import { Footer } from "@/components/Footer";
import { getListFilteredGames } from "@/services/api";

export default async function Explore() {
  const inicialDataGames = await getListFilteredGames();

  return (
    <section className="flex flex-col gap-5 px-3 pt-25 text-2xl font-bold xl:pt-15">
      <h1 className="text-2xl leading-none font-black sm:text-3xl md:text-4xl lg:text-5xl">
        <div className="flex items-center gap-1">
          <span className="inline-block bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
            Explore{" "}
          </span>
          <span className="animate-gradient inline-block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Games
          </span>
        </div>
      </h1>

      <h2 className="text-xs leading-relaxed text-white/70 sm:text-sm md:text-base">
        Discover your next gaming adventure from{" "}
        <span className="relative inline-block">
          <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text font-bold text-transparent">
            thousands
          </span>
          <span className="absolute right-0 bottom-0 left-0 h-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-sm" />
        </span>{" "}
        of incredible titles
      </h2>

      <ExploreFilterGames />
      <GamesList inicialData={inicialDataGames} />
      <Footer />
    </section>
  );
}
