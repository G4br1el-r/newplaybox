"use client";
import CodeNPM from "./CodeNPM";
import { SlideIn } from "../AnimationMotion/Slidein";
import { motion } from "framer-motion";
import { ScaleIn } from "../AnimationMotion/Scalein";

export default function CodeReveal() {
  return (
    <section
      className="flex w-full flex-col gap-6 px-3 py-8 md:gap-8 md:py-12"
      aria-labelledby="code-reveal-title"
    >
      <SlideIn direction="left">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div
              className="h-1 w-12 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 md:w-16"
              aria-hidden="true"
            />
            <h2
              id="code-reveal-title"
              className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-[1.4rem] font-bold text-transparent md:text-[2rem] lg:text-[2.4rem] xl:text-[2.8rem]"
            >
              Behind The Code
            </h2>
          </div>
          <p className="max-w-[700px] text-[0.85rem] text-white/60 md:text-[1rem] lg:text-[1.1rem]">
            A peek into how we build the ultimate gaming platform
          </p>
        </header>
      </SlideIn>

      <ScaleIn delay={0.3} duration={0.8}>
        <div
          className="group relative flex w-full flex-col items-center justify-center rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-gray-900 via-black to-gray-900 px-5 pt-10 pb-6 shadow-[0_0_50px_rgba(139,92,246,0.2)] transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_80px_rgba(139,92,246,0.4)] md:px-6 md:pt-12 md:pb-8"
          role="region"
          aria-label="Code terminal demonstration"
        >
          <div
            className="absolute top-3 left-3 flex gap-1.5 md:top-4 md:left-4 md:gap-2"
            role="presentation"
            aria-label="Terminal window controls"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: [0, 1.3, 1] }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] md:h-3 md:w-3"
              aria-label="Close button"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: [0, 1.3, 1] }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
              className="h-2.5 w-2.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)] md:h-3 md:w-3"
              aria-label="Minimize button"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: [0, 1.3, 1] }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] md:h-3 md:w-3"
              aria-label="Maximize button"
            />
          </div>

          <p
            className="w-full text-center text-[0.85rem] font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] md:text-[1rem] lg:text-[1.1rem]"
            aria-label="Terminal title"
          >
            gaming-universe-terminal
          </p>

          <CodeNPM />
        </div>
      </ScaleIn>
    </section>
  );
}
