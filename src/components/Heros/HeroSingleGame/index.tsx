import { SingleGameType } from "@/@types/SingleGameTypes";
import BaseImage from "@/components/BaseImage";
import PressStart from "./PressStart";
import InformationGame from "./InformationGame";

interface HeroSingleGameProps {
  singleGameData: SingleGameType;
}

export default function HeroSingleGame({
  singleGameData,
}: HeroSingleGameProps) {
  return (
    <section className="relative flex h-[100svh] w-screen flex-col items-center gap-2 px-3 pt-25 pb-5 text-center xl:w-full">
      <BaseImage
        src={singleGameData.background_image}
        alt={singleGameData.name}
        extraClassWrapper="fixed inset-0 -z-10 h-full w-full"
        extraClassImage="h-full w-full object-cover bg-center"
      />
      <div className="from-blue-darkest via-blue-darkest/60 to-blue-darkest fixed top-0 left-0 -z-9 h-full w-full bg-gradient-to-b" />
      <PressStart />
      <InformationGame singleGameData={singleGameData} />
    </section>
  );
}
