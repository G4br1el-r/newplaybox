import { SingleGameType } from "@/@types/SingleGameTypes";
import BaseImage from "@/components/BaseImage";
import PressStart from "./PressStart";
import ShortGameCardWrapper from "./ShortGameCardWrapper";

interface HeroSingleGameProps {
  singleGameData: SingleGameType;
}

export default function HeroSingleGame({
  singleGameData,
}: HeroSingleGameProps) {
  return (
    <section className="relative flex h-[100svh] flex-col items-center justify-center overflow-hidden px-3 pt-25 pb-3.5 text-center xl:pt-10">
      <BaseImage
        src={singleGameData.background_image}
        alt={singleGameData.name}
        extraClassWrapper="fixed inset-0 -z-10 h-full w-full"
        extraClassImage="h-full w-full object-cover bg-center"
      />
      <div className="from-blue-darkest via-blue-darkest/60 to-blue-darkest fixed top-0 left-0 -z-9 h-full w-full bg-gradient-to-b" />
      <PressStart gameName={singleGameData.name} />
      <ShortGameCardWrapper singleGameData={singleGameData} />
    </section>
  );
}
