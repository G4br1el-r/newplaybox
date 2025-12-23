"use client";

import { usePressStart } from "@/store/usePressStart";
import { ReactNode } from "react";

interface GameHeroWrapperProps {
  children: ReactNode;
}

export function GameHeroWrapper({ children }: GameHeroWrapperProps) {
  const { isPressStart } = usePressStart();

  if (!isPressStart) return null;

  return <>{children}</>;
}
