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
  return (
    <>
      {listGameForSameSeries.results.length > 0 && (
        <div className="mb-10 flex flex-col gap-3">
          <div className="flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl">
            <div className="bg-blue-neon-bright h-1 w-1 rounded-full" />
            <span className="text-[0.6rem] text-white/70">Related Games</span>
          </div>
          <p className="text-[1.2rem] font-bold text-white">
            Games From The Series
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
            }}
            className="w-full"
          >
            {listGameForSameSeries.results.map((game) => (
              <SwiperSlide key={game.id}>
                <CardFeaturedGames
                  id={game.id}
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
