import { Suspense } from "react";
import CodeReveal from "@/components/CodeReveal";
import CommunitySaying from "@/components/CommunitySaying";
import FeaturedGames from "@/components/FeaturedGames";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroSubtitle from "@/components/HeroSubtitle";
import FeaturedGamesSkeleton from "@/components/FeaturedGames/SkeletonScreen/FeaturedGamesSkeleton";
import { getCommunitySaying, getDataForFeaturedGames } from "@/services/api";

export default async function Home() {
  const featuredGamesData = await getDataForFeaturedGames();
  const idsFeaturedGames = featuredGamesData.reduce((acc, game) => {
    acc.push(game.id);
    return acc;
  }, [] as number[]);
  const communitySayingData = await getCommunitySaying(idsFeaturedGames);
  return (
    <>
      <Hero />
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
