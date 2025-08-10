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
      className={`relative flex ${isOpen ? "h-[2180px] duration-1200" : "h-[1100px] duration-1000"} flex-col gap-5 overflow-hidden bg-gradient-to-b px-3 transition-all ease-in-out`}
    >
      <AudioPlayer ref={audioPlayerRef} src="/sounds/coin.wav" />

      {children}

      <div
        className={`from-blue-darkest/70 to-blue-darkest via-blue-darkest/90 absolute top-218 left-0 z-10 w-full rounded-t-[10px] bg-gradient-to-b transition-all ease-in-out ${isOpen ? "pointer-events-auto h-full opacity-0 duration-1000" : "pointer-events-none h-57 opacity-100 duration-1200"}`}
      />

      <div className="absolute bottom-4 left-1/2 z-20 h-15 w-15 -translate-x-1/2 cursor-pointer">
        <button
          className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br"
          onClick={handleClick}
        >
          <img
            src="/coin.gif"
            alt="Game"
            className={`${isOpen ? "coin-animate" : "hidden"} absolute h-full w-full rounded-full object-cover`}
          />

          <p className="pixelFont animate-pulse text-[0.8rem]">
            {isOpen ? "Show Less" : "Show More"}
          </p>
        </button>
      </div>
    </section>
  );
}
