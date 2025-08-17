import FilledButton from "../../Button/FilledButton";
import OutlineButton from "../../Button/OutlineButton";
import BaseImage from "../../BaseImage";

export default function HeroHome() {
  return (
    <section className="relative flex h-[100svh] flex-col items-center justify-between overflow-hidden px-3 pt-25 pb-3.5 text-center xl:pt-10">
      <h1 className="to-purple-logo from-cyan-neon-bright max-w-[1400px] bg-gradient-to-r bg-clip-text text-[1.6rem] font-bold text-transparent md:text-[2.4rem] lg:text-[3.2rem] 2xl:text-[3.6rem]">
        Explore the gaming universe with Playbox
      </h1>

      <div className="relative flex h-[250px] w-full items-center justify-center overflow-visible">
        <BaseImage
          src="/blackhole.webp"
          alt="Black hole"
          extraClassImage="h-[200px] lg:h-[300px]  w-full -translate-x-0 -translate-y-6 scale-110 transform object-cover"
          extraClassWrapper="relative top-7 h-[600px] xl:-top-4 xl:max-w-[1400px]  xl:h-[700px]  lg:h-[650px] w-full overflow-visible"
        />
        <BaseImage
          src="/controll.webp"
          alt="Control"
          extraClassImage="h-full w-full object-contain"
          extraClassWrapper="absolute top-10 xl:-top-18 2xl:w-[550px] z-10 h-[200px] w-[200px] md:-top-7 md:h-[350px] md:w-[350px]"
        />
      </div>

      <div className="flex w-full flex-col items-center gap-3 text-[0.8rem] xl:flex-row">
        <div className="h-10 w-full md:h-15">
          <FilledButton
            content="Get Start Now"
            extraClass="text-[0.8rem] md:text-[1rem] items-center justify-center"
            ButtonType="link"
            href="/"
          />
        </div>
        <div className="h-10 w-full md:h-15">
          <OutlineButton
            content="Game Library"
            ButtonType="link"
            href="/"
            extraClass="text-[0.8rem] md:text-[1rem] items-center justify-center"
          />
        </div>
      </div>
    </section>
  );
}
