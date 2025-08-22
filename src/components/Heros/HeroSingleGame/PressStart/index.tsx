"use client";

import { usePressStart } from "@/store/usePressStart";
import { useEffect, useState } from "react";

interface PressStartProps {
  gameName: string;
}
export default function PressStart({ gameName }: PressStartProps) {
  const { isPressStart, setIsPressStart } = usePressStart();

  useEffect(() => {
    const handleStart = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent && e.key !== "Enter") return;

      setIsPressStart();
      removeListener();
    };

    const removeListener = () => {
      document.body.style.overflow = "";
      window.removeEventListener("click", handleStart);
      window.removeEventListener("keydown", handleStart);
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("click", handleStart);
    window.addEventListener("keydown", handleStart);

    return () => {
      removeListener();
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <h1
        className={`to-purple-logo from-cyan-neon-bright max-w-[1400px] bg-gradient-to-r bg-clip-text text-[2rem] leading-8 font-bold text-transparent transition-all duration-1000 ${isPressStart ? "opacity-100" : "opacity-0"} ease-in-out md:text-[2.4rem] lg:text-[3.2rem] 2xl:text-[3.6rem]`}
      >
        {gameName}
      </h1>
      {!isPressStart && (
        <button className="pixelFont animate-blink absolute text-[0.8rem]">
          PRESS START
        </button>
      )}
    </div>
  );
}
