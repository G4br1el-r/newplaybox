import Image from "next/image";
import FilledButton from "../Button/FilledButton";
import OutlineButton from "../Button/OutlineButton";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] flex-col items-center justify-between overflow-hidden px-3 pt-25 pb-3.5 text-center">
      <h1 className="to-purple-logo from-cyan-neon-bright bg-gradient-to-r bg-clip-text text-[1.6rem] font-bold text-transparent">
        Explore the gaming universe with Playbox
      </h1>

      <div className="relative flex h-[250px] w-full items-center justify-center overflow-visible">
        <div className="relative top-7 h-[600px] w-full overflow-visible">
          <Image
            src="/blackhole.webp"
            alt="Black hole"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="h-[200px] w-full -translate-x-0 -translate-y-6 scale-110 transform object-cover"
          />
        </div>
        <div className="absolute top-10 z-10 h-[200px] w-[200px]">
          <Image
            src="/controll.webp"
            alt="Control"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-3 text-[0.8rem]">
        <div className="h-10 w-full">
          <FilledButton
            content="Get Start Now"
            extraClass="text-[0.8rem] items-center justify-center"
            ButtonType="link"
            href="/"
          />
        </div>
        <div className="h-10 w-full">
          <OutlineButton
            content="Game Library"
            ButtonType="link"
            href="/"
            extraClass="text-[0.8rem items-center justify-center"
          />
        </div>
      </div>
    </section>
  );
}
