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
      className={`relative flex ${isOpen ? "h-[2180px] duration-1200 md:h-[1400px] xl:h-[1000px]" : "h-[1100px] duration-1000 md:h-[660px]"} flex-col gap-5 overflow-hidden bg-gradient-to-b px-3 transition-all ease-in-out`}
    >
      <AudioPlayer ref={audioPlayerRef} src="/sounds/coin.wav" />

      {children}

      <div
        className={`from-blue-darkest/70 to-blue-darkest via-blue-darkest/90 absolute top-218 left-0 z-10 w-full rounded-t-[10px] bg-gradient-to-b transition-all ease-in-out md:top-118 ${isOpen ? "pointer-events-auto h-full opacity-0 duration-1000" : "pointer-events-none h-57 opacity-100 duration-1200"}`}
      />

      <div className="absolute bottom-4 left-1/2 z-20 h-20 w-25 -translate-x-1/2 cursor-pointer">
        <button
          className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br"
          onClick={handleClick}
        >
          <img
            src="/coin.gif"
            alt="Game"
            className={`${isOpen ? "coin-animate" : "hidden"} absolute -top-10 z-99 h-20 w-20 rounded-full object-cover`}
          />

          <div className="group from-purple-dark/50 to-purple-black-hole/50 relative cursor-pointer overflow-hidden rounded border border-purple-500/30 bg-gradient-to-br px-3 py-1 transition-all duration-500 hover:scale-110 hover:border-purple-400/60 hover:bg-purple-800/30">
            <div className="absolute inset-0 -translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent via-purple-400/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />

            <p className="pixelFont text-purple-neon relative z-10 animate-pulse text-[0.8rem] transition-colors duration-300">
              {isOpen ? "Show Less" : "Show More"}
            </p>
          </div>
        </button>
      </div>
    </section>
  );
}
