export default function GameForSameSeriesSkeleton() {
  return (
    <div className="flex h-full w-full gap-4">
      {/* Card 1 - sempre visível */}
      <div className="flex h-[396px] w-full animate-pulse flex-col items-center justify-between rounded-[10px] bg-gray-700/50">
        <div className="mt-[16px] h-7 w-2/3 animate-pulse rounded bg-gray-700/50" />
        <div className="relative flex h-15 w-full items-center justify-center">
          <div className="h-7 w-2/4 animate-pulse rounded bg-gray-700/50" />
          <div className="absolute right-3 flex h-7 w-7 items-center justify-center rounded bg-gray-700/50" />
        </div>
      </div>

      {/* Card 2 - esconde no mobile */}
      <div className="hidden h-[396px] w-full animate-pulse flex-col items-center justify-between rounded-[10px] bg-gray-700/50 md:flex">
        <div className="mt-[16px] h-7 w-2/3 animate-pulse rounded bg-gray-700/50" />
        <div className="relative flex h-15 w-full items-center justify-center">
          <div className="h-7 w-2/4 animate-pulse rounded bg-gray-700/50" />
          <div className="absolute right-3 flex h-7 w-7 items-center justify-center rounded bg-gray-700/50" />
        </div>
      </div>

      {/* Card 3 - só no desktop */}
      <div className="hidden h-[396px] w-full animate-pulse flex-col items-center justify-between rounded-[10px] bg-gray-700/50 lg:flex">
        <div className="mt-[16px] h-7 w-2/3 animate-pulse rounded bg-gray-700/50" />
        <div className="relative flex h-15 w-full items-center justify-center">
          <div className="h-7 w-2/4 animate-pulse rounded bg-gray-700/50" />
          <div className="absolute right-3 flex h-7 w-7 items-center justify-center rounded bg-gray-700/50" />
        </div>
      </div>
    </div>
  );
}
