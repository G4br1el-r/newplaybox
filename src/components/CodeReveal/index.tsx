import CodeNPM from "./CodeNPM";

export default function CodeReveal() {
  return (
    <section className="flex w-full flex-col gap-6 px-3 py-8 md:gap-8 md:py-12">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 md:w-16" />
          <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-[1.4rem] font-bold text-transparent md:text-[2rem] lg:text-[2.4rem] xl:text-[2.8rem]">
            Behind The Code
          </h2>
        </div>
        <p className="max-w-[700px] text-[0.85rem] text-white/60 md:text-[1rem] lg:text-[1.1rem]">
          A peek into how we build the ultimate gaming platform
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-gray-900 via-black to-gray-900 px-5 pt-10 pb-6 shadow-[0_0_50px_rgba(139,92,246,0.2)] md:px-6 md:pt-12 md:pb-8">
        <div className="absolute top-3 left-3 flex gap-1.5 md:top-4 md:left-4 md:gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] md:h-3 md:w-3" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)] md:h-3 md:w-3" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] md:h-3 md:w-3" />
        </div>

        <p className="w-full text-center text-[0.85rem] font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] md:text-[1rem] lg:text-[1.1rem]">
          gaming-universe-terminal
        </p>

        <CodeNPM />
      </div>
    </section>
  );
}
