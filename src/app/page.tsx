import CodeReveal from "@/components/CodeReveal";
import CommunitySaying from "@/components/CommunitySaying";
import FeaturedGames from "@/components/FeaturedGames";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroSubtitle from "@/components/HeroSubtitle";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <HeroSubtitle /> */}
      <FeaturedGames />
      <CommunitySaying />
      <CodeReveal />
      <Footer />
    </>
  );
}
