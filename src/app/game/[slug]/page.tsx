import { Footer } from "@/components/Footer";
import GameInformation from "@/components/Heros/HeroSingleGame/GameInformation";
import HeroMain from "@/components/Heros/HeroSingleGame/Main/Background";
import { getSingleGame } from "@/services/api";
import { buildGameMetadata } from "@/utils/MetaData";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return await buildGameMetadata(slug);
}

export default async function SingleGame({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const singleGameData = await getSingleGame(slug);

  return (
    <>
      <HeroMain singleGameData={singleGameData} />
      <section className="via-blue-darkest/80 to-blue-darkest flex w-screen flex-col gap-15 bg-gradient-to-b from-transparent px-3 xl:w-full">
        <GameInformation singleGameData={singleGameData} />
        <Footer />
      </section>
    </>
  );
}
