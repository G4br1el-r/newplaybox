import { useActiveFilter } from "@/store/useActiveFilter";

export default function RatingFilter() {
  const ratingSelected = useActiveFilter((state) => state.ratingSelected);
  const handleRatingSelected = useActiveFilter(
    (state) => state.handleRatingSelected,
  );
  const percentage = (ratingSelected / 5) * 100;
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-yellow-500/10 text-xl leading-none">
          ⭐
        </div>
        <span className="text-base font-bold text-white">Minimum Rating</span>
      </div>

      <div className="space-y-4 rounded-xl border border-slate-700/50 bg-slate-800/30 p-1">
        <div className="relative">
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={ratingSelected}
            onChange={(e) => handleRatingSelected(Number(e.target.value))}
            className="h-3 w-full cursor-pointer appearance-none rounded-full bg-slate-700/50 focus:outline-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-gradient-to-r [&::-moz-range-thumb]:from-yellow-400 [&::-moz-range-thumb]:to-orange-400 [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:shadow-yellow-500/50 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-yellow-400 [&::-webkit-slider-thumb]:to-orange-400 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-yellow-500/50 [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
            style={{
              background: `linear-gradient(to right, rgb(234 179 8) 0%, rgb(251 146 60) ${percentage}%, rgb(51 65 85 / 0.5) ${percentage}%, rgb(51 65 85 / 0.5) 100%)`,
            }}
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-2">
          <span className="text-sm font-medium text-slate-400">
            {ratingSelected === 0 ? "Any rating" : "Minimum rating"}
          </span>

          <div className="flex min-h-[63px] w-full items-center gap-2 rounded-lg border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-yellow-500/5 px-4 py-2 shadow-lg shadow-yellow-500/10">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-lg transition-all duration-200 ${
                    i < Math.floor(ratingSelected)
                      ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
                      : i < ratingSelected
                        ? "text-yellow-400/50"
                        : "text-slate-600"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="ml-2 flex items-baseline gap-1 border-l border-yellow-500/30 pl-3">
              <span className="text-2xl font-bold text-yellow-400">
                {ratingSelected.toFixed(1)}
              </span>
              <span className="text-xs text-slate-400">/ 5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
