import { SingleGameType } from "./SingleGameTypes";

export interface FilteredGamesDataType {
  count: number;
  next: string | null;
  previous: string | null;
  results: SingleGameType[];
}

export interface FilteredGamesParams {
  search?: string | undefined;
  platforms?: string | undefined;
  genres?: string | undefined;
  metacritic?: string | undefined;
  page?: number | undefined;
}
