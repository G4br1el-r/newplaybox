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
    <div className="h-full w-full">
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
  );
}
