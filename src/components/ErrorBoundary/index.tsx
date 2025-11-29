"use client";

export function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
      <div className="group flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
        <div className="h-1 w-1 rounded-full bg-red-500 md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
        <span className="text-xs text-white/70 md:text-sm lg:text-base">
          Error
        </span>
      </div>
      <p className="cursor-default text-xl font-bold text-red-400 md:text-2xl lg:text-3xl">
        Something went wrong
      </p>
      <div className="rounded-xl border border-red-800/50 bg-red-900/20 p-8 text-center backdrop-blur-xl">
        <p className="text-sm text-red-400 md:text-base">
          Unable to load this section
        </p>
      </div>
    </div>
  );
}
