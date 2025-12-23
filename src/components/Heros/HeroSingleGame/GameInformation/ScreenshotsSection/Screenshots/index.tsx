"use client";
import { SingleGameScreenshotsType } from "@/@types/SingleGameScreenshotsType";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface ScreenshotsProps {
  singleGameScreenshotsData: SingleGameScreenshotsType;
}
export default function Screenshots({
  singleGameScreenshotsData,
}: ScreenshotsProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = singleGameScreenshotsData.results.map((screenshot) => ({
    src: screenshot.image,
    alt: `Screenshot ${screenshot.id}`,
  }));

  const hasImage = singleGameScreenshotsData.results.length > 0;

  return (
    <>
      {hasImage && (
        <>
          <div
            className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 2xl:grid-cols-4"
            role="list"
            aria-label="Game screenshots gallery"
          >
            {singleGameScreenshotsData.results.map((screenshot, idx) => (
              <button
                key={screenshot.id}
                onClick={() => {
                  setIndex(idx);
                  setOpen(true);
                }}
                className="relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-white/5 backdrop-blur-xl transition-transform hover:scale-105"
                aria-label={`View screenshot ${idx + 1} of ${singleGameScreenshotsData.results.length} in full size`}
                type="button"
                role="listitem"
              >
                <Image
                  src={screenshot.image}
                  alt={`Game screenshot ${idx + 1}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </button>
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
            aria-label="Screenshot viewer"
          />
        </>
      )}
    </>
  );
}
