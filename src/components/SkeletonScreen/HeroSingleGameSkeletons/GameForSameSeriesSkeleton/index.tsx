export default function GameForSameSeriesSkeleton() {
  return (
    <div className="flex h-full w-full flex-col gap-3 md:gap-4 lg:gap-5">
      {/* Badge "Related Games" skeleton */}
      <div className="group flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
        <div className="bg-blue-neon-bright h-1 w-1 animate-pulse rounded-full md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
        <span className="text-[0.6rem] text-white/70 md:text-[0.75rem] lg:text-[0.9rem]">
          Related Games
        </span>
      </div>

      {/* Título "Game From The Series" skeleton */}
      <div className="h-[1.2rem] w-72 animate-pulse rounded bg-gray-700/50 md:h-[1.6rem] md:w-96 lg:h-[2rem] lg:w-[28rem]" />

      {/* Carousel de cards skeleton */}
      <div className="flex gap-4 overflow-hidden py-2 md:gap-5 lg:gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex min-w-[180px] animate-pulse flex-col gap-3 md:min-w-[220px] lg:min-w-[260px]"
          >
            {/* Imagem do jogo */}
            <div className="aspect-[3/4] w-full rounded-xl bg-gray-700/50 backdrop-blur-xl" />

            {/* Nome do jogo */}
            <div className="h-4 w-full rounded bg-gray-700/50 md:h-5" />

            {/* Info adicional (ano, rating, etc) */}
            <div className="h-3 w-2/3 rounded bg-gray-700/50 md:h-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
