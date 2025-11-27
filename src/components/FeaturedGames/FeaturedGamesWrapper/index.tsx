"use client";

import { useState, useRef } from "react";
import { AudioPlayer, AudioPlayerRef } from "../AudioPlayer";

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
    <section
      className={`relative flex ${isOpen ? "h-[2430px] duration-1200 md:h-[1700px] xl:h-[1245px]" : "h-[1250px] duration-1000 md:h-[800px]"} flex-col gap-6 overflow-hidden px-3 pt-8 transition-all ease-in-out md:gap-8 md:py-12`}
    >
      <AudioPlayer ref={audioPlayerRef} src="/sounds/coin.wav" />

      {children}

      <div
        className={`from-blue-darkest/70 to-blue-darkest xs:top-250 via-blue-darkest/90 absolute top-256 left-0 z-10 w-full rounded-t-[10px] bg-gradient-to-b backdrop-blur-sm transition-all duration-1000 ease-in-out md:top-163 xl:top-169 ${isOpen ? "pointer-events-none h-full opacity-0" : "xs:h-[250px] pointer-events-auto h-[230px] opacity-100"}`}
      />

      <div className="absolute bottom-4 left-1/2 z-20 h-20 w-25 -translate-x-1/2 cursor-pointer">
        <button
          className="flex h-full w-full items-center justify-center rounded-full"
          onClick={handleClick}
        >
          <img
            src="/coin.gif"
            alt="Game"
            className={`${isOpen ? "coin-animate" : "hidden"} pointer-events-none absolute -top-10 h-20 w-20 rounded-full object-cover drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]`}
          />

          <div
            className={`${isOpen ? "top-1" : "-top-15 md:-top-6 xl:-top-4"} group relative cursor-pointer overflow-hidden rounded-lg border-2 border-purple-500/40 bg-gradient-to-br from-purple-600/60 via-purple-700/60 to-purple-900/60 px-5 py-2.5 backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:border-purple-400/70 hover:shadow-[0_0_50px_rgba(168,85,247,0.6)]`}
          >
            <div className="absolute inset-0 -translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent via-purple-400/30 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />

            <p className="pixelFont relative z-10 text-[0.85rem] font-bold text-purple-200 drop-shadow-[0_2px_10px_rgba(216,180,254,0.8)] md:text-[0.95rem]">
              {isOpen ? "Show Less" : "Show More"}
            </p>
          </div>
        </button>
      </div>
    </section>
  );
}
