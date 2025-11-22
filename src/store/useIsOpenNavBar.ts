import { create } from "zustand";

interface isOpenNavBarState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  toggleIsOpen: () => void;
}

export const useIsOpenNavBar = create<isOpenNavBarState>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
