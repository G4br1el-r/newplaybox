export default function Loading() {
  return (
    <div className="via-blue-darkest/80 to-blue-darkest flex min-h-screen flex-col bg-gradient-to-b from-gray-900">
      {/* Hero skeleton */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background gradient skeleton */}
        <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-gray-800 to-gray-900" />

        {/* Hero content skeleton */}
        <div className="relative z-10 flex h-full items-end p-6 md:p-12 lg:p-16">
          <div className="w-full max-w-5xl space-y-6">
            {/* Badges/Tags skeleton */}
            <div className="flex gap-2">
              <div className="h-6 w-20 animate-pulse rounded-full bg-gray-700" />
              <div className="h-6 w-24 animate-pulse rounded-full bg-gray-700" />
              <div className="h-6 w-28 animate-pulse rounded-full bg-gray-700" />
            </div>

            {/* Título skeleton */}
            <div className="space-y-3">
              <div className="h-16 w-3/4 animate-pulse rounded-lg bg-gray-700 md:h-20 lg:h-24" />
              <div className="h-6 w-1/2 animate-pulse rounded bg-gray-700 md:h-7" />
            </div>

            {/* Metadados skeleton */}
            <div className="flex flex-wrap gap-4">
              <div className="h-5 w-32 animate-pulse rounded bg-gray-700" />
              <div className="h-5 w-40 animate-pulse rounded bg-gray-700" />
              <div className="h-5 w-24 animate-pulse rounded bg-gray-700" />
              <div className="h-5 w-36 animate-pulse rounded bg-gray-700" />
            </div>

            {/* Botões skeleton */}
            <div className="flex gap-3 pt-4">
              <div className="h-12 w-40 animate-pulse rounded-lg bg-blue-600/30" />
              <div className="h-12 w-40 animate-pulse rounded-lg bg-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Content sections skeleton */}
      <section className="flex w-full flex-col gap-10 px-4 py-10 md:gap-15 md:px-8 lg:gap-20 lg:px-12">
        {/* Seção 1: Description */}
        <div className="space-y-4">
          <div className="h-8 w-48 animate-pulse rounded bg-gray-700 md:h-10 md:w-64" />
          <div className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-gray-700" />
            <div className="h-4 w-full animate-pulse rounded bg-gray-700" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-gray-700" />
            <div className="h-4 w-4/6 animate-pulse rounded bg-gray-700" />
          </div>
        </div>

        {/* Seção 2: Tags */}
        <div className="space-y-4">
          <div className="h-8 w-32 animate-pulse rounded bg-gray-700 md:h-10 md:w-40" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div
                key={i}
                className="h-8 w-24 animate-pulse rounded-full bg-gray-700"
              />
            ))}
          </div>
        </div>

        {/* Seção 3: Screenshots */}
        <div className="space-y-4">
          <div className="h-8 w-40 animate-pulse rounded bg-gray-700 md:h-10 md:w-56" />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:gap-5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-video animate-pulse rounded-xl bg-gray-700"
              />
            ))}
          </div>
        </div>

        {/* Seção 4: Ratings */}
        <div className="space-y-4">
          <div className="h-8 w-56 animate-pulse rounded bg-gray-700 md:h-10 md:w-72" />
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-32 animate-pulse rounded bg-gray-700" />
                <div className="h-3 w-full animate-pulse rounded-full bg-gray-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Seção 5: Cards */}
        <div className="space-y-4">
          <div className="h-8 w-48 animate-pulse rounded bg-gray-700 md:h-10 md:w-64" />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-32 animate-pulse rounded-xl bg-gray-700 md:h-40"
              />
            ))}
          </div>
        </div>

        {/* Seção 6: Game Series */}
        <div className="space-y-4">
          <div className="h-8 w-64 animate-pulse rounded bg-gray-700 md:h-10 md:w-80" />
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="min-w-[200px] flex-shrink-0 md:min-w-[250px]"
              >
                <div className="aspect-[3/4] animate-pulse rounded-xl bg-gray-700" />
                <div className="mt-3 space-y-2">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-700" />
                  <div className="h-3 w-2/3 animate-pulse rounded bg-gray-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
