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

const ariaLabels: Record<string, string> = {
  playing: "Currently playing",
  owned: "Owned",
  beaten: "Completed",
  toplay: "Want to play",
  dropped: "Dropped",
  yet: "Want to play",
};

export default function PlayerActivity({
  singleGameAddedByStatus,
}: PlayerActivityProps) {
  return (
    <div
      className="grid w-full grid-cols-2 items-center gap-2 md:grid-cols-3 md:gap-3 lg:gap-4 xl:gap-5"
      role="list"
      aria-label="Player activity statistics"
    >
      {Object.entries(singleGameAddedByStatus).map(([key, value], index) => (
        <div
          key={`${key}-${index}`}
          className="group hover:border-blue-neon/20 flex h-full min-h-[90px] w-full cursor-pointer flex-col gap-1 rounded-xl border border-transparent bg-white/8 p-3 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-lg hover:shadow-blue-500/10 md:gap-2 md:rounded-2xl md:p-4 lg:p-5 xl:p-6"
          role="listitem"
        >
          <p
            className="text-xs text-white/60 transition-colors duration-300 group-hover:text-white/80 md:text-sm lg:text-base"
            id={`activity-label-${key}`}
          >
            <span aria-hidden="true">{labels[key]}</span>
            <span className="sr-only">{ariaLabels[key]}</span>
          </p>
          <p
            className="group-hover:text-blue-neon-bright text-lg font-bold text-white transition-all duration-300 md:text-xl lg:text-2xl xl:text-3xl"
            aria-labelledby={`activity-label-${key}`}
          >
            <span className="sr-only">{value.toLocaleString()} players</span>
            <span aria-hidden="true">{value.toLocaleString()}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
