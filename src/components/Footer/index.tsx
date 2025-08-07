import { Github, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 flex w-full flex-col items-center justify-center gap-6 py-12 text-center text-white">
      <div className="text-blue-neon-light flex flex-wrap justify-center gap-8 text-lg font-bold">
        <a
          href="https://www.instagram.com/gha.rodriguess/"
          target="_blank"
          className="transition-all duration-500 ease-in-out hover:scale-150"
        >
          <Instagram />
        </a>
        <a
          href="https://github.com/"
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
      <div className="border-blue-neon-light/30 w-full border-t"></div>
      <p className="text-sm text-gray-400">
        © 2025 Playbox. Designed & Developed by Gabriel Rodrigues.
      </p>
    </footer>
  );
}
