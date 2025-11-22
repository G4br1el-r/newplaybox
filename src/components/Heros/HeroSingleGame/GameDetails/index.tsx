import { SingleGameType } from "@/@types/SingleGameTypes";
import { Globe, MessageCircle, Store } from "lucide-react";
import { SiEpicgames, SiGogdotcom, SiNintendoswitch } from "react-icons/si";
import {
  FaApple,
  FaGooglePlay,
  FaPlaystation,
  FaSteam,
  FaXbox,
} from "react-icons/fa";
import { SingleGameScreenshotsType } from "@/@types/SingleGameScreenshotsType";
import Screenshots from "./Screenshots";
import { ListNameForSameSeries } from "@/@types/ListNameForSameSeries";
import CarrouselSameSeriesGame from "./CarrouselSameSeriesGame";

interface GameDetailsProps {
  singleGameData: SingleGameType;
  singleGameScreenshotsData: SingleGameScreenshotsType;
  listGameForSameSeries: ListNameForSameSeries;
}

export default function GameDetails({
  singleGameData,
  singleGameScreenshotsData,
  listGameForSameSeries,
}: GameDetailsProps) {
  const votesCount = singleGameData.ratings.reduce(
    (acc, rating) => acc + rating.count,
    0,
  );

  const labels: Record<string, string> = {
    playing: "🎮 Playing",
    owned: "💎 Owned",
    beaten: "✅ Completed",
    toplay: "📋 To Play",
    dropped: "❌ Dropped",
    yet: "👀 Want to Play",
  };

  const getStoreIcon = (storeName: string) => {
    const name = storeName.toLowerCase();

    if (name.includes("steam"))
      return <FaSteam className="text-blue-neon-bright h-4 w-4" />;
    if (name.includes("playstation"))
      return <FaPlaystation className="text-blue-neon-bright h-4 w-4" />;
    if (name.includes("xbox"))
      return <FaXbox className="text-blue-neon-bright h-4 w-4" />;
    if (name.includes("epic"))
      return <SiEpicgames className="text-blue-neon-bright h-4 w-4" />;
    if (name.includes("nintendo"))
      return <SiNintendoswitch className="text-blue-neon-bright h-4 w-4" />;
    if (name.includes("gog"))
      return <SiGogdotcom className="text-blue-neon-bright h-4 w-4" />;
    if (name.includes("google") || name.includes("play"))
      return <FaGooglePlay className="text-blue-neon-bright h-4 w-4" />;
    if (name.includes("apple") || name.includes("app store"))
      return <FaApple className="text-blue-neon-bright h-4 w-4" />;

    return <Store className="text-blue-neon-bright h-4 w-4" />;
  };

  return (
    <section className="flex h-full w-full flex-col gap-15">
      {/* TAGS */}
      <div className="flex flex-col gap-3">
        <div className="flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl">
          <div className="bg-blue-neon-bright h-1 w-1 rounded-full" />
          <span className="text-[0.6rem] text-white/70">Game Features</span>
        </div>
        <p className="text-[1.2rem] font-bold text-white">Tags</p>
        <div className="flex flex-wrap items-center gap-2">
          {singleGameData.tags.map((tag) => (
            <div
              key={tag.id}
              className="bg-blue-neon/10 border-blue-neon/20 text-blue-neon-bright rounded-full border px-2 py-0.5 text-[0.65rem] backdrop-blur-xl"
            >
              {tag.name}
            </div>
          ))}
        </div>
      </div>
      {/* SCREENSHOTS */}
      <Screenshots
        name={singleGameData.name}
        singleGameScreenshotsData={singleGameScreenshotsData}
      />
      {/* COMMUNITY FEEDBACK */}
      {singleGameData.ratings && singleGameData.ratings.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl">
            <div className="bg-blue-neon-bright h-1 w-1 rounded-full" />
            <span className="text-[0.6rem] text-white/70">Player Ratings</span>
          </div>
          <p className="text-[1.2rem] font-bold text-white">
            Community Feedback
          </p>
          <div className="flex flex-col gap-3 rounded-2xl bg-white/8 p-4 backdrop-blur-xl">
            {singleGameData.ratings.map((rating) => (
              <div key={rating.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[0.8rem] font-medium text-white/90 capitalize">
                    {rating.title === "exceptional" && "🌟 "}
                    {rating.title === "recommended" && "👍 "}
                    {rating.title === "meh" && "😐 "}
                    {rating.title === "skip" && "👎 "}
                    {rating.title}
                  </span>
                  <span className="text-[0.7rem] text-white/60">
                    {rating.count.toLocaleString()} ({rating.percent.toFixed(1)}
                    %)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full transition-all duration-500 ${
                      rating.title === "exceptional"
                        ? "bg-green-500"
                        : rating.title === "recommended"
                          ? "bg-blue-500"
                          : rating.title === "meh"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                    }`}
                    style={{ width: `${rating.percent}%` }}
                  />
                </div>
              </div>
            ))}

            <div className="mt-2 border-t border-white/10 pt-3">
              <span className="text-[0.7rem] text-white/50">
                Based on {votesCount.toLocaleString()} total ratings
              </span>
            </div>
          </div>
        </div>
      )}
      {/* PLAYER ACTIVITY */}
      {singleGameData.added_by_status && (
        <div className="flex flex-col gap-3">
          <div className="flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl">
            <div className="bg-blue-neon-bright h-1 w-1 rounded-full" />
            <span className="text-[0.6rem] text-white/70">Community Stats</span>
          </div>
          <p className="text-[1.2rem] font-bold text-white">Player Activity</p>
          <div className="grid grid-cols-2 items-center gap-2">
            {Object.entries(singleGameData.added_by_status).map(
              ([key, value], index) => (
                <div
                  key={`${key}-${index}`} // ← Garante unicidade
                  className="flex flex-col gap-1 rounded-xl bg-white/8 p-3 backdrop-blur-xl"
                >
                  <p className="text-[0.65rem] text-white/60">{labels[key]}</p>
                  <p className="text-[1.1rem] font-bold text-white">
                    {value.toLocaleString()}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      )}
      {/* CONNECT & EXPLORE */}{" "}
      <div className="flex flex-col gap-3">
        <div className="flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl">
          <div className="bg-blue-neon-bright h-1 w-1 rounded-full" />
          <span className="text-[0.6rem] text-white/70">External Links</span>
        </div>
        <p className="text-[1.2rem] font-bold text-white">Connect & Explore</p>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex w-full items-center justify-between rounded-xl bg-white/8 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Globe className="text-blue-neon-bright h-5 w-5" />
              <span className="text-[0.8rem]">
                <a
                  href={singleGameData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Website
                </a>
              </span>
            </div>
            <span className="text-[0.6rem] text-white/50">→</span>
          </div>
          <div className="flex w-full items-center justify-between rounded-xl bg-white/8 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-orange-400" />
              <div className="flex flex-col">
                <span className="text-[0.8rem]">
                  <a
                    href={singleGameData.reddit_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reddit Community
                  </a>
                </span>
                <span className="text-[0.6rem] text-white/20">
                  {singleGameData.reddit_count.toLocaleString()} members
                </span>
              </div>
            </div>
            <span className="text-[0.6rem] text-white/50">→</span>
          </div>
        </div>
      </div>
      {/* AVAILABLE AT */}
      {singleGameData.stores && singleGameData.stores.length > 0 && (
        <div className="mb-10 flex flex-col gap-3">
          <div className="flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl">
            <div className="bg-blue-neon-bright h-1 w-1 rounded-full" />
            <span className="text-[0.6rem] text-white/70">Where to Buy</span>
          </div>
          <p className="text-[1.2rem] font-bold text-white">Available At</p>

          <div className="grid grid-cols-2 gap-2">
            {singleGameData.stores.map((store) => (
              <a
                key={store.id}
                href={store.url || `https://${store.store.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white/8 p-3 backdrop-blur-xl transition-all hover:bg-white/12"
              >
                {getStoreIcon(store.store.name)}
                <span className="flex-1 text-[0.6rem] text-white">
                  {store.store.name}
                </span>
                <span className="text-[0.6rem] text-white/50">→</span>
              </a>
            ))}
          </div>
        </div>
      )}
      {/* Games From The Series */}
      <CarrouselSameSeriesGame listGameForSameSeries={listGameForSameSeries} />
    </section>
  );
}
