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
          <div className="flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl">
            <div className="bg-blue-neon-bright h-1 w-1 rounded-full" />
            <span className="text-[0.6rem] text-white/70">Gallery</span>
          </div>

          <p className="text-[1.2rem] font-bold text-white">Screenshots</p>
          <p className="text-[0.8rem] text-white/70">
            Take a closer look at the game's visuals and atmosphere.
          </p>

          <div className="grid grid-cols-2 gap-3">
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
