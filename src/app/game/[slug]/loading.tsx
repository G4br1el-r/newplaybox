// app/game/[slug]/loading.tsx

export default function Loading() {
  return (
    // ✅ CRITICAL: max-w-full + overflow-x-hidden
    <div className="via-blue-darkest/80 to-blue-darkest flex min-h-screen max-w-full flex-col overflow-x-hidden bg-gradient-to-b from-gray-900">
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="to-blue-darkest absolute inset-0 animate-pulse bg-gradient-to-b from-gray-800 via-gray-900" />

        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center space-y-6 px-6 md:space-y-8 md:px-12">
          <div className="flex w-full flex-col items-center space-y-3 md:space-y-4">
            <div className="h-12 w-3/4 animate-pulse rounded-lg bg-white/10 backdrop-blur-xl md:h-16 md:w-2/3 lg:h-20" />
          </div>

          <div className="flex items-center justify-center gap-3 md:gap-4">
            <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-lg bg-gray-500/20 md:h-14 md:w-14" />

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-xl md:px-6 md:py-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-4 w-4 animate-pulse rounded-sm bg-gray-500/30 md:h-5 md:w-5"
                  />
                ))}
                <div className="h-4 w-4 animate-pulse rounded-sm bg-gray-600/30 md:h-5 md:w-5" />
              </div>
              <div className="h-4 w-12 animate-pulse rounded bg-white/20 md:h-5 md:w-14" />
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-xl md:px-5 md:py-2.5">
            <div className="h-4 w-4 animate-pulse rounded bg-white/20" />
            <div className="h-4 w-32 animate-pulse rounded bg-white/20 md:w-40" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-xl">
              <div className="h-4 w-4 animate-pulse rounded-full bg-gray-700/50" />
              <div className="h-4 w-16 animate-pulse rounded bg-white/20" />
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-xl">
              <div className="h-4 w-4 animate-pulse rounded-full bg-gray-700/50" />
              <div className="h-4 w-24 animate-pulse rounded bg-white/20" />
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-xl">
              <div className="h-4 w-4 animate-pulse rounded-full bg-gray-700/50" />
              <div className="h-4 w-28 animate-pulse rounded bg-white/20" />
            </div>
          </div>

          <div className="mt-4 h-8 w-24 animate-pulse rounded-full bg-gray-700 backdrop-blur-xl md:h-9 md:w-28" />

          <div className="flex items-center justify-center gap-3 md:gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex h-12 w-12 animate-pulse items-center justify-center rounded-lg bg-white/10 backdrop-blur-xl md:h-14 md:w-14"
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="h-8 w-20 animate-pulse rounded-full bg-white/10 backdrop-blur-xl md:h-9 md:w-24"
              />
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 pt-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-pulse rounded bg-white/20" />
              <div className="h-4 w-40 animate-pulse rounded bg-white/20 md:w-48" />
            </div>
            <div className="h-3.5 w-32 animate-pulse rounded bg-white/15 md:w-40" />
          </div>
        </div>
      </div>

      <section className="flex w-full max-w-full flex-col gap-15 overflow-x-hidden px-3 py-8 md:gap-20 md:px-8 md:py-12 lg:gap-25 lg:px-12 lg:py-16">
        <div className="flex w-full max-w-full flex-col gap-3 md:gap-4 lg:gap-5">
          <div className="group flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
            <div className="h-1 w-1 animate-pulse rounded-full bg-gray-700/50 md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
            <div className="h-3 w-24 animate-pulse rounded bg-gray-700 md:h-3.5 md:w-28 lg:h-4 lg:w-32" />
          </div>
          <div className="h-6 w-40 animate-pulse rounded bg-gray-700 md:h-8 md:w-48 lg:h-10 lg:w-56" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-700/50 md:h-5 md:w-2/3" />
          <div className="space-y-2 pt-2">
            <div className="h-3.5 w-full animate-pulse rounded bg-gray-700/50 md:h-4" />
            <div className="h-3.5 w-full animate-pulse rounded bg-gray-700/50 md:h-4" />
            <div className="h-3.5 w-11/12 animate-pulse rounded bg-gray-700/50 md:h-4" />
            <div className="h-3.5 w-5/6 animate-pulse rounded bg-gray-700/50 md:h-4" />
          </div>
        </div>

        <div className="flex w-full max-w-full flex-col gap-3 md:gap-4 lg:gap-5">
          <div className="group flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
            <div className="h-1 w-1 animate-pulse rounded-full bg-gray-700/50 md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
            <div className="h-3 w-24 animate-pulse rounded bg-gray-700 md:h-3.5 md:w-28 lg:h-4 lg:w-32" />
          </div>
          <div className="h-6 w-20 animate-pulse rounded bg-gray-700 md:h-8 md:w-24 lg:h-10 lg:w-28" />
          <div className="flex flex-wrap gap-2 md:gap-2.5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="h-7 w-20 animate-pulse rounded-full bg-gray-700/50 md:h-8 md:w-24"
              />
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-full flex-col gap-3 md:gap-4 lg:gap-5">
          <div className="group flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
            <div className="bg-blue-neon-bright h-1 w-1 animate-pulse rounded-full md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
            <div className="h-3 w-16 animate-pulse rounded bg-gray-700 md:h-3.5 md:w-20 lg:h-4 lg:w-24" />
          </div>
          <div className="h-6 w-32 animate-pulse rounded bg-gray-700 md:h-8 md:w-40 lg:h-10 lg:w-48" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-700/50 md:h-5 md:w-2/3" />
          <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-video w-full animate-pulse rounded-xl bg-gray-700/50"
              />
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-full flex-col gap-3 md:gap-4 lg:gap-5">
          <div className="group flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
            <div className="bg-blue-neon-bright h-1 w-1 animate-pulse rounded-full md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
            <div className="h-3 w-28 animate-pulse rounded bg-gray-700 md:h-3.5 md:w-32 lg:h-4 lg:w-36" />
          </div>
          <div className="h-6 w-44 animate-pulse rounded bg-gray-700 md:h-8 md:w-56 lg:h-10 lg:w-64" />
          <div className="w-full space-y-3 md:space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full space-y-2">
                <div className="flex w-full items-center justify-between">
                  <div className="h-4 w-20 animate-pulse rounded bg-gray-700/50 md:h-5 md:w-24" />
                  <div className="h-4 w-12 animate-pulse rounded bg-gray-700/50 md:h-5 md:w-16" />
                </div>
                <div className="h-2 w-full animate-pulse rounded-full bg-gray-700/50 md:h-2.5" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-full flex-col gap-3 md:gap-4 lg:gap-5">
          <div className="group flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
            <div className="bg-blue-neon-bright h-1 w-1 animate-pulse rounded-full md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
            <div className="h-3 w-32 animate-pulse rounded bg-gray-700 md:h-3.5 md:w-36 lg:h-4 lg:w-40" />
          </div>
          <div className="h-6 w-36 animate-pulse rounded bg-gray-700 md:h-8 md:w-44 lg:h-10 lg:w-52" />
          <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex h-28 w-full animate-pulse flex-col items-center justify-center gap-2 rounded-xl bg-gray-700/50 p-4 md:h-32 lg:h-36"
              >
                <div className="h-6 w-6 animate-pulse rounded bg-gray-600 md:h-8 md:w-8" />
                <div className="h-3 w-16 animate-pulse rounded bg-gray-600 md:h-4 md:w-20" />
                <div className="h-5 w-12 animate-pulse rounded bg-gray-600 md:h-6 md:w-16" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-full flex-col gap-3 md:gap-4 lg:gap-5">
          <div className="group flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
            <div className="bg-blue-neon-bright h-1 w-1 animate-pulse rounded-full md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
            <div className="h-3 w-28 animate-pulse rounded bg-gray-700 md:h-3.5 md:w-32 lg:h-4 lg:w-36" />
          </div>
          <div className="h-6 w-40 animate-pulse rounded bg-gray-700 md:h-8 md:w-48 lg:h-10 lg:w-56" />
          <div className="flex w-full flex-col gap-2 md:flex-row md:flex-wrap md:gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex h-11 w-full animate-pulse items-center gap-2 rounded-lg bg-gray-700/50 px-4 md:h-12 md:w-auto md:max-w-[200px] md:flex-1"
              >
                <div className="h-5 w-5 flex-shrink-0 animate-pulse rounded bg-gray-600" />
                <div className="h-4 flex-1 animate-pulse rounded bg-gray-600" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-full flex-col gap-3 md:gap-4 lg:gap-5">
          <div className="group flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
            <div className="bg-blue-neon-bright h-1 w-1 animate-pulse rounded-full md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
            <div className="h-3 w-24 animate-pulse rounded bg-gray-700 md:h-3.5 md:w-28 lg:h-4 lg:w-32" />
          </div>
          <div className="h-6 w-32 animate-pulse rounded bg-gray-700 md:h-8 md:w-40 lg:h-10 lg:w-48" />
          <div className="flex w-full flex-wrap gap-2 md:gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex h-11 w-28 animate-pulse items-center justify-center rounded-lg bg-gray-700/50 md:h-12 md:w-32"
              >
                <div className="h-6 w-6 animate-pulse rounded bg-gray-600" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-full flex-col gap-3 overflow-x-hidden md:gap-4 lg:gap-5">
          <div className="group flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
            <div className="bg-blue-neon-bright h-1 w-1 animate-pulse rounded-full md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
            <div className="h-3 w-28 animate-pulse rounded bg-gray-700 md:h-3.5 md:w-32 lg:h-4 lg:w-36" />
          </div>

          <div className="h-6 w-48 animate-pulse rounded bg-gray-700 md:h-8 md:w-60 lg:h-10 lg:w-72" />

          <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            <div className="flex h-[396px] w-full animate-pulse flex-col items-center justify-between rounded-[10px] bg-gray-700/50">
              <div className="mt-4 h-7 w-2/3 animate-pulse rounded bg-gray-600" />
              <div className="relative flex h-15 w-full items-center justify-center px-3 pb-4">
                <div className="h-7 w-1/2 animate-pulse rounded bg-gray-600" />
                <div className="absolute right-3 h-7 w-7 animate-pulse rounded bg-gray-600" />
              </div>
            </div>

            <div className="hidden h-[396px] w-full animate-pulse flex-col items-center justify-between rounded-[10px] bg-gray-700/50 md:flex">
              <div className="mt-4 h-7 w-2/3 animate-pulse rounded bg-gray-600" />
              <div className="relative flex h-15 w-full items-center justify-center px-3 pb-4">
                <div className="h-7 w-1/2 animate-pulse rounded bg-gray-600" />
                <div className="absolute right-3 h-7 w-7 animate-pulse rounded bg-gray-600" />
              </div>
            </div>

            <div className="hidden h-[396px] w-full animate-pulse flex-col items-center justify-between rounded-[10px] bg-gray-700/50 lg:flex">
              <div className="mt-4 h-7 w-2/3 animate-pulse rounded bg-gray-600" />
              <div className="relative flex h-15 w-full items-center justify-center px-3 pb-4">
                <div className="h-7 w-1/2 animate-pulse rounded bg-gray-600" />
                <div className="absolute right-3 h-7 w-7 animate-pulse rounded bg-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
