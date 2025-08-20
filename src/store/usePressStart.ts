import { create } from "zustand";

interface PressStartState {
  isPressStart: boolean;
  setIsPressStart: () => void;
}

export const usePressStart = create<PressStartState>((set) => ({
  isPressStart: false,
  setIsPressStart: () => set({ isPressStart: true }),
}));
