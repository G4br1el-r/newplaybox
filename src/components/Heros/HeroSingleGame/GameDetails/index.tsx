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
      return (
        <FaSteam className="text-blue-neon-bright h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
      );
    if (name.includes("playstation"))
      return (
        <FaPlaystation className="text-blue-neon-bright h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
      );
    if (name.includes("xbox"))
      return (
        <FaXbox className="text-blue-neon-bright h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
      );
    if (name.includes("epic"))
      return (
        <SiEpicgames className="text-blue-neon-bright h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
      );
    if (name.includes("nintendo"))
      return (
        <SiNintendoswitch className="text-blue-neon-bright h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
      );
    if (name.includes("gog"))
      return (
        <SiGogdotcom className="text-blue-neon-bright h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
      );
    if (name.includes("google") || name.includes("play"))
      return (
        <FaGooglePlay className="text-blue-neon-bright h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
      );
    if (name.includes("apple") || name.includes("app store"))
      return (
        <FaApple className="text-blue-neon-bright h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
      );

    return (
      <Store className="text-blue-neon-bright h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
    );
  };

  return (
    <section className="flex h-full w-full flex-col gap-15 md:gap-20 lg:gap-25">
      {/* TAGS */}
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
        <div className="group flex h-8 w-fit cursor-pointer items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-md md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
          <div className="bg-blue-neon-bright h-1 w-1 rounded-full transition-all duration-300 group-hover:animate-pulse md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
          <span className="text-[0.6rem] text-white/70 transition-colors duration-300 group-hover:text-white/90 md:text-[0.75rem] lg:text-[0.9rem] xl:text-base">
            Game Features
          </span>
        </div>
        <p className="hover:text-blue-neon-bright cursor-default text-[1.2rem] font-bold text-white transition-colors duration-300 md:text-[1.6rem] lg:text-[2rem] xl:text-[2.2rem]">
          Tags
        </p>
        <div className="flex flex-wrap items-center gap-2 md:gap-3 lg:gap-4">
          {singleGameData.tags.map((tag) => (
            <div
              key={tag.id}
              className="group border-blue-neon/20 bg-blue-neon/10 text-blue-neon-bright hover:bg-blue-neon/25 hover:border-blue-neon/40 cursor-pointer rounded-full border px-2 py-0.5 text-[0.65rem] backdrop-blur-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 md:px-3 md:py-1 md:text-[0.75rem] lg:px-4 lg:py-1.5 lg:text-[0.85rem] xl:text-base"
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
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
          <div className="group flex h-8 w-fit cursor-pointer items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-md md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
            <div className="bg-blue-neon-bright h-1 w-1 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:animate-pulse md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
            <span className="text-[0.6rem] text-white/70 transition-colors duration-300 group-hover:text-white/90 md:text-[0.75rem] lg:text-[0.9rem] xl:text-base">
              Player Ratings
            </span>
          </div>
          <p className="hover:text-blue-neon-bright cursor-default text-[1.2rem] font-bold text-white transition-colors duration-300 md:text-[1.6rem] lg:text-[2rem] xl:text-[2.2rem]">
            Community Feedback
          </p>
          <div className="flex flex-col gap-3 rounded-2xl bg-white/8 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 md:gap-4 md:rounded-3xl md:p-6 lg:p-8 xl:p-10">
            {singleGameData.ratings.map((rating) => (
              <div
                key={rating.id}
                className="group space-y-2 transition-all duration-300 hover:scale-[1.02] md:space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[0.8rem] font-medium text-white/90 capitalize transition-all duration-300 group-hover:text-white md:text-[0.95rem] lg:text-[1.1rem] xl:text-[1.2rem]">
                    {rating.title === "exceptional" && "🌟 "}
                    {rating.title === "recommended" && "👍 "}
                    {rating.title === "meh" && "😐 "}
                    {rating.title === "skip" && "👎 "}
                    {rating.title}
                  </span>
                  <span className="text-[0.7rem] text-white/60 transition-all duration-300 group-hover:text-white/80 md:text-[0.8rem] lg:text-[0.9rem]">
                    {rating.count.toLocaleString()} ({rating.percent.toFixed(1)}
                    %)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/15 md:h-2.5 lg:h-3">
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

            <div className="mt-2 border-t border-white/10 pt-3 transition-all duration-300 hover:border-white/20 md:mt-4 md:pt-4 lg:mt-5 lg:pt-5">
              <span className="text-[0.7rem] text-white/50 transition-colors duration-300 hover:text-white/70 md:text-[0.8rem] lg:text-[0.9rem]">
                Based on {votesCount.toLocaleString()} total ratings
              </span>
            </div>
          </div>
        </div>
      )}

      {/* PLAYER ACTIVITY */}
      {singleGameData.added_by_status && (
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
          <div className="group flex h-8 w-fit cursor-pointer items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-md md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
            <div className="bg-blue-neon-bright h-1 w-1 rounded-full transition-all duration-300 group-hover:animate-pulse md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
            <span className="text-[0.6rem] text-white/70 transition-colors duration-300 group-hover:text-white/90 md:text-[0.75rem] lg:text-[0.9rem] xl:text-base">
              Community Stats
            </span>
          </div>
          <p className="hover:text-blue-neon-bright cursor-default text-[1.2rem] font-bold text-white transition-colors duration-300 md:text-[1.6rem] lg:text-[2rem] xl:text-[2.2rem]">
            Player Activity
          </p>
          <div className="grid grid-cols-2 items-center gap-2 md:grid-cols-3 md:gap-3 lg:gap-4 xl:gap-5">
            {Object.entries(singleGameData.added_by_status).map(
              ([key, value], index) => (
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
              ),
            )}
          </div>
        </div>
      )}

      {/* CONNECT & EXPLORE */}
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
        <div className="group flex h-8 w-fit cursor-pointer items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-md md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
          <div className="bg-blue-neon-bright h-1 w-1 rounded-full transition-all duration-300 group-hover:animate-pulse md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
          <span className="text-[0.6rem] text-white/70 transition-colors duration-300 group-hover:text-white/90 md:text-[0.75rem] lg:text-[0.9rem] xl:text-base">
            External Links
          </span>
        </div>
        <p className="hover:text-blue-neon-bright cursor-default text-[1.2rem] font-bold text-white transition-colors duration-300 md:text-[1.6rem] lg:text-[2rem] xl:text-[2.2rem]">
          Connect & Explore
        </p>
        <div className="flex flex-wrap items-center gap-2 md:flex-nowrap md:gap-3 lg:gap-4">
          <div className="group flex w-full cursor-pointer items-center justify-between rounded-xl bg-white/8 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-lg hover:shadow-blue-500/10 md:h-16 md:rounded-2xl md:p-5 lg:h-20 lg:p-6">
            <div className="flex items-center gap-3 md:gap-4">
              <Globe className="text-blue-neon-bright h-5 w-5 transition-all duration-300 group-hover:rotate-180 md:h-6 md:w-6 lg:h-7 lg:w-7" />
              <span className="group-hover:text-blue-neon-bright text-[0.8rem] transition-colors duration-300 md:text-[0.95rem] lg:text-[1.1rem] xl:text-[1.2rem]">
                <a
                  href={singleGameData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Website
                </a>
              </span>
            </div>
            <span className="text-[0.6rem] text-white/50 md:text-[0.7rem] lg:text-[0.8rem]">
              →
            </span>
          </div>
          <div className="group flex w-full cursor-pointer items-center justify-between rounded-xl bg-white/8 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-lg hover:shadow-blue-500/10 md:h-16 md:rounded-2xl md:p-5 lg:h-20 lg:p-6">
            <div className="flex items-center gap-3 md:gap-4">
              <MessageCircle className="text-blue-neon-bright h-5 w-5 transition-all duration-300 group-hover:rotate-180 md:h-6 md:w-6 lg:h-7 lg:w-7" />
              <div className="flex flex-col">
                <span className="group-hover:text-blue-neon-bright text-[0.8rem] transition-colors duration-300 md:text-[0.95rem] lg:text-[1.1rem] xl:text-[1.2rem]">
                  <a
                    href={singleGameData.reddit_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reddit Community
                  </a>
                </span>
                <span className="text-[0.6rem] text-white/20 md:text-[0.7rem] lg:text-[0.8rem]">
                  {singleGameData.reddit_count.toLocaleString()} members
                </span>
              </div>
            </div>
            <span className="text-[0.6rem] text-white/50 md:text-[0.7rem] lg:text-[0.8rem]">
              →
            </span>
          </div>
        </div>
      </div>

      {/* AVAILABLE AT */}
      {singleGameData.stores && singleGameData.stores.length > 0 && (
        <div className="mb-2 flex flex-col gap-3 md:mb-4 md:gap-4 lg:mb-6 lg:gap-5">
          <div className="group flex h-8 w-fit cursor-pointer items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-md md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
            <div className="bg-blue-neon-bright h-1 w-1 rounded-full transition-all duration-300 group-hover:animate-pulse md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
            <span className="text-[0.6rem] text-white/70 transition-colors duration-300 group-hover:text-white/90 md:text-[0.75rem] lg:text-[0.9rem] xl:text-base">
              Where to Buy
            </span>
          </div>
          <p className="hover:text-blue-neon-bright cursor-default text-[1.2rem] font-bold text-white transition-colors duration-300 md:text-[1.6rem] lg:text-[2rem] xl:text-[2.2rem]">
            Available At
          </p>

          <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-3 lg:gap-4 xl:grid-cols-3">
            {singleGameData.stores.map((store) => (
              <a
                key={store.id}
                href={store.url || `https://${store.store.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:border-blue-neon/30 flex items-center gap-4 rounded-xl border border-transparent bg-white/8 p-3 backdrop-blur-xl transition-all duration-300 hover:bg-white/15 hover:shadow-lg hover:shadow-blue-500/20 md:h-16 md:gap-5 md:rounded-2xl md:p-4 lg:h-20 lg:p-5 xl:p-6"
              >
                <div className="transition-all duration-300 group-hover:rotate-12">
                  {getStoreIcon(store.store.name)}
                </div>
                <span className="group-hover:text-blue-neon-bright flex-1 text-[0.6rem] text-white transition-colors duration-300 md:text-[0.85rem] lg:text-[1rem] xl:text-[1.1rem]">
                  {store.store.name}
                </span>
                <span className="group-hover:text-blue-neon-bright text-[0.6rem] text-white/50 transition-all duration-300 group-hover:translate-x-2 md:text-[0.7rem] lg:text-[0.8rem]">
                  →
                </span>
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
