"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function Screenshots() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // const slides = singleGameScreenshotsData.results.map((screenshot) => ({
  //   src: screenshot.image,
  //   alt: `${name} screenshot`,
  // }));

  return (
    <>
      {(0 > 0 && (
        <>
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
        </>
      )) || <div>No screenshots</div>}
    </>
  );
}
