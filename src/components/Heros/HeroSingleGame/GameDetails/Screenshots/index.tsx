"use client";
import { SingleGameScreenshotsType } from "@/@types/SingleGameScreenshotsType";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface ScreenshotsProps {
  singleGameScreenshotsData: SingleGameScreenshotsType;
  name: string;
}

export default function Screenshots({
  singleGameScreenshotsData,
  name,
}: ScreenshotsProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = singleGameScreenshotsData.results.map((screenshot) => ({
    src: screenshot.image,
    alt: `${name} screenshot`,
  }));

  return (
    <>
      {singleGameScreenshotsData.results.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="group flex h-8 w-fit cursor-pointer items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-md md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
            <div className="bg-blue-neon-bright h-1 w-1 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:animate-pulse md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
            <span className="text-[0.6rem] text-white/70 transition-colors duration-300 group-hover:text-white/90 md:text-[0.7rem] lg:text-[0.8rem] xl:text-base">
              Gallery
            </span>
          </div>

          <p className="hover:text-blue-neon-bright cursor-default text-[1.2rem] font-bold text-white transition-colors duration-300 md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem]">
            Screenshots
          </p>
          <p className="text-[0.8rem] text-white/70 transition-colors duration-300 hover:text-white/90 md:text-[0.9rem] lg:text-[1rem]">
            Take a closer look at the game's visuals and atmosphere
          </p>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 2xl:grid-cols-4">
            {singleGameScreenshotsData.results.map((screenshot, idx) => (
              <div
                key={screenshot.id}
                onClick={() => {
                  setIndex(idx);
                  setOpen(true);
                }}
                className="relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-white/5 backdrop-blur-xl transition-transform hover:scale-105"
              >
                <Image
                  src={screenshot.image}
                  alt={`${name} screenshot ${idx + 1}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={slides}
            plugins={[Zoom]}
            animation={{
              fade: 500,
              swipe: 300,
            }}
            controller={{
              closeOnBackdropClick: true,
              closeOnPullDown: true,
              closeOnPullUp: false,
            }}
            zoom={{
              maxZoomPixelRatio: 30,
              scrollToZoom: true,
            }}
          />
        </div>
      )}
    </>
  );
}
