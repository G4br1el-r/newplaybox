import {
  getlistGenresForFilters,
  getPlatformsListParentsForFilters,
} from "@/services/api";
import DialogFilter from "./ModalFilter";
import SearchInput from "./SearchInputs";
export default async function ExploreFilterGames() {
  const platformsList = await getPlatformsListParentsForFilters();
  const genrerList = await getlistGenresForFilters();

  return (
    <div className="flex w-full flex-col gap-3 lg:flex-row">
      <SearchInput />
      <div className="flex flex-1 items-center justify-center gap-2">
        <DialogFilter platformsList={platformsList} genrerList={genrerList} />
      </div>
    </div>
  );
}
