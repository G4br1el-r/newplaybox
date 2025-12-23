"use client";

import { TypewriterText } from "@/components/AnimationMotion/TypewriterLine";
import { motion } from "framer-motion";

export default function CodeNPM() {
  const totalDuration = 12.5;

  return (
    <div
      className="xs:h-[400px] mt-8 flex h-[451px] w-full max-w-full flex-col gap-5 px-4 font-mono text-[0.75rem] sm:h-[270px] md:mt-10 md:h-[320px] md:gap-6 md:text-[0.9rem] lg:text-[1rem]"
      role="log"
      aria-live="polite"
      aria-label="Terminal output showing installation commands"
    >
      <TypewriterText
        delay={0}
        duration={1.5}
        className="w-full max-w-full break-words whitespace-normal"
      >
        <span className="font-bold text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.9)]">
          ${" "}
        </span>
        <span className="text-green-400">git clone </span>
        <span className="text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.9)]">
          legendary-gaming-platform.git
        </span>
      </TypewriterText>

      <TypewriterText
        delay={1.6}
        duration={2}
        className="w-full max-w-full break-words whitespace-normal"
      >
        <span className="font-bold text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.9)]">
          ${" "}
        </span>
        <span className="font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.9)]">
          npm install
        </span>
        <span className="text-green-400">
          {" "}
          epic-adventures multiplayer-magic boss-battles
        </span>
      </TypewriterText>

      <TypewriterText
        delay={3.7}
        duration={2}
        className="w-full max-w-full break-words whitespace-normal"
      >
        <span className="font-bold text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.9)]">
          ${" "}
        </span>
        <span className="font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.9)]">
          npm install
        </span>
        <span className="text-green-400">
          {" "}
          pixel-perfect-graphics legendary-soundtracks
        </span>
      </TypewriterText>

      <TypewriterText
        delay={5.8}
        duration={2.2}
        className="w-full max-w-full break-words whitespace-normal"
      >
        <span className="font-bold text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.9)]">
          ${" "}
        </span>
        <span className="font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.9)]">
          npx run
        </span>
        <span className="text-green-400"> create-gaming-universe </span>
        <span className="text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.9)]">
          --legendary-mode
        </span>
      </TypewriterText>

      <TypewriterText
        delay={8.1}
        duration={1.8}
        className="w-full max-w-full break-words whitespace-normal"
      >
        <span className="font-bold text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.9)]">
          ${" "}
        </span>
        <span className="font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.9)]">
          npm run
        </span>
        <span className="text-green-400"> deploy </span>
        <span className="text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.9)]">
          --achievement-unlocked
        </span>
      </TypewriterText>

      <TypewriterText
        delay={10}
        duration={2.5}
        className="w-full max-w-full break-words whitespace-normal"
      >
        <div
          className="flex flex-wrap items-center gap-2"
          role="status"
          aria-label="Deployment successful"
        >
          <span
            className="text-[1.1rem] text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.9)] md:text-[1.2rem]"
            aria-hidden="true"
          >
            ✓
          </span>
          <span className="font-bold text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
            <span className="sr-only">Success: </span>
            🎮 Gaming universe successfully deployed! Ready Player One!
          </span>
        </div>
      </TypewriterText>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: totalDuration,
          duration: 0,
        }}
        className="animate-blink mt-2 ml-1 inline-block h-[18px] w-[8px] bg-green-400 shadow-[0_0_15px_rgba(34,197,94,0.9)] md:h-[22px] md:w-[10px]"
        aria-hidden="true"
      />
    </div>
  );
}
