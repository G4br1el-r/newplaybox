export interface SingleGameType {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  description_raw: string;

  metacritic: number;
  metacritic_url: string;
  metacritic_platforms: MetacriticPlatform[];

  released: string;
  tba: boolean;
  updated: string;

  background_image: string;
  background_image_additional: string;

  website: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;

  rating: number;
  rating_top: number;
  ratings: Rating[];
  reactions: Record<string, number>;
  reviews_count: number;
  reviews_text_count: number;
  ratings_count: number;

  added: number;
  added_by_status: AddedByStatus;
  playtime: number;

  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  suggestions_count: number;
  parents_count: number;
  additions_count: number;
  game_series_count: number;

  alternative_names: string[];
  saturated_color: string;
  dominant_color: string;

  parent_platforms: ParentPlatform[];
  platforms: Platform[];
  stores: Store[];
  developers: Developer[];
  genres: Genre[];
  tags: Tag[];
  publishers: Publisher[];
  esrb_rating: EsrbRating | null;

  user_game: any | null;
  clip: any | null;
}

export interface MetacriticPlatform {
  metascore: number;
  url: string;
  platform: {
    platform: number;
    name: string;
    slug: string;
  };
}

export interface Rating {
  id: number;
  title: "exceptional" | "recommended" | "meh" | "skip";
  count: number;
  percent: number;
}

export interface AddedByStatus {
  yet: number; // Quer jogar
  owned: number; // Possui
  beaten: number; // Zerou
  toplay: number; // Para jogar
  dropped: number; // Abandonou
  playing: number; // Jogando
}

export interface ParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Platform {
  platform: PlatformDetail;
  released_at: string;
  requirements: Requirements;
}

export interface PlatformDetail {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  year_end: number | null;
  year_start: number | null;
  games_count: number;
  image_background: string;
}

export interface Requirements {
  minimum?: string;
  recommended?: string;
}

export interface Store {
  id: number;
  url: string;
  store: StoreDetail;
}

export interface StoreDetail {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

export interface Developer {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Publisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
}

export type RatingTitle = "exceptional" | "recommended" | "meh" | "skip";

export type GameStatus =
  | "yet"
  | "owned"
  | "beaten"
  | "toplay"
  | "dropped"
  | "playing";
