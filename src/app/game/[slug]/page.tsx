import { Footer } from "@/components/Footer";
import HeroSingleGame from "@/components/Heros/HeroSingleGame";
import GameDescription from "@/components/Heros/HeroSingleGame/GameDescription";
import GameDetails from "@/components/Heros/HeroSingleGame/GameDetails";
import {
  getlistGameForSameSeries,
  getSingleGame,
  getSingleGameScreenshots,
} from "@/services/api";

export default async function SingleGame({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const singleGameData = await getSingleGame(slug);
  const singleGameScreenshotsData = await getSingleGameScreenshots(slug);
  const listGameForSameSeries = await getlistGameForSameSeries(slug);

  return (
    <>
      <HeroSingleGame singleGameData={singleGameData} />
      <section className="via-blue-darkest/80 to-blue-darkest flex w-screen flex-col gap-15 bg-gradient-to-b from-transparent px-3 xl:w-full">
        <GameDescription description={singleGameData.description_raw} />
        <GameDetails
          singleGameData={singleGameData}
          singleGameScreenshotsData={singleGameScreenshotsData}
          listGameForSameSeries={listGameForSameSeries}
        />
        <Footer />
      </section>
    </>
  );
}
