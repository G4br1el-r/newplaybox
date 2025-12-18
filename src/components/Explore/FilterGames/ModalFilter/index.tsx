"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FaFilter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import PlatformFilter from "./PlatformFilter";
import { PlatformParentsList } from "@/@types/SearchTypes";
import GernesFilter from "./GenresFilter";
import RatingFilter from "./RatingFilter";
import { GenrerArrayType } from "@/@types/GenresType";
import { useActiveFilter } from "@/store/useActiveFilter";
import { useBuildQueryParams } from "@/hooks/Explore/useBuildQueryParams";

interface DialogFilterProps {
  platformsList: PlatformParentsList[];
  genrerList: GenrerArrayType[];
}

export default function DialogFilter({
  platformsList,
  genrerList,
}: DialogFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const clearPlatforms = useActiveFilter((state) => state.clearPlatforms);
  const { handleParamsUrl } = useBuildQueryParams();

  const handleShowResults = () => {
    handleParamsUrl();
    setIsOpen(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-800 via-purple-800 to-pink-800 font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:brightness-110 active:scale-95">
          <FaFilter className="h-4 w-4" />
          <span className="text-[1.1rem] tracking-wide">Filter</span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 fixed inset-0 z-92 backdrop-blur-xl" />

        <Dialog.Content className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 fixed top-1/2 left-1/2 z-100 h-[70vh] w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 focus:outline-none">
          <Dialog.Title className="sr-only">Game Search Filters</Dialog.Title>
          <Dialog.Description className="sr-only">
            Refine your game search by selecting platforms, genres, release
            years, and minimum rating to find your perfect game
          </Dialog.Description>

          <section className="flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl">
            <div className="flex w-full flex-shrink-0 items-center justify-between border-b border-slate-700 bg-gradient-to-t from-slate-900 to-slate-800 px-4 py-3">
              <div className="flex items-center gap-2">
                <FaFilter className="h-4 w-4 text-slate-400" />
                <span className="text-sm font-bold text-white/90">
                  Refine Your Search
                </span>
              </div>
              <Dialog.Close asChild>
                <button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm text-slate-400 transition-colors hover:bg-slate-800 hover:text-white focus:ring-2 focus:ring-cyan-500/50 focus:outline-none">
                  <IoMdClose className="h-5 w-5" />
                </button>
              </Dialog.Close>
            </div>

            <div className="custom-scrollbar flex-1 overflow-y-auto px-4 py-6">
              <div className="space-y-6">
                <PlatformFilter platformsList={platformsList} />
                <GernesFilter genrerList={genrerList} />
                <RatingFilter />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-700 bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-3">
              <button
                className="group flex h-1/2 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-1 py-2 text-sm font-semibold text-red-400 transition-all hover:border-red-500/50 hover:bg-red-500/20 hover:text-red-300 focus:ring-2 focus:ring-red-500/50 focus:outline-none"
                onClick={() => clearPlatforms()}
              >
                <span>Clear All</span>
              </button>

              <button
                onClick={handleShowResults}
                className="flex h-1/2 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-bold text-white transition-all hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
              >
                <span>Show Results</span>
              </button>
            </div>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
