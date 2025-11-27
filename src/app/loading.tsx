export default function Loading() {
  return (
    <>
      <section className="relative flex h-[100svh] flex-col items-center justify-between overflow-hidden px-3 pt-25 pb-3.5 text-center xl:pt-10">
        <div className="relative z-10 flex w-full flex-col items-center gap-4">
          <div className="h-[2.7rem] w-full max-w-[1400px] animate-pulse rounded-lg bg-gradient-to-r from-white/10 via-white/5 to-white/10 md:h-[3.9rem] lg:h-[5.1rem] 2xl:h-[6rem]" />

          <div className="h-[1.35rem] w-full max-w-[800px] animate-pulse rounded-lg bg-white/5 md:h-[1.65rem] lg:h-[1.8rem]" />

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="h-9 w-32 animate-pulse rounded-full bg-white/10" />
            <div className="h-9 w-32 animate-pulse rounded-full bg-white/10" />
            <div className="h-9 w-32 animate-pulse rounded-full bg-white/10" />
          </div>
        </div>

        <div className="relative flex h-[250px] w-full items-center justify-center md:h-[350px] lg:h-[400px]">
          <div className="bg-gradient-radial absolute inset-0 from-purple-600/20 via-transparent to-transparent blur-3xl" />
          <div className="h-[200px] w-[200px] animate-pulse rounded-full bg-white/5 md:h-[280px] md:w-[350px] lg:h-[350px] lg:w-[420px]" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center gap-3 xl:max-w-[600px] xl:flex-row">
          <div className="h-12 w-full animate-pulse rounded-lg bg-gradient-to-br from-purple-600/20 to-purple-900/20 md:h-16" />
          <div className="h-12 w-full animate-pulse rounded-lg border-2 border-purple-500/20 bg-white/5 md:h-16" />
        </div>
      </section>

      <section className="relative flex h-[1150px] flex-col gap-6 overflow-hidden bg-gradient-to-b from-blue-950/30 via-purple-950/20 to-transparent px-3 py-8 md:h-[710px] md:gap-8 md:py-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 animate-pulse rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 md:w-16" />
            <div className="h-[2.1rem] w-64 animate-pulse rounded-lg bg-white/10 md:h-[3rem] md:w-96 lg:h-[3.6rem] xl:h-[4.2rem]" />
          </div>
          <div className="h-[1.3rem] w-full max-w-[600px] animate-pulse rounded-lg bg-white/5 md:h-[1.5rem] lg:h-[1.65rem]" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-6">
          <div className="relative h-[420px] w-full overflow-hidden rounded-xl border-2 border-purple-500/20 bg-gradient-to-b from-purple-900/10 to-blue-900/10 backdrop-blur-sm md:h-[450px]">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-white/5 to-white/0" />
          </div>

          <div className="relative h-[420px] w-full overflow-hidden rounded-xl border-2 border-purple-500/20 bg-gradient-to-b from-purple-900/10 to-blue-900/10 backdrop-blur-sm md:h-[450px]">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-white/5 to-white/0" />
          </div>

          <div className="relative h-[420px] w-full overflow-hidden rounded-xl border-2 border-purple-500/20 bg-gradient-to-b from-purple-900/10 to-blue-900/10 backdrop-blur-sm md:h-[450px]">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-white/5 to-white/0" />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 px-3 py-8 md:gap-8 md:py-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 animate-pulse rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 md:w-16" />
            <div className="h-[2.1rem] w-72 animate-pulse rounded-lg bg-white/10 md:h-[3rem] md:w-[500px] lg:h-[3.6rem] xl:h-[4.2rem]" />
          </div>
          <div className="h-[1.3rem] w-full max-w-[700px] animate-pulse rounded-lg bg-white/5 md:h-[1.5rem] lg:h-[1.65rem]" />
        </div>

        <div className="flex w-full flex-col gap-4 md:gap-5 xl:grid xl:grid-cols-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="relative h-auto min-h-[240px] w-full rounded-xl border-2 border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-blue-900/15 to-purple-900/20 p-4 backdrop-blur-sm md:min-h-[260px] md:p-5"
            >
              <div className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-purple-500/30 via-cyan-500/30 to-purple-500/30" />

              <div className="flex flex-col gap-4 md:gap-5">
                <div className="h-[1.4rem] w-3/4 animate-pulse rounded-lg bg-white/10 md:h-[1.575rem] lg:h-[1.725rem]" />

                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 animate-pulse rounded-full bg-white/10 md:h-9 md:w-9" />
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="h-3 w-24 animate-pulse rounded bg-white/10 md:h-3.5" />
                    <div className="h-2.5 w-20 animate-pulse rounded bg-white/5 md:h-3" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="h-3 w-full animate-pulse rounded bg-white/5 md:h-3.5" />
                  <div className="h-3 w-full animate-pulse rounded bg-white/5 md:h-3.5" />
                  <div className="h-3 w-3/4 animate-pulse rounded bg-white/5 md:h-3.5" />
                </div>

                <div className="flex items-center gap-3 border-t border-white/10 pt-3">
                  <div className="h-7 w-16 animate-pulse rounded-lg bg-white/5" />
                  <div className="h-7 w-16 animate-pulse rounded-lg bg-white/5" />
                  <div className="h-7 w-16 animate-pulse rounded-lg bg-white/5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col gap-6 px-3 py-8 md:gap-8 md:py-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 animate-pulse rounded-full bg-gradient-to-r from-green-500/30 to-cyan-500/30 md:w-16" />
            <div className="h-[2.1rem] w-56 animate-pulse rounded-lg bg-white/10 md:h-[3rem] md:w-80 lg:h-[3.6rem] xl:h-[4.2rem]" />
          </div>
          <div className="h-[1.3rem] w-full max-w-[700px] animate-pulse rounded-lg bg-white/5 md:h-[1.5rem] lg:h-[1.65rem]" />
        </div>

        <div className="relative flex w-full flex-col gap-8 rounded-xl border-2 border-purple-500/20 bg-gradient-to-br from-gray-900/80 via-black to-gray-900/80 px-5 pt-10 pb-6 md:gap-10 md:px-6 md:pt-12 md:pb-8">
          <div className="absolute top-3 left-3 flex gap-1.5 md:top-4 md:left-4 md:gap-2">
            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500/50 md:h-3 md:w-3" />
            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-500/50 md:h-3 md:w-3" />
            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500/50 md:h-3 md:w-3" />
          </div>

          <div className="mx-auto h-[1.3rem] w-64 animate-pulse rounded-lg bg-cyan-400/10 md:h-[1.5rem] lg:h-[1.65rem]" />

          <div className="flex flex-col gap-5 md:gap-6">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-4 w-full animate-pulse rounded bg-green-400/5 md:h-5"
              />
            ))}
            <div className="h-5 w-3/4 animate-pulse rounded bg-cyan-400/10 md:h-6" />
          </div>
        </div>
      </section>

      <footer className="flex w-full flex-col items-center justify-center gap-8 border-t border-white/10 bg-gradient-to-b from-transparent to-purple-950/20 py-16 text-center md:gap-10 md:py-20">
        <div className="flex gap-6 md:gap-8">
          <div className="h-12 w-12 animate-pulse rounded-xl bg-purple-600/20 md:h-14 md:w-14" />
          <div className="h-12 w-12 animate-pulse rounded-xl bg-purple-600/20 md:h-14 md:w-14" />
          <div className="h-12 w-12 animate-pulse rounded-xl bg-purple-600/20 md:h-14 md:w-14" />
        </div>

        <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <div className="flex flex-col gap-2">
          <div className="mx-auto h-5 w-64 animate-pulse rounded bg-white/5 md:h-5.5" />
          <div className="mx-auto h-4 w-72 animate-pulse rounded bg-white/5 md:h-4.5" />
        </div>
      </footer>
    </>
  );
}
