"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ContentNavBar from "./ContentNavBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`from-blue-light to-blue-neon absolute top-4.5 left-4.5 z-60 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[6px] bg-gradient-to-tr shadow-[0_4px_20px_rgba(33,150,243,0.3)] transition-transform duration-700 hover:shadow-[0_6px_30px_rgba(33,150,243,0.5)] xl:hidden ${isOpen ? "translate-x-54" : ""}`}
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
        className={`from-deep-black custom-scrollbar via-blue-dark to-deep-black fixed top-0 left-0 z-50 h-full w-64 overflow-y-auto bg-gradient-to-tl shadow-lg transition-transform duration-700 xl:static xl:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ContentNavBar />
      </section>
    </>
  );
}
