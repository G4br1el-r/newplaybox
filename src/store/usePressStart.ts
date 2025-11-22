import { create } from "zustand";

interface PressStartState {
  isPressStart: boolean;
  setIsPressStart: (value: boolean) => void;
}

export const usePressStart = create<PressStartState>((set) => ({
  isPressStart: false,
  setIsPressStart: (value) => set({ isPressStart: value }),
}));
