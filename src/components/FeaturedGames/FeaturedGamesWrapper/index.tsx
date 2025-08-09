"use client";

import { useState } from "react";

interface FeaturedGamesWrapperProps {
  children: React.ReactNode;
}
export default function FeaturedGamesWrapper({
  children,
}: FeaturedGamesWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className={`relative flex ${isOpen ? "h-[2180px] duration-1200" : "h-[1100px] duration-1000"} flex-col gap-5 overflow-hidden bg-gradient-to-b px-3 transition-all ease-in-out`}
    >
      {children}
      <div
        className={`from-blue-darkest/70 to-blue-darkest via-blue-darkest/90 absolute top-218 left-0 w-full rounded-t-[10px] bg-gradient-to-b transition-all ease-in-out ${isOpen ? "pointer-events-auto h-full opacity-0 duration-1000" : "pointer-events-none h-57 opacity-100 duration-1200"}`}
      />
      <button
        className="bg-cyan-neon absolute bottom-4 left-1/2 h-12 w-[200px] -translate-x-1/2 cursor-pointer rounded-[5px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}
