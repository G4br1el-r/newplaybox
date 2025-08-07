"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import TopicsWrapper from "../TopicsWrapper";
import TopicsButton from "../TopicsButton";

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
        className={`from-blue-light to-blue-neon absolute left-4.5 z-60 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[6px] bg-gradient-to-tr shadow-[0_4px_20px_rgba(33,150,243,0.3)] transition-transform duration-700 hover:shadow-[0_6px_30px_rgba(33,150,243,0.5)] ${isOpen ? "translate-x-54" : ""}`}
      >
        {isOpen ? <X size={25} /> : <Menu className="text-white" size={25} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 overflow-hidden bg-black/40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <section
        className={`from-deep-black via-blue-dark to-deep-black fixed top-0 left-0 z-50 h-full w-64 overflow-y-auto bg-gradient-to-tl shadow-lg transition-transform duration-700 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-blue-light/10 flex h-[250px] w-full flex-col items-center gap-6 p-4">
          <div className="flex flex-col items-center gap-2">
            <div className="relative h-[60px] w-[110px]">
              <Image
                src="/logo.webp"
                alt="logo da playbox"
                fill
                quality={100}
                className="object-contain"
              />
            </div>

            <p className="text-center text-[0.8rem] text-white">
              Stay updated on new releases.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 text-[0.8rem]">
            <button className="bg-blue-neon h-10 w-full animate-pulse rounded-[8px] font-bold">
              Create account
            </button>
            <button className="border-cyan-neon text-cyan-neon h-10 w-full rounded-[8px] border-2">
              Back again? Sign in
            </button>
          </div>
        </div>

        <div className="w-full">
          <TopicsWrapper title="EXPLORE">
            <TopicsButton content="Home" href="/" icon="🏠" />
            <TopicsButton content="Games" href="/" icon="🎮" />
            <TopicsButton content="Trending" href="/" icon="🔥" />
            <TopicsButton content="Most Popular" href="/" icon="⭐" />
            <TopicsButton content="News" href="/" icon="📰" />
          </TopicsWrapper>
          <TopicsWrapper title="PREMIUM FEATURES">
            <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
            <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
            <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
            <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
            <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
          </TopicsWrapper>
          <TopicsWrapper title="COMMUNITY">
            <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
            <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
            <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
            <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
            <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
          </TopicsWrapper>
        </div>
      </section>
    </>
  );
}
