import { CommumitySayingType } from "@/@types/CommunitySayingType";
import Comments from "./Comments";

import { SlideIn } from "../AnimationMotion/Slidein";
import { FadeIn } from "../AnimationMotion/Fadein";

interface CommunitySayingProps {
  CommunitySayingData: CommumitySayingType[];
}

export default function CommunitySaying({
  CommunitySayingData,
}: CommunitySayingProps) {
  const photoPerson = [
    "/pessoa1.webp",
    "/pessoa2.webp",
    "/pessoa3.webp",
    "/pessoa4.webp",
    "/pessoa5.webp",
  ];

  return (
    <section className="flex flex-col gap-6 px-3 py-8 md:gap-8 md:py-12">
      {/* Header desliza da esquerda */}
      <SlideIn direction="left">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 md:w-16" />
            <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-[1.4rem] font-bold text-transparent md:text-[2rem] lg:text-[2.4rem] xl:text-[2.8rem]">
              What the Community Is Saying Now
            </h2>
          </div>
          <p className="max-w-[700px] text-[0.85rem] text-white/60 md:text-[1rem] lg:text-[1.1rem]">
            Real voices from real gamers sharing their latest gaming experiences
          </p>
        </div>
      </SlideIn>

      <div className="flex w-full flex-col gap-4 md:gap-5 xl:grid xl:grid-cols-2">
        {CommunitySayingData.map((comment, index) => (
          <Comments {...comment} photo={photoPerson[index]} />
        ))}
      </div>
    </section>
  );
}
