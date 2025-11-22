import { Tag } from "./SingleGameTypes";

export interface ListNameForSameSeries {
  results: SingleGame[];
}
interface SingleGame {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  tags: Tag[];
  fullWidth?: boolean;
}
