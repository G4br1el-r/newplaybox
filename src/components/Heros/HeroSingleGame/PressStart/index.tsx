"use client";

import OutlineButton from "@/components/Button/OutlineButton";
import { useEffect, useState } from "react";

interface PressStartProps {
  name: string;
  description_raw: string;
}
export default function PressStart({ name, description_raw }: PressStartProps) {
  const [isPresStart, setIsPressStart] = useState(false);
  const [isOpenDescription, setIsOpenDescription] = useState(false);

  useEffect(() => {
    const handleStart = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent && e.key !== "Enter") return;

      setIsPressStart(true);
      document.body.style.overflow = "";
      window.removeEventListener("click", handleStart);
      window.removeEventListener("keydown", handleStart);
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("click", handleStart);
    window.addEventListener("keydown", handleStart);

    return () => {
      window.removeEventListener("click", handleStart);
      window.removeEventListener("keydown", handleStart);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <h1
        className={`to-purple-logo from-cyan-neon-bright max-w-[1400px] bg-gradient-to-r bg-clip-text text-[2rem] font-bold text-transparent transition-all duration-1000 ${isPresStart ? "opacity-100" : "opacity-0"} ease-in-out md:text-[2.4rem] lg:text-[3.2rem] 2xl:text-[3.6rem]`}
      >
        {name}
      </h1>
      {!isPresStart && (
        <button className="pixelFont animate-blink absolute text-[0.8rem]">
          PRESS START
        </button>
      )}
    </div>
  );
}
