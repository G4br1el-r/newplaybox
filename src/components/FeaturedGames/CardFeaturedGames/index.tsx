import BaseImage from "@/components/BaseImage";
import FilledButton from "@/components/Button/FilledButton";
import OutlineButton from "@/components/Button/OutlineButton";
import Link from "next/link";

export default function CardFeaturedGames() {
  return (
    <div className="border-purple-black-hole relative h-[400px] w-full rounded-[10px] border-2">
      <div className="from-blue-darkest via-blue-darkest/30 to-blue-darkest absolute left-1/2 z-10 h-full w-full -translate-x-1/2 rounded-[10px] bg-gradient-to-b">
        <p className="z-10 mt-4 text-center">
          The Legend of Zelda: Breath of the Wild
        </p>
      </div>
      <BaseImage
        src="/img.webp"
        alt="Game"
        extraClassImage="h-full w-full rounded-[8px] object-cover"
        extraClassWrapper="relative h-full"
      />
      <div className="absolute bottom-4 left-1/2 z-20 h-7 w-[150px] -translate-x-1/2">
        <Link
          href="/"
          className="from-purple-dark to-purple-black-hole flex h-full w-full items-center justify-center rounded-[3px] bg-gradient-to-br text-[0.8rem]"
        >
          Show Tags
        </Link>
      </div>
    </div>
  );
}
