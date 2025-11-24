"use client";

import { ArrowDown } from "lucide-react";
import { useState } from "react";

interface GameDescriptionSectionProps {
  description: string;
}

export default function GameDescriptionSection({
  description,
}: GameDescriptionSectionProps) {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="h-full w-full">
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
        <div className="group flex h-8 w-fit cursor-pointer items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-md md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
          <div className="bg-blue-neon-bright h-1 w-1 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:animate-pulse md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
          <span className="text-[0.6rem] text-white/70 transition-colors duration-300 group-hover:text-white/90 md:text-[0.7rem] lg:text-[0.8rem] xl:text-base">
            Game Overview
          </span>
        </div>

        <p className="hover:text-blue-neon-bright cursor-default text-[1.2rem] font-bold text-white transition-colors duration-300 md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem]">
          About this title
        </p>
        <p className="text-[0.8rem] text-white/70 transition-colors duration-300 hover:text-white/90 md:text-[0.9rem] lg:text-[1rem]">
          Discover the world, story and atmosphere that define this experience.
        </p>
        <div className="group flex w-full flex-col gap-3 rounded-2xl bg-white/8 px-3 pt-3 pb-3 text-[0.7rem] backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 md:rounded-3xl md:px-5 md:pt-5 md:pb-5 md:text-[0.85rem] lg:px-6 lg:pt-6 lg:pb-6 lg:text-[0.9rem]">
          <div
            className={`${readMore ? "line-clamp-none h-full" : "line-clamp-8 h-38"} w-full overflow-hidden text-white/80 transition-all duration-500 ease-in-out hover:text-white/90`}
          >
            {description}
          </div>
          <button
            className="group/btn flex items-center gap-2 transition-all duration-300 hover:scale-105"
            onClick={() => setReadMore(!readMore)}
          >
            <span className="text-blue-neon hover:text-blue-neon-bright self-start text-[0.75rem] transition-all duration-300 group-hover/btn:translate-x-1 hover:shadow-lg hover:shadow-blue-500/30 md:text-[0.85rem] lg:text-[0.9rem]">
              {readMore ? "Read Less" : "Read More"}
            </span>
            <ArrowDown
              className={`${readMore ? "rotate-180" : ""} text-blue-neon group-hover/btn:text-blue-neon-bright h-2.5 w-2.5 animate-bounce transition-all duration-500 group-hover/btn:scale-125 group-hover/btn:animate-none md:h-3 md:w-3 lg:h-3.5 lg:w-3.5`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
