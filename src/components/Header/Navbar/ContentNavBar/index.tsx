import {
  NavbarItem,
  NavbarStagger,
} from "@/components/AnimationMotion/NavbarStagger";
import TopicsButton from "../TopicsButton";
import TopicsWrapper from "../TopicsWrapper";
import SectionUser from "./SectionUser";

export default function ContentNavBar() {
  return (
    <NavbarStagger>
      <SectionUser />

      <nav className="w-full">
        <NavbarItem>
          <TopicsWrapper title="EXPLORE">
            <TopicsButton content="Home" href="/" icon="🏠" />
            <TopicsButton content="Explore" href="/explore" icon="🎮" />
          </TopicsWrapper>
        </NavbarItem>

        <NavbarItem>
          <TopicsWrapper title="PREMIUM FEATURES">
            <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
            <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
          </TopicsWrapper>
        </NavbarItem>

        <NavbarItem>
          <TopicsWrapper title="COMMUNITY">
            <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
            <TopicsButton content="Coming Soon" href="/" icon="🕒" disabled />
          </TopicsWrapper>
        </NavbarItem>
      </nav>
    </NavbarStagger>
  );
}
