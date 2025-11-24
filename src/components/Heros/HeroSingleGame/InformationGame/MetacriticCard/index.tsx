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
  return (
    <a
      href={isMetacriticUrl ? metacritic_url : ""}
      className="pointer-events-none cursor-not-allowed opacity-100 transition-all duration-500 ease-in-out"
    >
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center justify-center rounded-[10px] bg-green-500 p-1.5 md:h-12 md:w-12">
          {metacritic}
        </div>
        {/* <div className="flex items-center gap-1">
          {starsRatingRender.map((star, index) => {
            if (star === "full") {
              return <FaStar key={index} className="h-5 w-5 text-yellow-500" />;
            } else if (star === "half") {
              return (
                <FaStarHalfAlt
                  key={index}
                  className="h-5 w-5 text-yellow-500"
                />
              );
            } else {
              return (
                <FaRegStar key={index} className="h-5 w-5 text-gray-500" />
              );
            }
          })}
        </div> */}
      </div>
    </a>
  );
}
