// src/stores/useActiveFilter.ts
import { create } from "zustand";

interface ActiveFilterState {
  platformsSelected: PlatformsSelected[];
  genresSelected: GenrerSelect[];
  metacriticSelected: number;
  searchInputValue: string;
  countFilterActive: number | string;

  handleTogglePlatform: (mainId: number, childId: number) => void;
  handleToggleGenres: (idGenrer: number, nameGenrer: string) => void;
  handleMetacriticSelected: (rating: number) => void;
  handleSearchInput: (value: string) => void;
  handleCountFilterActive: () => void;

  clearPlatforms: () => void;
  clearSearchInput: () => void;
}

export interface GenrerSelect {
  idGenrer: number;
  nameGenrer: string;
}

export interface PlatformsSelected {
  idPlatformMain: number;
  idsPlatformsChildren: number[];
}

export const useActiveFilter = create<ActiveFilterState>((set, get) => ({
  platformsSelected: [],
  genresSelected: [],
  metacriticSelected: 0,
  searchInputValue: "",
  countFilterActive: 0,

  handleTogglePlatform: (mainId, childId) => {
    set((state) => {
      const platforms = state.platformsSelected;
      const mainGroup = platforms.find((p) => p.idPlatformMain === mainId);

      if (!mainGroup) {
        return {
          platformsSelected: [
            ...platforms,
            { idPlatformMain: mainId, idsPlatformsChildren: [childId] },
          ],
        };
      }

      const hasChild = mainGroup.idsPlatformsChildren.includes(childId);
      const newChildren = hasChild
        ? mainGroup.idsPlatformsChildren.filter((id) => id !== childId)
        : [...mainGroup.idsPlatformsChildren, childId];

      if (newChildren.length === 0) {
        return {
          platformsSelected: platforms.filter(
            (p) => p.idPlatformMain !== mainId,
          ),
        };
      }

      return {
        platformsSelected: platforms.map((p) =>
          p.idPlatformMain === mainId
            ? { ...p, idsPlatformsChildren: newChildren }
            : p,
        ),
      };
    });
  },

  handleToggleGenres: (idGenrer, nameGenrer) => {
    set((state) => {
      const hasGenre = state.genresSelected.some(
        (g) => g.idGenrer === idGenrer,
      );

      if (hasGenre) {
        return {
          genresSelected: state.genresSelected.filter(
            (genrer) => genrer.idGenrer !== idGenrer,
          ),
        };
      }

      return {
        genresSelected: [...state.genresSelected, { idGenrer, nameGenrer }],
      };
    });
  },

  handleMetacriticSelected: (metacriticValue) =>
    set({ metacriticSelected: metacriticValue }),

  handleSearchInput: (value) => {
    const maxLength = 25;
    if (value.length > maxLength) {
      const truncatedValue = value.slice(0, maxLength);
      set({ searchInputValue: truncatedValue });
      return;
    }

    if (value.length > 0 && value.trim().length === 0) {
      set({ searchInputValue: "" });
      return;
    }

    set({ searchInputValue: value });
  },

  handleCountFilterActive: () => {
    const countPlatforms = get().platformsSelected.flatMap(
      (item) => item.idsPlatformsChildren,
    ).length;
    const countGenres = get().genresSelected.length;
    const countMetacritic = get().metacriticSelected !== 0 ? 1 : 0;
    const count = countPlatforms + countGenres + countMetacritic;

    if (count > 10) {
      set({ countFilterActive: "10+" });
    } else {
      set({ countFilterActive: count });
    }
  },

  clearPlatforms: () =>
    set({
      platformsSelected: [],
      genresSelected: [],
      metacriticSelected: 0,
      countFilterActive: 0,
    }),

  clearSearchInput: () => set({ searchInputValue: "" }),
}));
