// hooks/Explore/useSearchGames.ts
import {
  FilteredGamesDataType,
  FilteredGamesParams,
} from "@/@types/FilteredGamesType";
import { getListFilteredGames } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export const useSearchGames = (inicialDataGames?: FilteredGamesDataType) => {
  const searchParams = useSearchParams();
  const filters: FilteredGamesParams = {
    search: searchParams.get("search") || undefined,
    platforms: searchParams.get("platforms") || undefined,
    genres: searchParams.get("genres") || undefined,
    metacritic: searchParams.get("metacritic") || undefined,
    page: Number(searchParams.get("page")) || 1,
  };

  const hasFilters = !!(
    filters.search ||
    filters.platforms ||
    filters.genres ||
    filters.metacritic ||
    (filters.page && filters.page > 1)
  );

  return useQuery({
    queryKey: ["searchGames", filters],
    queryFn: () => getListFilteredGames(filters),
    initialData: hasFilters ? undefined : inicialDataGames,
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    retry: 1,
  });
};
