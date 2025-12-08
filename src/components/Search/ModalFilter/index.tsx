"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FaFilter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import PlatformFilter from "./PlatformFilter";
import { PlatformParentsList } from "@/@types/SearchTypes";

interface DialogFilterProps {
  platformsList: PlatformParentsList[];
}

export default function DialogFilter({ platformsList }: DialogFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

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
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-500/10 text-xl leading-none">
                      ⭐
                    </div>
                    <span className="text-base font-bold text-white">
                      Genres
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button className="flex items-center gap-2 rounded-full border-2 border-slate-700/50 bg-slate-800/30 px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50 hover:text-white">
                      <span className="text-base">⚔️</span>
                      <span>Action</span>
                    </button>

                    <button className="flex items-center gap-2 rounded-full border-2 border-slate-700/50 bg-slate-800/30 px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50 hover:text-white">
                      <span className="text-base">🗡️</span>
                      <span>RPG</span>
                    </button>

                    <button className="flex items-center gap-2 rounded-full border-2 border-slate-700/50 bg-slate-800/30 px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50 hover:text-white">
                      <span className="text-base">🗺️</span>
                      <span>Adventure</span>
                    </button>

                    <button className="flex items-center gap-2 rounded-full border-2 border-slate-700/50 bg-slate-800/30 px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50 hover:text-white">
                      <span className="text-base">🔫</span>
                      <span>Shooter</span>
                    </button>

                    <button className="flex items-center gap-2 rounded-full border-2 border-slate-700/50 bg-slate-800/30 px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50 hover:text-white">
                      <span className="text-base">🏗️</span>
                      <span>Sandbox</span>
                    </button>

                    <button className="flex items-center gap-2 rounded-full border-2 border-slate-700/50 bg-slate-800/30 px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50 hover:text-white">
                      <span className="text-base">🎲</span>
                      <span>Roguelike</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-500/10 text-xl leading-none">
                        📅
                      </div>
                      <span className="text-base font-bold text-white">
                        Release Year
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <button className="rounded-lg border-2 border-slate-700/50 bg-slate-800/30 px-3 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50">
                        2024
                      </button>
                      <button className="rounded-lg border-2 border-slate-700/50 bg-slate-800/30 px-3 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50">
                        2023
                      </button>
                      <button className="rounded-lg border-2 border-slate-700/50 bg-slate-800/30 px-3 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50">
                        2022
                      </button>
                      <button className="rounded-lg border-2 border-slate-700/50 bg-slate-800/30 px-3 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50">
                        2021
                      </button>
                      <button className="rounded-lg border-2 border-slate-700/50 bg-slate-800/30 px-3 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50">
                        2020
                      </button>
                      <button className="rounded-lg border-2 border-slate-700/50 bg-slate-800/30 px-3 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50">
                        2019
                      </button>
                      <button className="rounded-lg border-2 border-slate-700/50 bg-slate-800/30 px-3 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50">
                        2018
                      </button>
                      <button className="rounded-lg border-2 border-slate-700/50 bg-slate-800/30 px-3 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50">
                        2017
                      </button>
                      <button className="rounded-lg border-2 border-slate-700/50 bg-slate-800/30 px-3 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50">
                        Older
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-yellow-500/10 text-xl leading-none">
                        ⭐
                      </div>
                      <span className="text-base font-bold text-white">
                        Minimum Rating
                      </span>
                    </div>

                    <div className="space-y-4">
                      <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.1"
                        defaultValue="0"
                        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-700/50 focus:outline-none"
                      />

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-400">
                          Any rating
                        </span>
                        <div className="flex items-center gap-2 rounded-xl border-2 border-yellow-500/50 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2">
                          <span className="text-base text-yellow-400">⭐</span>
                          <span className="text-lg font-bold text-white">
                            0.0
                          </span>
                          <span className="text-sm text-slate-300">& up</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-shrink-0 items-center justify-between gap-3 border-t border-slate-700 bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-3">
              <button className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-slate-400 transition-all hover:bg-slate-700/50 hover:text-white">
                <IoMdClose className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                Clear All
              </button>

              <div className="flex gap-2">
                <Dialog.Close asChild>
                  <button className="rounded-lg border border-slate-600/50 bg-slate-700/50 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-600/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none">
                    Cancel
                  </button>
                </Dialog.Close>

                <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500/50 focus:outline-none">
                  <span>Show Results</span>
                </button>
              </div>
            </div>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
