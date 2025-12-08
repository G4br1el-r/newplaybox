// app/page.tsx
import CodeReveal from "@/components/CodeReveal";
import CommunitySaying from "@/components/CommunitySaying";
import FeaturedGames from "@/components/FeaturedGames";
import { Footer } from "@/components/Footer";
import HeroHome from "@/components/Heros/HeroHome";
import { getCommunitySaying, getDataForFeaturedGames } from "@/services/api";

export const revalidate = 10;

export default async function Home() {
  const featuredGamesData = await getDataForFeaturedGames();
  const orderedDescFeaturedGamesData = featuredGamesData.sort(
    (game1, game2) => game2.metacritic - game1.metacritic,
  );
  const idsFeaturedGames = orderedDescFeaturedGamesData.reduce((acc, game) => {
    acc.push(game.id);
    return acc;
  }, [] as number[]);
  const communitySayingData = await getCommunitySaying(idsFeaturedGames);

  return (
    <>
      <HeroHome priority={true} />
      <FeaturedGames FeaturedGamesData={orderedDescFeaturedGamesData} />
      <CommunitySaying CommunitySayingData={communitySayingData} />
      <CodeReveal />
      <Footer />
    </>
  );
}
