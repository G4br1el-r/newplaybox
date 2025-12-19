// components/Explore/GamesList.tsx
"use client";

import { useSearchGames } from "@/hooks/Explore/useSearchGames";
import Image from "next/image";
import Link from "next/link";
import { memo, useMemo } from "react";
import LoadingState from "./Loading";
import ErrorState from "./Error";
import EmptyState from "./Empty";
import GameCard from "./GameCard";

interface GameCardProps {
  game: {
    id: number;
    name: string;
    background_image: string | null;
    metacritic: number | null;
    genres: Array<{ id: number; name: string }>;
    platforms: Array<{ platform: { name: string } }>;
    released: string | null;
    rating: number;
    slug: string;
  };
}

export default function GamesList() {
  const { data, isLoading, isError, error } = useSearchGames();

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState error={error} />;
  if (!data || data.results.length === 0) return <EmptyState />;

  return (
    <div className="space-y-6">
      {/* Grid de jogos */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
