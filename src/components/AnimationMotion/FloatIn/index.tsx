"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatInProps {
  children: ReactNode;
  delay?: number;
}

export function FloatIn({ children, delay = 0 }: FloatInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
