import { handleStarsMetacritic } from "@/utils/Metacritic/handleStarsMetacritic";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";

interface MetacriticCardProps {
  metacritic: number;
  metacritic_url: string;
}

export default function MetacriticCard({
  metacritic,
  metacritic_url,
}: MetacriticCardProps) {
  const { starsRatingRender } = handleStarsMetacritic(metacritic);
  const isMetacriticUrl = Boolean(metacritic_url);

  if (isMetacriticUrl) {
    return (
      <a
        href={metacritic_url}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-500 ease-in-out hover:scale-105"
        aria-label={`Metacritic score: ${metacritic} out of 100. Opens Metacritic page in new tab`}
      >
        <div className="flex items-center justify-center gap-3">
          <div
            className="flex items-center justify-center rounded-[10px] bg-green-500 p-1.5 md:h-12 md:w-12"
            role="img"
            aria-label={`${metacritic}`}
          >
            <span aria-hidden="true">{metacritic}</span>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div
      className="pointer-events-none cursor-not-allowed opacity-50"
      role="img"
      aria-label={`Metacritic score: ${metacritic} out of 100`}
    >
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center justify-center rounded-[10px] bg-green-500 p-1.5 md:h-12 md:w-12">
          <span aria-hidden="true">{metacritic}</span>
        </div>
      </div>
    </div>
  );
}
