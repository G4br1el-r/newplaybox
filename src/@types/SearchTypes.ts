import { PlatformDetail } from "./SingleGameTypes";

export interface PlatformParentsList {
  id: number;
  name: string;
  slug: string;
  platforms: PlatformDetail[];
}
