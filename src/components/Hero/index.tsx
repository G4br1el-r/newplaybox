import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-[100dvh] flex-col items-center justify-between overflow-hidden px-3 pt-25 pb-3.5 text-center">
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
        <button className="bg-purple-black-hole h-12 w-full animate-pulse cursor-pointer rounded-[5px]">
          Get Start Now
        </button>
        <button className="border-purple-black-hole h-12 w-full cursor-pointer rounded-[5px] border-1">
          Game Library
        </button>
      </div>
    </section>
  );
}
