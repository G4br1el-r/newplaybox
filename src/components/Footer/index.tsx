import { Github, Instagram, Linkedin } from "lucide-react";
import { FadeIn } from "../AnimationMotion/Fadein";
import { ScaleIn } from "../AnimationMotion/Scalein";
import { TypewriterText } from "../AnimationMotion/TypewriterLine";

export function Footer() {
  return (
    <footer
      className="flex w-full flex-col items-center justify-center gap-6 px-3 py-12 text-center"
      role="contentinfo"
    >
      <FadeIn delay={0}>
        <nav aria-label="Social media links">
          <ul className="text-purple-black-hole flex flex-wrap justify-center gap-8 py-3 font-bold">
            <li>
              <a
                href="https://www.instagram.com/gha.rodriguess/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-500 ease-in-out hover:scale-150"
                aria-label="Visit Gabriel's Instagram profile (opens in new tab)"
              >
                <Instagram aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/g4br1el-r"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-500 ease-in-out hover:scale-150"
                aria-label="Visit Gabriel's GitHub profile (opens in new tab)"
              >
                <Github aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gabriel-rodrigues-0b2b7a252/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-500 ease-in-out hover:scale-150"
                aria-label="Visit Gabriel's LinkedIn profile (opens in new tab)"
              >
                <Linkedin aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </FadeIn>

      <ScaleIn delay={0.2} duration={0.6} className="w-full">
        <hr className="border-purple-black-hole border-t" aria-hidden="true" />
      </ScaleIn>

      <TypewriterText
        delay={0.5}
        duration={2}
        className="w-full max-w-full px-4"
      >
        <p className="text-purple-black-hole text-center text-[0.8rem] break-words whitespace-normal">
          © 2025 Playbox. Designed & Developed with{" "}
          <span aria-label="love">💜</span> by Gabriel Rodrigues.
        </p>
      </TypewriterText>
    </footer>
  );
}
