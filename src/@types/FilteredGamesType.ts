import { SingleGameType } from "./SingleGameTypes";

export interface FilteredGamesDataType {
  next: string;
  results: SingleGameType[];
}

export interface FilteredGamesParams {
  search: string | undefined;
  platforms: string | undefined;
  genres: string | undefined;
  rating: string | undefined;
}
