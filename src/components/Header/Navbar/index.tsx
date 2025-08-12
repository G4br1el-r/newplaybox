"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ContentNavBar from "./ContentNavBar";

interface NavbarProps {
  isVisible?: boolean;
}

export default function Navbar({ isVisible }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`from-purple-dark to-purple-black-hole fixed top-4.5 left-4.5 z-91 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[6px] bg-gradient-to-br shadow-[0_4px_20px_rgba(33,150,243,0.3)] transition-all ease-in-out hover:shadow-[0_6px_30px_rgba(33,150,243,0.5)] xl:hidden ${
          isOpen ? "translate-x-54 duration-700" : "duration-700"
        } ${isVisible ? "translate-y-0" : "-translate-y-20"}`}
      >
        {isOpen ? <X size={25} /> : <Menu className="text-white" size={25} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 overflow-hidden bg-black/40 xl:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <section
        className={`from-blue-darkest custom-scrollbar via-blue-dark to-purple-dark fixed top-0 left-0 z-90 h-[100svh] w-64 overflow-y-auto bg-gradient-to-b shadow-lg transition-transform duration-700 xl:sticky xl:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ContentNavBar />
      </section>
    </>
  );
}
