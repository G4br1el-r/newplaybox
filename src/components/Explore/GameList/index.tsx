// components/Explore/GamesList.tsx
"use client";
import { useSearchGames } from "@/hooks/Explore/useSearchGames";

export default function GamesList() {
  const { data, isLoading, isError, error } = useSearchGames();
  console.log(data?.results);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/30" />
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
          </div>
          <p className="text-xl font-semibold text-white">
            Carregando jogos...
          </p>
          <p className="text-sm text-slate-400">
            Buscando os melhores resultados
          </p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="max-w-md rounded-xl border-2 border-red-500/30 bg-red-500/10 p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
              <span className="text-2xl">⚠️</span>
            </div>
            <h3 className="text-2xl font-bold text-red-500">
              Erro ao carregar
            </h3>
          </div>
          <p className="mb-4 text-red-400">
            {error instanceof Error
              ? error.message
              : "Erro desconhecido ao buscar jogos"}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="w-full rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-600"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  if (!data || data.results.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="max-w-md text-center">
          <div className="mb-6">
            <span className="text-6xl">🎮</span>
          </div>
          <h3 className="mb-2 text-2xl font-bold text-white">
            Nenhum jogo encontrado
          </h3>
          <p className="mb-6 text-lg text-slate-400">
            Tente ajustar os filtros de busca para ver mais resultados
          </p>
          <div className="flex flex-col gap-2 text-sm text-slate-500">
            <p>💡 Dica: Remova alguns filtros</p>
            <p>💡 Dica: Tente termos de busca diferentes</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header com contador */}
      <div className="flex items-center justify-between border-b border-slate-700 pb-4">
        <div>
          <h2 className="text-3xl font-bold text-white">
            {data.results.length}{" "}
            {data.results.length === 1
              ? "jogo encontrado"
              : "jogos encontrados"}
          </h2>
          <p className="mt-1 text-slate-400">Explore e descubra novos jogos</p>
        </div>

        {/* Badge de resultados */}
        <div className="rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2">
          <span className="font-semibold text-cyan-400">
            {data.results.length} resultados
          </span>
        </div>
      </div>

      {/* Grid de jogos */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.results.map((game) => (
          <div
            key={game.id}
            className="group cursor-pointer overflow-hidden rounded-xl border border-slate-700 bg-slate-800 transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            {/* Imagem */}
            <div className="relative h-48 overflow-hidden bg-slate-900">
              {game.background_image ? (
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-6xl opacity-20">🎮</span>
                </div>
              )}

              {/* Overlay de hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Metacritic badge */}
              {game.metacritic && (
                <div className="absolute top-3 right-3 rounded-lg bg-green-500 px-2.5 py-1 text-sm font-bold text-white shadow-lg">
                  {game.metacritic}
                </div>
              )}
            </div>

            {/* Conteúdo */}
            <div className="space-y-3 p-4">
              {/* Nome do jogo */}
              <h3 className="line-clamp-1 text-lg font-bold text-white transition-colors group-hover:text-cyan-400">
                {game.name}
              </h3>

              {/* Gêneros */}
              <div className="flex flex-wrap gap-1.5">
                {game.genres.slice(0, 3).map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-full border border-slate-600 bg-slate-700/80 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {genre.name}
                  </span>
                ))}
                {game.genres.length > 3 && (
                  <span className="rounded-full bg-slate-700/50 px-2.5 py-1 text-xs text-slate-400">
                    +{game.genres.length - 3}
                  </span>
                )}
              </div>

              {/* Plataformas */}
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>🎮</span>
                <span className="line-clamp-1">
                  {game.platforms
                    .slice(0, 2)
                    .map((p) => p.platform.name)
                    .join(", ")}
                  {game.platforms.length > 2 &&
                    ` +${game.platforms.length - 2}`}
                </span>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-slate-700/50 pt-3">
                {/* Data de lançamento */}
                <span className="text-sm text-slate-400">
                  {game.released
                    ? new Date(game.released).getFullYear()
                    : "TBA"}
                </span>

                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <span className="text-yellow-400">⭐</span>
                  <span className="font-semibold text-white">
                    {game.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
