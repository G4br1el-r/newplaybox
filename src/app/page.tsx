import { Suspense } from "react";
import CodeReveal from "@/components/CodeReveal";
import CommunitySaying from "@/components/CommunitySaying";
import FeaturedGames from "@/components/FeaturedGames";
import { Footer } from "@/components/Footer";
import HeroHome from "@/components/Heros/HeroHome";
import HeroSubtitle from "@/components/HeroSubtitle";
import FeaturedGamesSkeleton from "@/components/FeaturedGames/SkeletonScreen/FeaturedGamesSkeleton";
import { getCommunitySaying, getDataForFeaturedGames } from "@/services/api";

export default async function Home() {
  const featuredGamesData = await getDataForFeaturedGames();
  //prettier-ignore
  const idsFeaturedGames = featuredGamesData.reduce((acc, game) => { acc.push(game.id); return acc; }, [] as number[]);
  const communitySayingData = await getCommunitySaying(idsFeaturedGames);

  return (
    <>
      <HeroHome />
      {/* <HeroSubtitle /> */}
      <Suspense fallback={<FeaturedGamesSkeleton />}>
        <FeaturedGames FeaturedGamesData={featuredGamesData} />
      </Suspense>
      <CommunitySaying CommunitySayingData={communitySayingData} />
      <CodeReveal />
      <Footer />
    </>
  );
}
