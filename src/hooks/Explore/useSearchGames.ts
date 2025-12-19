import { FilteredGamesParams } from "@/@types/FilteredGamesType";
import { getListFilteredGames } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export const useSearchGames = () => {
  const searchParams = useSearchParams();

  const filters: FilteredGamesParams = {
    search: searchParams.get("search") || undefined,
    platforms: searchParams.get("platforms") || undefined,
    genres: searchParams.get("genres") || undefined,
    metacritic: searchParams.get("metacritic") || undefined,
  };

  return useQuery({
    queryKey: ["searchGames", filters],
    queryFn: () => getListFilteredGames(filters),
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    retry: 1,
    enabled: !!(
      filters.search ||
      filters.platforms ||
      filters.genres ||
      filters.metacritic
    ),
  });
};
