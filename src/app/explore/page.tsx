import ExploreFilterGames from "@/components/ExploreFilterGames";

export default async function Explore() {
  return (
    <section className="mt-25 flex flex-col gap-5 px-3 text-2xl font-bold">
      <h1 className="text-3xl leading-none font-black">
        <div className="flex items-center gap-1">
          <span className="inline-block bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
            Explore{" "}
          </span>
          <span className="animate-gradient inline-block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Games
          </span>
        </div>
      </h1>

      <h2 className="text-sm leading-relaxed text-white/70">
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
    </section>
  );
}
