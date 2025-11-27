import FilledButton from "../../Button/FilledButton";
import OutlineButton from "../../Button/OutlineButton";
import BaseImage from "../../BaseImage";

export default function HeroHome() {
  return (
    <section className="relative flex h-[100dvh] flex-col items-center justify-between overflow-hidden px-3 pt-25 pb-5 text-center xl:pt-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/10 to-transparent" />

      <div className="relative z-10 flex flex-col items-center gap-4">
        <h1 className="max-w-[1400px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-[1.8rem] leading-tight font-extrabold text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] md:text-[2.6rem] lg:text-[3.4rem] 2xl:text-[4rem]">
          Explore the gaming universe with Playbox
        </h1>

        <p className="max-w-[800px] text-[0.9rem] font-medium text-white/70 md:text-[1.1rem] lg:text-[1.2rem]">
          Discover thousands of games, connect with players worldwide, and dive
          into the ultimate gaming experience
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
            <span className="text-[0.75rem] font-bold text-cyan-400 md:text-[0.85rem]">
              10,000+ Games
            </span>
          </div>
          <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
            <span className="text-[0.75rem] font-bold text-purple-400 md:text-[0.85rem]">
              500K+ Players
            </span>
          </div>
          <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
            <span className="text-[0.75rem] font-bold text-pink-400 md:text-[0.85rem]">
              Daily Updates
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex h-[250px] w-full items-center justify-center overflow-visible md:h-[350px] lg:h-[400px]">
        <div className="bg-gradient-radial absolute inset-0 from-purple-600/30 via-transparent to-transparent blur-3xl" />

        <BaseImage
          src="/blackhole.webp"
          alt="Black hole"
          extraClassImage="h-[200px] md:h-[280px] lg:h-[350px] w-full -translate-x-0 -translate-y-6 scale-110 transform object-cover drop-shadow-[0_0_50px_rgba(139,92,246,0.6)]"
          extraClassWrapper="relative top-7 h-[600px] xl:-top-4 xl:max-w-[1400px] xl:h-[700px] lg:h-[650px] w-full overflow-visible"
        />

        <BaseImage
          src="/controll.webp"
          alt="Control"
          extraClassImage="h-full w-full object-contain drop-shadow-[0_10px_40px_rgba(59,130,246,0.5)]"
          extraClassWrapper="absolute top-10  xl:-top-8 2xl:w-[550px] z-10 h-[200px] w-[200px] md:top-3 md:h-[350px] md:w-[350px] lg:h-[420px] lg:w-[420px]"
        />
      </div>

      <div className="relative z-10 mb-5 flex w-full flex-col items-center gap-3 text-[0.8rem] xl:max-w-[600px] xl:flex-row">
        <div className="group h-12 w-full md:h-16">
          <FilledButton
            content="Get Started Now"
            extraClass="text-[0.9rem]  md:text-[1.1rem] lg:text-[1.2rem] items-center justify-center font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] transition-all duration-300"
            ButtonType="link"
            href="/"
          />
        </div>
        <div className="group h-12 w-full md:h-16">
          <OutlineButton
            content="Game Library"
            ButtonType="link"
            href="/"
            extraClass="text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem] items-center justify-center font-bold hover:bg-white/5 hover:border-purple-400 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
