import {
  getlistGenresForFilters,
  getPlatformsListParentsForFilters,
} from "@/services/api";
import DialogFilter from "../ModalFilter";
export default async function SearchInput() {
  const platformsList = await getPlatformsListParentsForFilters();
  const genrerList = await getlistGenresForFilters();
  return (
    <div className="flex w-full flex-col gap-3">
      <input
        type="text"
        placeholder="Search for games..."
        className="h-10 w-full rounded-3xl border-2 border-slate-700/50 bg-slate-900/90 px-10 py-3 text-sm text-white/80 placeholder-slate-500 shadow-2xl backdrop-blur-2xl transition-all focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/30 focus:outline-none"
      />
      <DialogFilter platformsList={platformsList} genrerList={genrerList} />
    </div>
  );
}
