// components/Explore/GamesList.tsx
"use client";

import { useSearchGames } from "@/hooks/Explore/useSearchGames";
import LoadingState from "./Loading";
import ErrorState from "./Error";
import EmptyState from "./Empty";
import GameCard from "./GameCard";
import { SingleGameType } from "@/@types/SingleGameTypes";

interface inicialDataGamesProps {
  inicialData: { next: string; results: SingleGameType[] };
}

export default function GamesList({ inicialData }: inicialDataGamesProps) {
  const { data, isLoading, isError, error } = useSearchGames(inicialData);

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState error={error} />;
  if (!data || data.results.length === 0) return <EmptyState />;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
