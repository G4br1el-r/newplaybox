"use client";
import { useActiveFilter } from "@/store/useActiveFilter";
import { useRouter } from "next/navigation";

export const useBuildQueryParams = () => {
  const searchInputValue = useActiveFilter((state) => state.searchInputValue);
  const platformsSelected = useActiveFilter((state) => state.platformsSelected);
  const genresSelected = useActiveFilter((state) => state.genresSelected);
  const ratingSelected = useActiveFilter((state) => state.ratingSelected);
  const router = useRouter();

  const handleParamsUrl = () => {
    const createdParams = new URLSearchParams();

    const platformIdsFormatted = platformsSelected
      .flatMap((item) => item.idsPlatformsChildren)
      .join(",");

    const genrerIdsFormatted = genresSelected
      .map((item) => item.idGenrer)
      .join(",");

    if (searchInputValue) createdParams.set("search", searchInputValue);
    if (platformIdsFormatted)
      createdParams.set("platforms", platformIdsFormatted);
    if (genrerIdsFormatted) createdParams.set("genres", genrerIdsFormatted);
    if (ratingSelected) createdParams.set("rating", ratingSelected.toString());

    router.push(`/explore?${createdParams.toString()}`);
  };

  return { handleParamsUrl };
};
