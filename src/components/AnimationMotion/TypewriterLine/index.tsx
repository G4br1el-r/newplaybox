"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TypewriterTextProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function TypewriterText({
  children,
  delay = 0,
  duration = 1.5,
  className = "",
}: TypewriterTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: 0.1,
      }}
      className={className}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{
          delay,
          duration,
          ease: "linear",
        }}
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
