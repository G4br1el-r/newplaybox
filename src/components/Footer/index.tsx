import { Github, Instagram, Linkedin } from "lucide-react";
import { FadeIn } from "../AnimationMotion/Fadein";
import { ScaleIn } from "../AnimationMotion/Scalein";
import { TypewriterText } from "../AnimationMotion/TypewriterLine";

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-6 px-3 py-12 text-center">
      <FadeIn delay={0}>
        <div className="text-purple-black-hole flex flex-wrap justify-center gap-8 py-3 font-bold">
          <a
            href="https://www.instagram.com/gha.rodriguess/"
            target="_blank"
            className="transition-all duration-500 ease-in-out hover:scale-150"
          >
            <Instagram />
          </a>
          <a
            href="https://github.com/g4br1el-r"
            target="_blank"
            className="transition-all duration-500 ease-in-out hover:scale-150"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-rodrigues-0b2b7a252/"
            target="_blank"
            className="transition-all duration-500 ease-in-out hover:scale-150"
          >
            <Linkedin />
          </a>
        </div>
      </FadeIn>

      <ScaleIn delay={0.2} duration={0.6} className="w-full">
        <div className="border-purple-black-hole border-t" />
      </ScaleIn>

      <TypewriterText delay={0.5} duration={2}>
        <p className="text-purple-black-hole text-[0.8rem]">
          © 2025 Playbox. Designed & Developed with 💜 by Gabriel Rodrigues.
        </p>
      </TypewriterText>
    </footer>
  );
}
