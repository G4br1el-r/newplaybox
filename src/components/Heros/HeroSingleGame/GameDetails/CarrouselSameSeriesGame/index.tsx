"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardFeaturedGames from "@/components/FeaturedGames/CardFeaturedGames";
import { ListNameForSameSeries } from "@/@types/ListNameForSameSeries";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface CarrouselSameSeriesGameProps {
  listGameForSameSeries: ListNameForSameSeries;
}
export default function CarrouselSameSeriesGame({
  listGameForSameSeries,
}: CarrouselSameSeriesGameProps) {
  const numberOfGames = listGameForSameSeries.results.length;

  return (
    <>
      {listGameForSameSeries.results.length > 0 && (
        <div className="mb-2 flex flex-col gap-3">
          <div className="group flex h-8 w-fit cursor-pointer items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-md md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
            <div className="bg-blue-neon-bright h-1 w-1 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:animate-pulse md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
            <span className="text-[0.6rem] text-white/70 transition-colors duration-300 group-hover:text-white/90 md:text-[0.7rem] lg:text-[0.8rem] xl:text-base">
              Related Games
            </span>
          </div>
          <p className="hover:text-blue-neon-bright cursor-default text-[1.2rem] font-bold text-white transition-colors duration-300 md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem]">
            Game From The Series
          </p>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={"auto"}
            navigation
            loop={true}
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: numberOfGames >= 2 ? 2 : numberOfGames,
              },
              1024: {
                slidesPerView: numberOfGames >= 3 ? 3 : numberOfGames,
              },
            }}
            className="w-full"
          >
            {listGameForSameSeries.results.map((game) => (
              <SwiperSlide key={game.id}>
                <CardFeaturedGames
                  id={game.id}
                  slug={game.slug}
                  background_image={game.background_image}
                  metacritic={game.metacritic}
                  name={game.name}
                  tags={game.tags}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
