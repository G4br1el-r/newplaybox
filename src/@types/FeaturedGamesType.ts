import { Tag } from "./SingleGameTypes";

export interface FeaturedGamesType {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  metacritic: number;
  tags: Tag[];
}
