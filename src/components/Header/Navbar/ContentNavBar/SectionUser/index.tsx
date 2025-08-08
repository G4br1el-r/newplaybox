import Image from "next/image";

export default function SectionUser() {
  return (
    <div className="bg-blue-light/10 border-blue-neon flex h-[260px] w-full flex-col items-center gap-6 border-b p-4">
      <div className="flex flex-col items-center gap-2">
        <div className="relative h-[60px] w-[110px]">
          <Image
            src="/logo.webp"
            alt="logo da playbox"
            fill
            quality={100}
            className="object-contain"
          />
        </div>

        <p className="text-center text-[0.8rem] text-white">
          Stay updated on new releases.
        </p>
      </div>
      <div className="flex w-full flex-col gap-3 text-[0.8rem]">
        <button className="to-blue-neon-light from-cyan-neon-hover h-10 w-full cursor-pointer rounded-[8px] bg-gradient-to-l font-bold">
          🚀 Create account
        </button>
        <button className="border-cyan-neon text-cyan-neon h-10 w-full cursor-pointer rounded-[8px] border-1">
          👋 Back again? Sign in
        </button>
      </div>
    </div>
  );
}
