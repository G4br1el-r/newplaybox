"use client";

import { usePressStart } from "@/store/usePressStart";
import { useEffect } from "react";

export default function PressStart() {
  const { isPressStart, setIsPressStart } = usePressStart();

  useEffect(() => {
    setIsPressStart(false);

    const handleStart = (e: MouseEvent | KeyboardEvent | TouchEvent) => {
      if (e instanceof KeyboardEvent && e.key !== "Enter") return;
      setIsPressStart(true);
      removeListener();
    };

    const removeListener = () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      window.removeEventListener("click", handleStart);
      window.removeEventListener("keydown", handleStart);
      window.removeEventListener("touchstart", handleStart);
    };

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    window.addEventListener("click", handleStart);
    window.addEventListener("keydown", handleStart);
    window.addEventListener("touchstart", handleStart);

    return () => {
      removeListener();
    };
  }, [setIsPressStart]);

  if (isPressStart) return null;

  return (
    <p className="pixelFont animate-blink absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem]">
      PRESS START
    </p>
  );
}
