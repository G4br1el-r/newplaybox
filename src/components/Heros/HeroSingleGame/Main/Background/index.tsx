import { SingleGameType } from "@/@types/SingleGameTypes";
import BaseImage from "@/components/BaseImage";
import PressStart from "../../PressStart";
import GameHeroInformation from "../GameHeroInformation";

interface HeroMainProps {
  singleGameData: SingleGameType;
}

export default function HeroMain({ singleGameData }: HeroMainProps) {
  return (
    <section className="relative flex min-h-[100svh] w-screen flex-col items-center gap-2 px-3 pt-25 pb-10 text-center lg:pt-10 xl:w-full">
      <BaseImage
        src={singleGameData.background_image}
        alt={singleGameData.name}
        extraClassWrapper="fixed inset-0 -z-10 h-full w-full"
        extraClassImage="h-full w-full object-cover bg-center"
      />
      <div className="from-blue-darkest via-blue-darkest/60 to-blue-darkest fixed top-0 left-0 -z-9 h-full w-full bg-gradient-to-b" />
      <PressStart />
      <GameHeroInformation singleGameData={singleGameData} />
    </section>
  );
}
