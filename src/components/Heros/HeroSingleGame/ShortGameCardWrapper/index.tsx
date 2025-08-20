"use client";
import {
  GenresType,
  ParentPlatformsType,
  SingleGameType,
} from "@/@types/SingleGameTypes";
import GenresCard from "@/components/PlatformCard";
import { usePressStart } from "@/store/usePressStart";
import ShortGameCard from "./ShortGameCard";

interface ShortGameCardWrapperProps {
  singleGameData: SingleGameType;
}

export default function ShortGameCardWrapper({
  singleGameData,
}: ShortGameCardWrapperProps) {
  const { isPressStart } = usePressStart();

  return (
    <div
      className={`bg-blue-dark/80 flex h-70 w-full flex-col gap-5 rounded-[3px] transition-all duration-1000 ease-in-out ${isPressStart ? "opacity-100" : "opacity-0"} `}
    >
      <ShortGameCard
        metacritic={singleGameData.metacritic}
        metacritic_url={singleGameData.metacritic_url}
        genres={singleGameData.genres}
        parent_platforms={singleGameData.parent_platforms}
      />
    </div>
  );
}
