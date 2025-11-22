"use client";
import { SingleGameType } from "@/@types/SingleGameTypes";
import MetacriticCard from "./MetacriticCard";
import { usePressStart } from "@/store/usePressStart";
import { Building2, CalendarDays, Clock, Trophy, Users } from "lucide-react";
import PlatformCard from "@/components/PlatformCard";

interface SingleGameProps {
  singleGameData: SingleGameType;
}

export default function InformationGame({ singleGameData }: SingleGameProps) {
  const { isPressStart } = usePressStart();

  const esrbRatingColor: Record<string, string> = {
    Teen: "border-yellow-500/30 bg-yellow-500/20 text-yellow-400",
    "Everyone 10+": "border-blue-500/30 bg-blue-500/20 text-blue-400",
    Mature: "border-red-500/30 bg-red-500/20 text-red-400",
  };

  const dataReleased = new Date(singleGameData.released);
  const formatDataReleased = dataReleased.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (!isPressStart) return null;

  return (
    <>
      <h1 className="max-w-full text-[2rem] leading-tight font-extrabold break-words">
        {singleGameData.name}
      </h1>
      <div className="flex h-full w-full flex-col items-center justify-between">
        {/* RATING AND RELEASE */}
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-3">
            <MetacriticCard
              metacritic={singleGameData.metacritic}
              metacritic_url={singleGameData.metacritic_url}
            />
            <div className="flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 backdrop-blur-xl">
              <div>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-[1rem] ${
                      i < Math.round(singleGameData.rating)
                        ? "text-yellow-400"
                        : "text-white/20"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-[0.7rem] text-white/70">
                {singleGameData.rating}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-white/8 px-2.5 py-1.5 backdrop-blur-xl">
            <CalendarDays className="h-3.5 w-3.5 text-white/70" />
            <span className="text-[0.7rem] text-white/70">
              {formatDataReleased}
            </span>
          </div>
        </div>

        {/* TIME AVG - PLAYERS - ACHIEVEMENTS -ESRB */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-white/8 px-2.5 py-1.5 backdrop-blur-xl">
            <Clock className="text-blue-neon h-3.5 w-3.5" />
            <span className="text-[0.7rem] text-white/70">
              {singleGameData.playtime}h avg
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/8 px-2.5 py-1.5 backdrop-blur-xl">
            <Users className="text-blue-neon h-3.5 w-3.5" />
            <span className="text-[0.7rem] text-white/70">
              {singleGameData.added.toLocaleString()} players
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/8 px-2.5 py-1.5 backdrop-blur-xl">
            <Trophy className="h-3.5 w-3.5 text-yellow-500" />
            <span className="text-[0.7rem] text-white/70">
              {singleGameData.achievements_count} achievements
            </span>
          </div>
        </div>

        {singleGameData.esrb_rating && (
          <div
            className={`${esrbRatingColor[singleGameData.esrb_rating.name]} rounded-full px-2.5 py-1.5 text-[0.7rem] backdrop-blur-xl`}
          >
            <span>{singleGameData.esrb_rating.name}</span>
          </div>
        )}

        {/* PLATFORMS AND GENRES */}
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {singleGameData.parent_platforms.map((platform) => (
              <PlatformCard
                key={platform.platform.id}
                platform={platform.platform}
                TailwindHeight="h-10"
                TailwindWidth="w-10"
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {singleGameData.genres.map((genre) => (
              <div
                key={genre.id}
                className="flex h-8 items-center justify-center rounded-full bg-white/8 p-2.5 text-[0.8rem] backdrop-blur-xl"
              >
                {genre.name}
              </div>
            ))}
          </div>
        </div>

        {/* DEVELOPER AND PUBLISHER */}
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Building2 className="h-4 w-4 text-white/70" />
            <span className="text-[0.8rem] text-white/70">
              {singleGameData.developers[0]?.name || "Unknown"}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-[0.6rem] text-white/70">Published by:</span>
            <span className="text-[0.6rem] text-white/70">
              {singleGameData.publishers[0]?.name || "Unknown"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
