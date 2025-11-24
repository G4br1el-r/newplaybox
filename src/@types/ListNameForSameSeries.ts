import { Tag } from "./SingleGameTypes";

export interface ListNameForSameSeries {
  results: SingleGame[];
}
interface SingleGame {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  metacritic: number;
  tags: Tag[];
  fullWidth?: boolean;
}
