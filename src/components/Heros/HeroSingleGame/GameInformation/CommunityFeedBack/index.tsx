import { Rating } from "@/@types/SingleGameTypes";

interface CommunityFeedBackProps {
  singleGameCommunityFeedback: Rating[];
}
export default function CommunityFeedBack({
  singleGameCommunityFeedback,
}: CommunityFeedBackProps) {
  const votesCount = singleGameCommunityFeedback.reduce(
    (acc, rating) => acc + rating.count,
    0,
  );

  return (
    <div
      className="flex w-full flex-col gap-3 rounded-2xl bg-white/8 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 md:gap-4 md:rounded-3xl md:p-6 lg:p-8 xl:p-10"
      role="region"
      aria-label="Community ratings breakdown"
    >
      <div role="list" className="flex flex-col gap-5">
        {singleGameCommunityFeedback.map((rating) => (
          <div
            key={rating.id}
            className="group space-y-2 transition-all duration-300 hover:scale-[1.02] md:space-y-3"
            role="listitem"
          >
            <div className="flex items-center justify-between">
              <span
                className="text-sm font-medium text-white/90 capitalize transition-all duration-300 group-hover:text-white md:text-base lg:text-lg xl:text-xl"
                id={`rating-label-${rating.id}`}
              >
                <span aria-hidden="true">
                  {rating.title === "exceptional" && "🌟 "}
                  {rating.title === "recommended" && "👍 "}
                  {rating.title === "meh" && "😐 "}
                  {rating.title === "skip" && "👎 "}
                </span>
                {rating.title}
              </span>
              <span
                className="text-xs text-white/60 transition-all duration-300 group-hover:text-white/80 md:text-sm lg:text-base"
                aria-label={`${rating.count.toLocaleString()} votes, ${rating.percent.toFixed(1)} percent`}
              >
                <span aria-hidden="true">
                  {rating.count.toLocaleString()} ({rating.percent.toFixed(1)}%)
                </span>
              </span>
            </div>
            <div
              className="h-2 w-full overflow-hidden rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/15 md:h-2.5 lg:h-3"
              role="progressbar"
              aria-labelledby={`rating-label-${rating.id}`}
              aria-valuenow={rating.percent}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className={`h-full transition-all duration-500 group-hover:shadow-lg ${
                  rating.title === "exceptional"
                    ? "bg-green-500 group-hover:bg-green-400 group-hover:shadow-green-500/50"
                    : rating.title === "recommended"
                      ? "bg-blue-500 group-hover:bg-blue-400 group-hover:shadow-blue-500/50"
                      : rating.title === "meh"
                        ? "bg-yellow-500 group-hover:bg-yellow-400 group-hover:shadow-yellow-500/50"
                        : "bg-red-500 group-hover:bg-red-400 group-hover:shadow-red-500/50"
                }`}
                style={{ width: `${rating.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 border-t border-white/10 pt-3 transition-all duration-300 hover:border-white/20 md:mt-4 md:pt-4 lg:mt-5 lg:pt-5">
        <span
          className="text-xs text-white/50 transition-colors duration-300 hover:text-white/70 md:text-sm lg:text-base"
          role="status"
        >
          Based on {votesCount.toLocaleString()} total ratings
        </span>
      </div>
    </div>
  );
}
