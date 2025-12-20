// components/Explore/GameCard.tsx
"use client";

import { SingleGameType } from "@/@types/SingleGameTypes";
import PlatformCard from "@/components/PlatformCard";
import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
  game: SingleGameType;
}

export default function GameCard({ game }: GameCardProps) {
  const displayGenres = game.genres.slice(0, 3);
  const extraGenresCount = Math.max(0, game.genres.length - 3);
  const releaseYear = game.released
    ? new Date(game.released).getFullYear()
    : "TBA";

  const getRatingColor = (metascore: number) => {
    if (metascore >= 75) return "bg-green-500";
    if (metascore >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Link href={`/game/${game.slug}`} prefetch={false}>
      <article className="group flex h-[460px] max-h-[460px] cursor-pointer flex-col overflow-hidden rounded-xl border-2 border-purple-500/30 bg-gradient-to-b from-purple-900/20 to-blue-900/20 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20">
        <div className="relative h-full overflow-hidden bg-slate-900">
          {game.background_image ? (
            <Image
              src={game.background_image}
              alt={game.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-6xl opacity-20">🎮</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

          <div className="absolute top-3 right-3 flex items-center gap-2">
            {game.metacritic ? (
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${getRatingColor(game.metacritic)} text-sm font-bold text-white shadow-lg`}
              >
                {game.metacritic}
              </div>
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900/90 text-sm text-gray-400 shadow-lg">
                ?
              </div>
            )}
          </div>

          {game.esrb_rating && (
            <div className="absolute top-3 left-3 rounded-md border border-slate-600/50 bg-slate-900/90 px-2 py-1 text-xs font-semibold text-slate-300 shadow-lg backdrop-blur-sm">
              {game.esrb_rating.name}
            </div>
          )}
        </div>

        <div className="flex h-full flex-col justify-between gap-3 p-4 px-4">
          <div className="">
            <h3 className="mb-1 text-lg leading-tight font-bold text-white transition-colors group-hover:text-purple-400">
              {game.name}
            </h3>
            {game.name_original !== game.name && (
              <p className="text-xs text-slate-500">{game.name_original}</p>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {displayGenres.map((genre) => (
              <span
                key={genre.id}
                className="rounded-full border border-purple-600/50 bg-purple-700/30 px-2.5 py-1 text-xs text-purple-300"
              >
                {genre.name}
              </span>
            ))}
            {extraGenresCount > 0 && (
              <span className="rounded-full bg-purple-700/20 px-2.5 py-1 text-xs text-purple-400">
                +{extraGenresCount}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 border-b border-purple-500/20 pb-4">
            {game.platforms?.slice(0, 6).map((item) => (
              <PlatformCard
                key={item.platform.id}
                TailwindHeight="h-4"
                TailwindWidth="w-4"
                hasBackground={false}
                colorIconTailwind="text-purple-500/60"
                platform={item.platform}
              />
            ))}
            {game.platforms?.length > 6 && (
              <span className="text-xs text-slate-500">
                +{game.platforms?.length - 6}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-base">📅</span>
                <span className="font-medium text-slate-300">
                  {releaseYear}
                </span>
              </div>
              {game.playtime > 0 && (
                <div className="flex items-center gap-1.5">
                  <span className="text-base">⏱️</span>
                  <span className="font-medium text-slate-300">
                    {game.playtime}h
                  </span>
                </div>
              )}
            </div>

            <div className="flex w-full items-center gap-2 rounded-lg border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-yellow-500/5 px-3 py-2 shadow-lg shadow-yellow-500/10">
              <div className="flex flex-1 items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-base transition-all duration-200 ${
                      i < Math.floor(game.rating)
                        ? "text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.5)]"
                        : i < game.rating
                          ? "text-yellow-400/50"
                          : "text-slate-600"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="flex items-baseline gap-1 border-l border-yellow-500/30 pl-3">
                <span className="text-lg font-bold text-yellow-400">
                  {game.rating ? game.rating.toFixed(1) : "-"}
                </span>
                <span className="text-xs text-slate-400">/ 5</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
