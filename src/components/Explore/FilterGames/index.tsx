import {
  getlistGenresForFilters,
  getPlatformsListParentsForFilters,
} from "@/services/api";
import DialogFilter from "./ModalFilter";
import SearchInput from "./SearchInputs";
import { FadeIn } from "@/components/AnimationMotion/Fadein";

export default async function ExploreFilterGames() {
  const platformsList = await getPlatformsListParentsForFilters();
  const genrerList = await getlistGenresForFilters();

  return (
    <div
      className="flex flex-col gap-3"
      role="search"
      aria-label="Game search and filters"
    >
      <FadeIn delay={0}>
        <SearchInput />
      </FadeIn>
      <FadeIn delay={0.1} className="flex w-full">
        <div className="flex flex-1 items-center justify-center gap-2">
          <DialogFilter platformsList={platformsList} genrerList={genrerList} />
        </div>
      </FadeIn>
    </div>
  );
}
