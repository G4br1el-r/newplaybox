import { create } from "zustand";

interface ActiveFilterState {
  platformsSelected: PlatformsSelected[];
  genresSelected: GenrerSelect[];
  ratingSelected: number;

  handleTogglePlatform: (mainId: number, childId: number) => void;
  handleToggleGenres: (idGenrer: number, nameGenrer: string) => void;
  handleRatingSelected: (rating: number) => void;

  clearPlatforms: () => void;
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
  ratingSelected: 0,

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

  handleRatingSelected: (rating) => set({ ratingSelected: rating }),

  clearPlatforms: () =>
    set({ platformsSelected: [], genresSelected: [], ratingSelected: 0 }),
}));
