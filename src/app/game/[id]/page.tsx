import HeroSingleGame from "@/components/Heros/HeroSingleGame";
import GameDescriptionSection from "@/components/Heros/HeroSingleGame/GameDescription";
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
  params: { id: string };
}) {
  const { id } = await params;
  const singleGameData = await getSingleGame(id);
  const singleGameScreenshotsData = await getSingleGameScreenshots(id);
  const listGameForSameSeries = await getlistGameForSameSeries(id);

  return (
    <>
      <HeroSingleGame singleGameData={singleGameData} />
      <section className="via-blue-darkest/80 to-blue-darkest flex w-screen flex-col gap-15 bg-gradient-to-b from-transparent px-3">
        <GameDescription description={singleGameData.description_raw} />
        <GameDetails
          singleGameData={singleGameData}
          singleGameScreenshotsData={singleGameScreenshotsData}
          listGameForSameSeries={listGameForSameSeries}
        />
      </section>
    </>
  );
}
