"use client";

import { ArrowDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface GameDescriptionSectionProps {
  description: string;
}

export default function GameDescriptionSection({
  description,
}: GameDescriptionSectionProps) {
  const [readMore, setReadMore] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const textRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const collapsedHeight = 152;

  useEffect(() => {
    if (textRef.current) {
      const fullHeight = textRef.current.scrollHeight;
      setContentHeight(fullHeight);

      setIsOverflowing(fullHeight > collapsedHeight);
    }
  }, [description]);

  const handleToggle = () => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    }

    requestAnimationFrame(() => {
      setReadMore(!readMore);
    });
  };

  return (
    <div className="h-full w-full">
      <div className="group flex w-full flex-col gap-3 rounded-2xl bg-white/8 px-3 pt-3 pb-3 text-xs backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 md:rounded-3xl md:px-5 md:pt-5 md:pb-5 md:text-sm lg:px-6 lg:pt-6 lg:pb-6 lg:text-base">
        <div
          ref={contentRef}
          style={{
            maxHeight: readMore ? `${contentHeight}px` : `${collapsedHeight}px`,
          }}
          className="w-full overflow-hidden text-white/80 transition-[max-height] duration-500 ease-in-out hover:text-white/90"
        >
          <div ref={textRef}>{description}</div>
        </div>
        {isOverflowing && (
          <button
            className="group/btn flex items-center gap-2 transition-all duration-300 hover:scale-105"
            onClick={handleToggle}
          >
            <span className="text-blue-neon hover:text-blue-neon-bright self-start text-xs transition-all duration-300 group-hover/btn:translate-x-1 hover:shadow-lg hover:shadow-blue-500/30 md:text-sm lg:text-base">
              {readMore ? "Read Less" : "Read More"}
            </span>
            <ArrowDown
              className={`${readMore ? "rotate-180" : ""} text-blue-neon group-hover/btn:text-blue-neon-bright h-2.5 w-2.5 animate-bounce transition-all duration-500 group-hover/btn:scale-125 group-hover/btn:animate-none md:h-3 md:w-3 lg:h-3.5 lg:w-3.5`}
            />
          </button>
        )}
      </div>
    </div>
  );
}
