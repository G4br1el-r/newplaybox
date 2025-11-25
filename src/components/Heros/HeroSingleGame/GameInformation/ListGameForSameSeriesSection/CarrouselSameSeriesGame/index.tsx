"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardFeaturedGames from "@/components/FeaturedGames/CardFeaturedGames";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ListNameForSameSeries } from "@/@types/ListNameForSameSeries";

interface CarrouselSameSeriesGameProps {
  listGameForSameSeries: ListNameForSameSeries;
}

export default function CarrouselSameSeriesGame({
  listGameForSameSeries,
}: CarrouselSameSeriesGameProps) {
  const numberOfGames = listGameForSameSeries.results.length;
  const hasGames = listGameForSameSeries.results.length > 0;

  return (
    <>
      {hasGames && (
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
      )}
    </>
  );
}
