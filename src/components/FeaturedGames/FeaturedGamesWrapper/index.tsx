"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";

const AudioPlayer = dynamic(
  () => import("../AudioPlayer").then((mod) => ({ default: mod.AudioPlayer })),
  { ssr: false },
);

import type { AudioPlayerRef } from "../AudioPlayer";

interface FeaturedGamesWrapperProps {
  children: React.ReactNode;
}

export default function FeaturedGamesWrapper({
  children,
}: FeaturedGamesWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);
  const audioPlayerRef = useRef<AudioPlayerRef>(null);

  const handleClick = () => {
    if (!isOpen) {
      audioPlayerRef.current?.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section
        className={`relative flex flex-col gap-6 overflow-hidden px-3 pt-8 transition-all duration-700 ease-in-out md:gap-8 md:py-12 ${
          isOpen
            ? "max-h-[2500px] md:max-h-[1800px] xl:max-h-[1300px]"
            : "xs:max-h-[1450px] max-h-[1460px] md:max-h-[1120px] xl:max-h-[950px]"
        }`}
        aria-labelledby="featured-games-title"
      >
        <AudioPlayer ref={audioPlayerRef} src="/sounds/coin.wav" />

        {children}

        <div
          className={`from-blue-darkest/70 via-blue-darkest/95 to-blue-darkest xs:top-250 absolute left-0 z-10 w-full rounded-t-[10px] bg-gradient-to-b backdrop-blur-sm transition-all ease-in-out md:top-160 md:h-[485px] lg:top-165 xl:top-167 xl:h-[300px] ${
            isOpen
              ? "pointer-events-none translate-y-4 opacity-0 duration-100"
              : "pointer-events-auto top-255 h-[455px] translate-y-0 opacity-100 duration-2000"
          }`}
          aria-hidden="true"
        />
      </section>

      <div
        className="relative z-50 flex justify-center"
        role="region"
        aria-label="Featured games expansion controls"
      >
        <button
          className={`absolute flex h-20 w-25 items-center justify-center rounded-full transition-all duration-400 ${
            isOpen
              ? "-top-10 md:-top-12 xl:-top-14"
              : "-top-86 md:-top-90 xl:-top-65"
          }`}
          onClick={handleClick}
          aria-label={isOpen ? "Show less games" : "Show more games"}
          aria-expanded={isOpen}
          aria-controls="featured-games-grid"
        >
          <img
            src="/coin.gif"
            alt=""
            className={`pointer-events-none absolute -top-10 h-20 w-20 rounded-full object-cover drop-shadow-[0_0_20px_rgba(234,179,8,0.8)] transition-opacity duration-300 ${
              isOpen ? "coin-animate opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />

          <div
            className={`group cursor-pointer overflow-hidden rounded-lg border-2 border-purple-500/40 bg-gradient-to-br from-purple-600/60 via-purple-700/60 to-purple-900/60 px-1.5 py-2.5 backdrop-blur-xl transition-all duration-400 hover:scale-110 hover:border-purple-400/70 hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] ${
              isOpen ? "animate-none" : "animate-pulse"
            }`}
          >
            <p
              className="pixelFont relative z-10 w-full text-[0.85rem] font-bold text-purple-200 drop-shadow-[0_2px_10px_rgba(216,180,254,0.8)] md:text-[0.95rem]"
              aria-hidden="true"
            >
              {isOpen ? "Show Less" : "Show More"}
            </p>
          </div>
        </button>
      </div>
    </>
  );
}
