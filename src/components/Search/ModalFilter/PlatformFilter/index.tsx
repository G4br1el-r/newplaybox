"use client";
import { PlatformParentsList } from "@/@types/SearchTypes";
import PlatformCard from "@/components/PlatformCard";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";

interface PlatformFilterProps {
  platformsList: PlatformParentsList[];
}

interface PlatformsSelected {
  idPlatformMain: number;
  idsPlatformsChildren: number[];
}

//prettier-ignore
export default function PlatformFilter({ platformsList }: PlatformFilterProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<PlatformsSelected[]>([]);

  const handleTogglePlatform = (mainId: number, childId: number): void => {
    setSelectedPlatforms((platforms) => {
      const mainGroup = platforms.find((p) => p.idPlatformMain === mainId);

      if (!mainGroup) {
        return createNewGroup(platforms, mainId, childId);
      }

      return updateGroup(platforms, mainGroup, mainId, childId);
    });
  };

//prettier-ignore
  function createNewGroup(platforms: PlatformsSelected[], mainId: number, childId: number): PlatformsSelected[] {
    return [
      ...platforms,
      {
        idPlatformMain: mainId,
        idsPlatformsChildren: [childId],
      },
    ];
  }

  //prettier-ignore
  function updateGroup(platforms: PlatformsSelected[], mainGroup: PlatformsSelected, mainId: number, childId: number): PlatformsSelected[] {
    const newChildren = toggleChild(mainGroup.idsPlatformsChildren, childId);

    if (newChildren.length === 0) {
      return platforms.filter((p) => p.idPlatformMain !== mainId);
    }

    return platforms.map((p) =>
      p.idPlatformMain === mainId
        ? { ...p, idsPlatformsChildren: newChildren }
        : p,
    );
  }

  function toggleChild(children: number[], childId: number): number[] {
    const hasChild = children.includes(childId);
    return hasChild
      ? children.filter((id) => id !== childId)
      : [...children, childId];
  }


  const countSelectedInGroup = (mainId: number): number => {
    const group = selectedPlatforms.find((p) => p.idPlatformMain === mainId);
    return group?.idsPlatformsChildren.length || 0;
  };

  const isGroupSelected = (mainId: number): boolean => {
    return selectedPlatforms.some((p) => p.idPlatformMain === mainId);
  };

  const isChildSelected = (childId: number): boolean => {
    return selectedPlatforms.some((p) =>
      p.idsPlatformsChildren.includes(childId),
    );
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/10 pb-1.5 pl-0.5 text-xl leading-none">
          🎮
        </div>
        <span className="text-base font-bold text-white">Platforms</span>
      </div>

      <Accordion.Root type="multiple" className="space-y-2">
        {platformsList.map((platformMain) => {
          const groupSelected = isGroupSelected(platformMain.id);

          return (
            <Accordion.Item
              key={platformMain.id}
              value={platformMain.name}
              className={`cursor-pointer overflow-hidden rounded-xl border backdrop-blur-3xl transition-all duration-300   ${groupSelected ? "border-cyan-400" : "border-slate-700 hover:border-slate-600"} `}
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full cursor-pointer items-center justify-between p-4 text-left">
                  <div className="flex items-center gap-3">
                    <PlatformCard
                      platform={platformMain}
                      TailwindHeight="h-10"
                      TailwindWidth="w-10"
                    />

                    <div className="flex flex-col items-start justify-start">
                      <span
                        className={
                          groupSelected
                            ? "font-semibold text-cyan-400"
                            : "text-white/80"
                        }
                      >
                        {platformMain.name}
                      </span>
                      <span className="text-sm text-white/70">
                        ({countSelectedInGroup(platformMain.id)}/
                        {platformMain.platforms.length})
                      </span>
                    </div>
                  </div>

                  <ChevronDown className="h-5 w-5 text-slate-400 transition-transform duration-300 ease-out group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up flex flex-col items-start overflow-hidden">
                {platformMain.platforms.map((platformList) => {
                  const childSelected = isChildSelected(platformList.id);

                  return (
                    <button
                      key={platformList.id}
                      className="w-full border-t cursor-pointer border-slate-700/50 p-2 text-start transition-all duration-200 hover:bg-slate-700/30"
                      onClick={() =>
                        handleTogglePlatform(platformMain.id, platformList.id)
                      }
                    >
                      <div
                        className={`flex items-center justify-between rounded-sm px-5 py-1.5 transition-colors duration-300 ease-in-out ${childSelected ? "bg-cyan-700" : ""} `}
                      >
                        <p className="text-white">{platformList.name}</p>
                        {childSelected && (
                          <Check className="h-4 w-4 text-cyan-400" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
}
