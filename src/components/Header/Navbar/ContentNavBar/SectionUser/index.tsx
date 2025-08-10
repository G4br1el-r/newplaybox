import FilledButton from "@/components/Button/FilledButton";
import OutlineButton from "@/components/Button/OutlineButton";
import Image from "next/image";

export default function SectionUser() {
  return (
    <div className="flex h-[260px] w-full flex-col items-center gap-6 p-4">
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
        <div className="h-10 w-full">
          <FilledButton
            ButtonType="link"
            content="🚀 Create account"
            extraClass="text-[0.8rem] items-center justify-center"
            href="/"
          />
        </div>
        <div className="h-10 w-full">
          <OutlineButton
            ButtonType="link"
            content="👋 Back again? Sign in"
            extraClass="text-[0.8rem] items-center justify-center"
            href="/"
          />
        </div>
      </div>
    </div>
  );
}
