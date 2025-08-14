import { Suspense } from "react";
import CodeReveal from "@/components/CodeReveal";
import CommunitySaying from "@/components/CommunitySaying";
import FeaturedGames from "@/components/FeaturedGames";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroSubtitle from "@/components/HeroSubtitle";
import FeaturedGamesSkeleton from "@/components/FeaturedGames/SkeletonScreen/FeaturedGamesSkeleton";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <HeroSubtitle /> */}
      <Suspense fallback={<FeaturedGamesSkeleton />}>
        <FeaturedGames />
      </Suspense>
      <CommunitySaying />
      <CodeReveal />
      <Footer />
    </>
  );
}
