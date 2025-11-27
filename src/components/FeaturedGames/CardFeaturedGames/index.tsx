"use client";

import BaseImage from "@/components/BaseImage";
import { useState } from "react";
import FilledButton from "@/components/Button/FilledButton";
import TagsWrapper from "../Tags/TagsWrapper";
import Link from "next/link";
import { MetacriticScoreColor } from "@/utils/Metacritic/MetacriticScoreColor";
import { Tag } from "@/@types/SingleGameTypes";

interface CardFeaturedGamesProps {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  metacritic: number;
  tags: Tag[];
  fullWidth?: boolean;
}

export default function CardFeaturedGames({
  slug,
  name,
  background_image,
  metacritic,
  tags,
  fullWidth,
}: CardFeaturedGamesProps) {
  const [isOpen, setIsOpen] = useState(false);
  const metacriticClassBackground = MetacriticScoreColor(metacritic);
  const isMetacriticRating = metacritic > 0;

  return (
    <div
      className={`group ${fullWidth && "md:col-span-2"} relative h-[420px] w-full overflow-hidden rounded-xl border-2 border-purple-500/30 bg-gradient-to-b from-purple-900/20 to-blue-900/20 backdrop-blur-sm transition-all duration-500 hover:border-purple-400/50 md:h-[450px]`}
    >
      {/* Enhanced gradient overlay */}
      <Link
        prefetch
        href={`/game/${slug}`}
        className="absolute top-0 left-0 z-10 h-full w-full rounded-xl transition-all duration-500"
      >
        <div className="flex h-full flex-col justify-between p-4 md:p-5">
          {/* Title with better visibility */}
          <div className="flex items-start justify-between">
            <p className="line-clamp-2 max-w-[85%] text-[1.05rem] leading-tight font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] md:text-[1.2rem] lg:text-[1.3rem]">
              {name}
            </p>

            {/* Trending badge */}
            <div className="inline-flex flex-shrink-0 items-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-2.5 py-1 text-[0.65rem] font-bold whitespace-nowrap shadow-[0_0_15px_rgba(251,146,60,0.6)] md:text-[0.7rem]">
              🔥 HOT
            </div>
          </div>
        </div>
      </Link>

      <TagsWrapper isOpen={isOpen} tags={tags} />

      {/* Enhanced image with overlay */}
      <div className="absolute inset-0 -z-10">
        <BaseImage
          src={background_image}
          alt="Game"
          extraClassImage="h-full w-full rounded-xl object-cover group-hover:scale-105 transition-transform duration-700"
          extraClassWrapper="relative h-full"
        />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* Enhanced buttons section */}
      <div
        className={`absolute ${isOpen ? "bottom-36 md:bottom-32" : "bottom-4"} left-1/2 z-31 flex h-9 w-[160px] -translate-x-1/2 items-center transition-all duration-500 md:h-10 md:w-[180px]`}
      >
        <FilledButton
          content={isOpen ? "Hide Tags" : "Show Tags"}
          extraClass="items-center justify-center text-[0.8rem] md:text-[0.85rem] font-semibold shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          ButtonType="button"
          href="#"
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* Enhanced Metacritic badge */}
        {isMetacriticRating && (
          <div
            className={`absolute -right-13 flex h-9 w-9 items-center justify-center rounded-lg md:-right-18 md:h-10 md:w-10 ${metacriticClassBackground} border-2 border-white/20 text-[0.85rem] font-bold shadow-[0_0_20px_rgba(0,0,0,0.5)] md:text-[0.9rem]`}
          >
            <p>{metacritic}</p>
          </div>
        )}
      </div>
    </div>
  );
}
