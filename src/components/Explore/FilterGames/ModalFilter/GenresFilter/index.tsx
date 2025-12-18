import { GenrerArrayType } from "@/@types/GenresType";
import { useActiveFilter } from "@/store/useActiveFilter";
import { Check } from "lucide-react";

const genreIcons: Record<string, string> = {
  Action: "⚔️",
  Indie: "💎",
  Adventure: "🗺️",
  RPG: "🗡️",
  Strategy: "♟️",
  Shooter: "🔫",
  Casual: "🎮",
  Simulation: "🎲",
  Puzzle: "🧩",
  Arcade: "🕹️",
  Platformer: "🏃",
  "Massively Multiplayer": "🌐",
  Racing: "🏎️",
  Sports: "⚽",
  Fighting: "🥊",
  Family: "👨‍👩‍👧‍👦",
  "Board Games": "🎯",
  Card: "🃏",
  Educational: "📚",
};

interface GenrerFilterProps {
  genrerList: GenrerArrayType[];
}

export default function GernesFilter({ genrerList }: GenrerFilterProps) {
  const genrerSelected = useActiveFilter((state) => state.genresSelected);
  const handleToggleGenres = useActiveFilter(
    (state) => state.handleToggleGenres,
  );

  const isGenrerSelected = (idGenrer: number): boolean => {
    const hasGenrer = genrerSelected.find(
      (genrerSelect) => genrerSelect.idGenrer === idGenrer,
    );
    return Boolean(hasGenrer);
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-500/10 text-xl leading-none">
          ⭐
        </div>
        <span className="text-base font-bold text-white">Genres</span>
      </div>

      <div className="flex flex-col gap-2">
        {genrerList.map((genre) => {
          const isSelected = isGenrerSelected(genre.idGenrer);

          return (
            <button
              key={genre.idGenrer}
              onClick={() =>
                handleToggleGenres(genre.idGenrer, genre.nameGenrer)
              }
              className={`group flex cursor-pointer items-center justify-between gap-2 rounded-full border-2 px-4 py-2 text-[0.8rem] backdrop-blur-3xl transition-all duration-300 ${
                isSelected
                  ? "border-cyan-400 text-white"
                  : "border-slate-700/50 bg-slate-800/30 text-slate-300 hover:border-slate-600 hover:bg-slate-700/30"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base transition-transform group-hover:scale-110">
                  {genreIcons[genre.nameGenrer] || "🎮"}
                </span>
                <span>{genre.nameGenrer}</span>
              </div>

              {isSelected && <Check className="h-4 w-4 text-cyan-400" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
