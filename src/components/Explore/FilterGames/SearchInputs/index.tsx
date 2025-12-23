"use client";
import { useBuildQueryParams } from "@/hooks/Explore/useBuildQueryParams";
import { useActiveFilter } from "@/store/useActiveFilter";

export default function SearchInput() {
  const searchValue = useActiveFilter((state) => state.searchInputValue);
  const handleSearchInput = useActiveFilter((state) => state.handleSearchInput);
  const clearSearchInput = useActiveFilter((state) => state.clearSearchInput);
  const { handleParamsUrl } = useBuildQueryParams();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleParamsUrl();
  };

  return (
    <div className="relative">
      <input
        type="text"
        name="search"
        value={searchValue}
        onChange={(e) => handleSearchInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Search for games..."
        className="focus:ring-0.5 h-10 w-full rounded-3xl border-2 border-slate-700/50 bg-slate-900/90 px-4 pr-13 text-sm text-white/80 placeholder-slate-500 shadow-2xl backdrop-blur-2xl transition-all focus:border-purple-500/50 focus:ring-purple-500/50 focus:outline-none"
      />

      {searchValue && (
        <button
          onClick={() => clearSearchInput()}
          className="absolute top-1/2 right-3 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-[0.8rem] text-white/60 transition-all hover:bg-slate-600/70 hover:text-white"
          aria-label="Clear search input"
        >
          ✕
        </button>
      )}
    </div>
  );
}
