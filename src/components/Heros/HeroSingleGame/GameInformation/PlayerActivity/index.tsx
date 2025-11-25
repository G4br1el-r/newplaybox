import { AddedByStatus } from "@/@types/SingleGameTypes";

interface PlayerActivityProps {
  singleGameAddedByStatus: AddedByStatus;
}

const labels: Record<string, string> = {
  playing: "🎮 Playing",
  owned: "💎 Owned",
  beaten: "✅ Completed",
  toplay: "📋 To Play",
  dropped: "❌ Dropped",
  yet: "👀 Want to Play",
};
export default function PlayerActivity({
  singleGameAddedByStatus,
}: PlayerActivityProps) {
  return (
    <div className="grid w-full grid-cols-2 items-center gap-2 md:grid-cols-3 md:gap-3 lg:gap-4 xl:gap-5">
      {Object.entries(singleGameAddedByStatus).map(([key, value], index) => (
        <div
          key={`${key}-${index}`}
          className="group hover:border-blue-neon/20 flex cursor-pointer flex-col gap-1 rounded-xl border border-transparent bg-white/8 p-3 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-lg hover:shadow-blue-500/10 md:gap-2 md:rounded-2xl md:p-4 lg:p-5 xl:p-6"
        >
          <p className="text-[0.65rem] text-white/60 transition-colors duration-300 group-hover:text-white/80 md:text-[0.75rem] lg:text-[0.85rem] xl:text-base">
            {labels[key]}
          </p>
          <p className="group-hover:text-blue-neon-bright text-[1.1rem] font-bold text-white transition-all duration-300 md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem]">
            {value.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
