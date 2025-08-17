import HeroSingleGame from "@/components/Heros/HeroSingleGame";
import { getSingleGame } from "@/services/api";

export default async function SingleGame({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const singleGameData = await getSingleGame(id);

  return (
    <>
      <HeroSingleGame singleGameData={singleGameData} />
      <h1>teste</h1>
    </>
  );
}
