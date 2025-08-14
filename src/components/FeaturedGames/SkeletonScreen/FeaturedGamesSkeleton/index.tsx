import FeaturedGamesWrapper from "../../FeaturedGamesWrapper";
import CardFeaturedGamesSkeleton from "../CardFeaturedGamesSkeleton";

export default function FeaturedGamesSkeleton() {
  return (
    <FeaturedGamesWrapper>
      <div className="mb-6 h-8 w-48 animate-pulse rounded"></div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 5 }, (_, index) => (
          <CardFeaturedGamesSkeleton key={index} fullWidth={index === 4} />
        ))}
      </div>
    </FeaturedGamesWrapper>
  );
}
