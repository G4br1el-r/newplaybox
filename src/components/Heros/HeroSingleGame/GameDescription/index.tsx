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
      <div className="flex flex-col gap-3">
        <div className="flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl">
          <div className="bg-blue-neon-bright h-1 w-1 rounded-full" />
          <span className="text-[0.6rem] text-white/70">Game Overview</span>
        </div>

        <p className="text-[1.2rem] font-bold text-white">About this title</p>
        <p className="text-[0.8rem] text-white/70">
          Discover the world, story and atmosphere that define this experience.
        </p>
        <div className="flex w-full flex-col gap-3 rounded-2xl bg-white/8 px-3 pt-3 pb-3 text-[0.8rem] backdrop-blur-xl">
          <div
            className={` ${readMore ? "line-clamp-none h-full" : "line-clamp-8 h-38"} w-full overflow-hidden ease-in-out`}
          >
            {description}
          </div>
          <button
            className="flex items-center gap-2"
            onClick={() => setReadMore(!readMore)}
          >
            <span className="text-blue-neon self-start">
              {readMore ? "Read Less" : "Read More"}
            </span>
            <ArrowDown
              className={`${readMore ? "rotate-180" : ""} text-blue-neon h-2.5 w-2.5 animate-bounce transition-all duration-1000`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
