"use client";
import { useActiveFilter } from "@/store/useActiveFilter";
import { useRouter } from "next/navigation";

export const useBuildQueryParams = () => {
  const searchInputValue = useActiveFilter((state) => state.searchInputValue);
  const platformsSelected = useActiveFilter((state) => state.platformsSelected);
  const genresSelected = useActiveFilter((state) => state.genresSelected);
  const metacriticSelected = useActiveFilter(
    (state) => state.metacriticSelected,
  );
  const router = useRouter();

  const handleParamsUrl = () => {
    const createdParams = new URLSearchParams();

    const platformIdsFormatted = platformsSelected
      .flatMap((item) => item.idsPlatformsChildren)
      .sort((a, b) => a - b)
      .join(",");

    const genrerIdsFormatted = genresSelected
      .map((item) => item.idGenrer)
      .sort((a, b) => a - b)
      .join(",");

    if (searchInputValue) createdParams.set("search", searchInputValue);
    if (platformIdsFormatted)
      createdParams.set("platforms", platformIdsFormatted);
    if (genrerIdsFormatted) createdParams.set("genres", genrerIdsFormatted);
    if (metacriticSelected)
      createdParams.set("metacritic", metacriticSelected.toString() + ",100");

    router.push(`/explore?${createdParams.toString()}`);
  };

  return { handleParamsUrl };
};
