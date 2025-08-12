import TopicsButton from "../TopicsButton";
import TopicsWrapper from "../TopicsWrapper";
import SectionUser from "./SectionUser";

export default function ContentNavBar() {
  return (
    <>
      <SectionUser />
      <nav className="w-full">
        <TopicsWrapper title="EXPLORE">
          <TopicsButton content="Home" href="/" icon="🏠" />
          <TopicsButton content="Games" href="/" icon="🎮" />
          <TopicsButton content="Trending" href="/" icon="🔥" />
          <TopicsButton content="Most Popular" href="/" icon="⭐" />
          <TopicsButton content="News" href="/" icon="📰" />
        </TopicsWrapper>
        <TopicsWrapper title="PREMIUM FEATURES">
          <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
          <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
          <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
          <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
        </TopicsWrapper>
        <TopicsWrapper title="COMMUNITY">
          <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
          <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
          <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
          <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
        </TopicsWrapper>
      </nav>
    </>
  );
}
