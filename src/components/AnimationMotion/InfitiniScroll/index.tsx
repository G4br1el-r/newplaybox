"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InfiniteScrollProps {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
}

export function InfiniteScroll({
  children,
  direction = "left",
  duration = 20,
}: InfiniteScrollProps) {
  const isLeft = direction === "left";

  return (
    <div className="relative flex overflow-hidden">
      <div
        className="from-blue-darkest/90 via-blue-darkest/10 pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r to-transparent md:w-40 lg:w-48"
        aria-hidden="true"
      />
      <div
        className="from-blue-darkest/90 via-blue-darkest/10 pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l to-transparent md:w-40 lg:w-48"
        aria-hidden="true"
      />

      <motion.div
        className="flex gap-2 md:gap-3 lg:gap-4"
        animate={{
          x: isLeft ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {children}
      </motion.div>

      <motion.div
        className="flex gap-2 md:gap-3 lg:gap-4"
        animate={{
          x: isLeft ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
