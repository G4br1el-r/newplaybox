// app/explore/loading.tsx

export default function ExploreLoading() {
  return (
    <section className="flex flex-col gap-5 px-3 pt-25 xl:pt-15">
      <div className="flex flex-col gap-3">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-white/10 sm:h-9 sm:w-56 md:h-10 md:w-64 lg:h-12 lg:w-72" />

        <div className="h-4 w-full max-w-md animate-pulse rounded-lg bg-white/5 sm:h-5" />
      </div>

      <div className="flex w-full flex-col gap-3 lg:flex-row">
        <div className="h-10 w-full animate-pulse rounded-3xl bg-white/10 lg:w-4/6" />

        <div className="flex flex-1 gap-2">
          <div className="h-10 flex-1 animate-pulse rounded-lg bg-purple-600/20" />
          <div className="h-10 flex-1 animate-pulse rounded-lg bg-white/10" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800"
          >
            <div className="aspect-[16/9] w-full animate-pulse bg-white/10" />

            <div className="flex flex-col gap-3 p-4">
              <div className="h-5 w-3/4 animate-pulse rounded bg-white/10" />
              <div className="flex gap-2">
                <div className="h-6 w-6 animate-pulse rounded bg-white/10" />
                <div className="h-6 w-6 animate-pulse rounded bg-white/10" />
                <div className="h-6 w-6 animate-pulse rounded bg-white/10" />
              </div>
              <div className="h-4 w-16 animate-pulse rounded bg-white/10" />
              <div className="flex gap-2">
                <div className="h-6 w-16 animate-pulse rounded-full bg-purple-900/30" />
                <div className="h-6 w-16 animate-pulse rounded-full bg-purple-900/30" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-3 py-8 sm:flex-row sm:justify-center sm:gap-2">
        <div className="h-10 w-full animate-pulse rounded-lg bg-white/10 sm:w-24" />
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-10 w-10 animate-pulse rounded-lg bg-white/10"
            />
          ))}
        </div>
        <div className="h-10 w-full animate-pulse rounded-lg bg-white/10 sm:w-24" />
      </div>

      <footer className="flex w-full flex-col items-center gap-6 py-12">
        <div className="flex gap-8">
          <div className="h-6 w-6 animate-pulse rounded-full bg-white/10" />
          <div className="h-6 w-6 animate-pulse rounded-full bg-white/10" />
          <div className="h-6 w-6 animate-pulse rounded-full bg-white/10" />
        </div>
        <div className="h-px w-full bg-white/10" />
        <div className="h-4 w-64 animate-pulse rounded bg-white/10" />
      </footer>
    </section>
  );
}
