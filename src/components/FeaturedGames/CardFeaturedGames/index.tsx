import Image from "next/image";

export default function CardFeaturedGames() {
  return (
    <div className="border-purple-black-hole h-[400px] w-full rounded-[10px] border-1">
      <div className="relative h-full w-full">
        <Image
          src="/img.webp"
          alt="Black hole"
          quality={75}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-[10px] object-cover"
        />
      </div>
    </div>
  );
}
