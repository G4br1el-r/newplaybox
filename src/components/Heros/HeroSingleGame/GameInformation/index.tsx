import { SingleGameType } from "@/@types/SingleGameTypes";
import GameDescriptionSection from "./GameDescription";
import BaseWrapperInformation from "./BaseWrapperInformation";
import Screenshots from "./ScreenshotsSection/Screenshots";
import TagsGame from "./Tags";
import CommunityFeedBack from "./CommunityFeedBack";
import PlayerActivity from "./PlayerActivity";
import ConnectAndExplore from "./ConnectAndExplore";
import AvailableAt from "./AvailableAt";
import WrapperErrorBoundary from "../../../ErrorBoundary/WrapperErrorBoundary";
import WrapperGameSeriesAsync from "./ListGameForSameSeriesSection/WrapperSameSeriesAsync";
import { Suspense } from "react";
import GameForSameSeriesSkeleton from "@/components/SkeletonScreen/HeroSingleGameSkeletons/GameForSameSeriesSkeleton";

interface GameInformationProps {
  singleGameData: SingleGameType;
}

export default function GameInformation({
  singleGameData,
}: GameInformationProps) {
  const hasRatings: boolean =
    singleGameData.ratings && singleGameData.ratings.length > 0;

  const hasAddedByStatus: boolean = singleGameData.added_by_status
    ? true
    : false;

  const hasStores: boolean =
    singleGameData.stores && singleGameData.stores.length > 0;

  return (
    <section className="flex h-full w-full flex-col gap-15 md:gap-20 lg:gap-25">
      {/* DESCRIPTION */}
      <BaseWrapperInformation
        informationTag="Game Overview"
        informationTitle="About this title"
        informationSubTitle="Discover the world, story and atmosphere that define this experience."
      >
        <GameDescriptionSection description={singleGameData.description_raw} />
      </BaseWrapperInformation>

      {/* TAGS */}
      <BaseWrapperInformation
        informationTag="Game Features"
        informationTitle="Tags"
      >
        <TagsGame singleGameTags={singleGameData.tags} />
      </BaseWrapperInformation>

      {/* SCREENSHOTS */}
      <BaseWrapperInformation
        informationTag="Gallery"
        informationTitle="Screenshots"
        informationSubTitle="Take a closer look at the game's visuals and atmosphere."
      >
        <Screenshots />
      </BaseWrapperInformation>

      {/* COMMUNITY FEEDBACK */}
      {hasRatings && (
        <BaseWrapperInformation
          informationTag="Player Ratings"
          informationTitle="Community Feedback"
        >
          <CommunityFeedBack
            singleGameCommunityFeedback={singleGameData.ratings}
          />
        </BaseWrapperInformation>
      )}

      {/* PLAYER ACTIVITY */}
      <BaseWrapperInformation
        informationTag="Community Stats"
        informationTitle="Player Activity"
      >
        {hasAddedByStatus && (
          <PlayerActivity
            singleGameAddedByStatus={singleGameData.added_by_status}
          />
        )}
      </BaseWrapperInformation>

      {/* CONNECT & EXPLORE */}
      <BaseWrapperInformation
        informationTag="External Links"
        informationTitle="Connect & Explore"
      >
        <ConnectAndExplore
          singleGameWebsite={singleGameData.website}
          singleGameRedditUrl={singleGameData.reddit_url}
          singleGameRedditCount={singleGameData.reddit_count}
        />
      </BaseWrapperInformation>

      {/* AVAILABLE AT */}
      <BaseWrapperInformation
        informationTag="Where to Buy"
        informationTitle="Available At"
      >
        {hasStores && <AvailableAt singleGameStores={singleGameData.stores} />}
      </BaseWrapperInformation>

      {/* Games From The Series */}
      <BaseWrapperInformation
        informationTag="Related Games"
        informationTitle="Game From The Series"
      >
        <WrapperErrorBoundary>
          <Suspense fallback={<GameForSameSeriesSkeleton />}>
            <WrapperGameSeriesAsync slug={singleGameData.slug} />
          </Suspense>
        </WrapperErrorBoundary>
      </BaseWrapperInformation>
    </section>
  );
}
