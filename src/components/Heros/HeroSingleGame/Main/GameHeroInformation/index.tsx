import { SingleGameType } from "@/@types/SingleGameTypes";
import MetacriticCard from "../../GameInformation/MetacriticCard";
import { Building2, CalendarDays, Clock, Trophy, Users } from "lucide-react";
import PlatformCard from "@/components/PlatformCard";
import { GameHeroWrapper } from "../GameHeroWrapper";
import { FadeIn } from "@/components/AnimationMotion/Fadein";
import { ScaleIn } from "@/components/AnimationMotion/Scalein";

interface SingleGameProps {
  singleGameData: SingleGameType;
}

export default function GameHeroInformation({
  singleGameData,
}: SingleGameProps) {
  const esrbRatingColor: Record<string, string> = {
    Teen: "border-yellow-500/30 bg-yellow-500/20 text-yellow-400 hover:border-yellow-400/50 hover:bg-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/20",
    "Everyone 10+":
      "border-blue-500/30 bg-blue-500/20 text-blue-400 hover:border-blue-400/50 hover:bg-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20",
    Mature:
      "border-red-500/30 bg-red-500/20 text-red-400 hover:border-red-400/50 hover:bg-red-500/30 hover:shadow-lg hover:shadow-red-500/20",
  };

  const dataReleased = new Date(singleGameData.released);
  const formatDataReleased = dataReleased.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <GameHeroWrapper>
      <FadeIn delay={0}>
        <h1 className="hover:text-blue-neon-bright max-w-full cursor-default text-3xl leading-tight font-extrabold break-words transition-colors duration-300 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {singleGameData.name}
        </h1>
      </FadeIn>

      <div className="flex h-full w-full flex-col items-center justify-between lg:gap-3">
        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-3">
              {singleGameData.metacritic && (
                <MetacriticCard
                  metacritic={singleGameData.metacritic}
                  metacritic_url={singleGameData.metacritic_url}
                />
              )}
              <div className="group flex cursor-pointer items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-lg hover:shadow-yellow-500/10">
                <div>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-base transition-all duration-300 group-hover:scale-110 md:text-lg lg:text-xl ${
                        i < Math.round(singleGameData.rating)
                          ? "text-yellow-400 group-hover:text-yellow-300"
                          : "text-white/20 group-hover:text-white/30"
                      }`}
                      style={{
                        display: "inline-block",
                        transitionDelay: `${i * 50}ms`,
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xs text-white/70 transition-colors duration-300 group-hover:text-white/90 md:text-sm lg:text-base">
                  {singleGameData.rating}
                </span>
              </div>
            </div>
            <div className="group flex cursor-pointer items-center gap-3 rounded-full bg-white/8 px-2.5 py-1.5 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-md">
              <CalendarDays className="group-hover:text-blue-neon-bright h-3.5 w-3.5 text-white/70 transition-all duration-300 group-hover:rotate-12 md:h-4.5 md:w-4.5" />
              <span className="text-xs text-white/70 transition-colors duration-300 group-hover:text-white/90 md:text-sm">
                {formatDataReleased}
              </span>
            </div>
          </div>
        </FadeIn>

        <ScaleIn delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="group flex cursor-pointer items-center gap-2 rounded-full bg-white/8 px-2.5 py-1.5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white/15 hover:shadow-md hover:shadow-blue-500/20">
              <Clock className="text-blue-neon group-hover:text-blue-neon-bright h-3.5 w-3.5 transition-all duration-500 group-hover:rotate-180 md:h-4 md:w-4" />
              <span className="text-xs text-white/70 transition-colors duration-300 group-hover:text-white/90 md:text-sm">
                {singleGameData.playtime}h avg
              </span>
            </div>
            <div className="group flex cursor-pointer items-center gap-2 rounded-full bg-white/8 px-2.5 py-1.5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white/15 hover:shadow-md hover:shadow-blue-500/20">
              <Users className="text-blue-neon group-hover:text-blue-neon-bright h-3.5 w-3.5 transition-all duration-300 group-hover:scale-125 md:h-4 md:w-4" />
              <span className="text-xs text-white/70 transition-colors duration-300 group-hover:text-white/90 md:text-sm">
                {singleGameData.added.toLocaleString()} players
              </span>
            </div>
            <div className="group flex cursor-pointer items-center gap-2 rounded-full bg-white/8 px-2.5 py-1.5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white/15 hover:shadow-md hover:shadow-yellow-500/20">
              <Trophy className="h-3.5 w-3.5 text-yellow-500 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:text-yellow-400 md:h-4 md:w-4" />
              <span className="text-xs text-white/70 transition-colors duration-300 group-hover:text-white/90 md:text-sm">
                {singleGameData.parent_achievements_count} achievements
              </span>
            </div>
          </div>
        </ScaleIn>

        {singleGameData.esrb_rating && (
          <FadeIn delay={0.6}>
            <div
              className={`${esrbRatingColor[singleGameData.esrb_rating.name]} cursor-pointer rounded-full border px-2.5 py-1.5 text-xs backdrop-blur-xl transition-all duration-300 hover:scale-110 md:text-sm`}
            >
              <span>{singleGameData.esrb_rating.name}</span>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.8}>
          <div className="flex w-full flex-col items-center justify-center gap-5">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {singleGameData.parent_platforms.map((platform) => (
                <div
                  key={platform.platform.id}
                  className="transition-all duration-300 hover:scale-125 hover:rotate-3"
                >
                  <PlatformCard
                    platform={platform.platform}
                    TailwindHeight="h-10 md:h-12 lg:h-14"
                    TailwindWidth="w-10 md:w-12 lg:w-14"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {singleGameData.genres.map((genre) => (
                <div
                  key={genre.id}
                  className="group hover:bg-blue-neon/20 hover:text-blue-neon-bright hover:border-blue-neon/30 flex h-8 cursor-pointer items-center justify-center rounded-full border border-transparent bg-white/8 p-2.5 text-xs backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 md:h-9 md:text-sm"
                >
                  {genre.name}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="group flex cursor-pointer flex-wrap items-center justify-center gap-3 transition-all duration-300 hover:scale-105">
              <Building2 className="group-hover:text-blue-neon-bright h-3.5 w-3.5 text-white/70 transition-all duration-300 group-hover:scale-110 md:h-4.5 md:w-4.5" />
              <span className="text-sm text-white/70 transition-colors duration-300 group-hover:text-white md:text-base">
                {singleGameData.developers[0]?.name || "Unknown"}
              </span>
            </div>
            <div className="flex cursor-pointer flex-wrap items-center justify-center gap-3 transition-all duration-300 hover:scale-105">
              <span className="text-xs text-white/70 transition-colors duration-300 hover:text-white/90 md:text-sm">
                Published by:
              </span>
              <span className="hover:text-blue-neon-bright text-xs text-white/70 transition-colors duration-300 md:text-sm">
                {singleGameData.publishers[0]?.name || "Unknown"}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </GameHeroWrapper>
  );
}
