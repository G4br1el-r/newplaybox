import FilledButton from "../../Button/FilledButton";
import OutlineButton from "../../Button/OutlineButton";
import BaseImage from "../../BaseImage";
import SpaceParticlesWrapper from "@/components/Particles/SpaceParticlesWrapper";

interface HeroHomeProps {
  priority?: boolean;
}

export default function HeroHome({ priority = true }: HeroHomeProps) {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-between overflow-hidden px-3 pt-20 pb-5 text-center md:pt-25 xl:pt-10">
      <SpaceParticlesWrapper />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/10 to-transparent" />

      <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4">
        <h1 className="xs:text-3xl max-w-[1400px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-2xl leading-tight font-extrabold text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Explore the gaming universe with Playbox
        </h1>
        <p className="hidden max-w-[800px] text-sm font-medium text-white/70 sm:text-base md:text-lg lg:text-xl xl:block">
          Discover thousands of games, connect with players worldwide, and dive
          into the ultimate gaming experience
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-xl md:px-4 md:py-2">
            <span className="text-xs font-bold text-cyan-400 md:text-sm">
              10,000+ Games
            </span>
          </div>
          <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-xl md:px-4 md:py-2">
            <span className="text-xs font-bold text-purple-400 md:text-sm">
              500K+ Players
            </span>
          </div>
          <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-xl md:px-4 md:py-2">
            <span className="text-xs font-bold text-pink-400 md:text-sm">
              Daily Updates
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex h-[200px] w-full items-center justify-center overflow-visible sm:h-[250px] md:h-[320px] lg:h-[400px]">
        <BaseImage
          src="/blackhole.webp"
          alt="Black hole background effect"
          priority={priority}
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 924px, 1100px"
          extraClassImage="object-cover scale-110"
          extraClassWrapper="absolute -top-34 md:-top-33 md:h-[550px] md:max-w-[924px] lg:-top-22 h-[450px] xl:max-w-[1100px] 2xl:-top-66 2xl:h-[900px] 2xl:max-w-[1000px] w-full overflow-visible"
        />
        <BaseImage
          src="/controll.webp"
          alt="Gaming controller"
          priority={priority}
          quality={90}
          sizes="(max-width: 640px) 190px, (max-width: 768px) 250px, (max-width: 1024px) 300px, 420px"
          extraClassImage="h-full w-full animate-float object-contain"
          extraClassWrapper="relative z-10 h-[190px] w-[190px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[420px] lg:w-[420px] 2xl:w-[450px]"
        />
      </div>

      <div className="relative z-10 mb-3 flex w-full flex-col items-center gap-2.5 md:mb-5 md:gap-3 xl:max-w-[600px] xl:flex-row">
        <div className="group h-11 w-full md:h-12 lg:h-14">
          <FilledButton
            content="Get Started Now"
            extraClass="text-sm sm:text-base md:text-lg items-center justify-center font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] transition-all duration-300"
            ButtonType="link"
            href="/"
          />
        </div>
        <div className="group h-11 w-full md:h-12 lg:h-14">
          <OutlineButton
            content="Game Library"
            ButtonType="link"
            href="/explore"
            extraClass="text-sm sm:text-base md:text-lg items-center justify-center font-bold hover:bg-white/5 hover:border-purple-400 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
