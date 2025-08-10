"use client";

import BaseImage from "@/components/BaseImage";
import { useState } from "react";
import FilledButton from "@/components/Button/FilledButton";
import TagsWrapper from "../Tags/TagsWrapper";
import Link from "next/link";

export default function CardFeaturedGames() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-purple-black-hole relative h-[400px] w-full rounded-[10px] border-2">
      <Link
        href="#"
        className="from-blue-darkest absolute left-1/2 z-10 h-full w-full -translate-x-1/2 rounded-[10px] bg-gradient-to-b via-transparent"
      >
        <p className="z-10 mt-4 text-center">
          The Legend of Zelda: Breath of the Wild
        </p>
      </Link>
      <TagsWrapper isOpen={isOpen} />

      <BaseImage
        src="/img.webp"
        alt="Game"
        extraClassImage="h-full w-full rounded-[8px] object-cover"
        extraClassWrapper="relative h-full"
      />
      <div
        className={`absolute ${isOpen ? "bottom-32" : "bottom-4"} left-1/2 z-31 h-7 w-[150px] -translate-x-1/2 transition-all duration-500`}
      >
        <FilledButton
          content={isOpen ? "Hide Tags" : "Show Tags"}
          extraClass="items-center justify-center text-[0.8rem]"
          ButtonType="button"
          href="#"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
}
