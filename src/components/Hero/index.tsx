export default function Hero() {
  return (
    <section className="relative mt-10 flex flex-col items-center justify-center px-3 text-center">
      <p className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-[1.6rem] font-bold text-transparent">
        Explore the gaming universe with Playbox
      </p>

      <div className="flex h-[300px] w-full items-center justify-center">
        <div className="absolute top-5 h-[400px] w-full overflow-hidden">
          <img
            src="/blackhole.webp"
            alt="Black hole"
            className="h-[500px] w-[800px] object-cover"
          />
        </div>
        <div className="absolute top-43 h-[210px] w-[210px]">
          <img
            src="/controll.webp"
            alt="Control"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <p className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-[0.8rem] text-transparent">
        Dive into adventures, battles, discoveries, challenges, achievements and
        much more in the gaming universe.
      </p>
    </section>
  );
}
