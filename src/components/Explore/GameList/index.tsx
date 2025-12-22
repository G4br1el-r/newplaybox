// components/Explore/GameList.tsx
"use client";

import { FilteredGamesDataType } from "@/@types/FilteredGamesType";
import { useSearchGames } from "@/hooks/Explore/useSearchGames";
import { useSearchParams } from "next/navigation";
import GameCard from "./GameCard";
import Pagination from "../Pagination";
import LoadingState from "./Loading";
import ErrorState from "./Error";
import EmptyState from "./Empty";

interface inicialDataGamesProps {
  inicialData: FilteredGamesDataType;
}

export default function GamesList({ inicialData }: inicialDataGamesProps) {
  const searchParams = useSearchParams();
  const { data, isLoading, isError, error } = useSearchGames(inicialData);

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState error={error} />;
  if (!data || data.results.length === 0) return <EmptyState />;

  const currentPage = Number(searchParams.get("page")) || 1;

  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        hasNext={!!data.next}
        hasPrevious={!!data.previous}
        totalCount={data.count}
      />
    </div>
  );
}
