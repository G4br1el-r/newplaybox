export interface SingleGameType {
  id: number;
  name: string;
  metacritic: number;
  released: string;
  background_image: string;
  reddit_url: string;
  metacritic_url: string;
  parent_platforms: ParentPlatformsType[];
  developers: DevelopersType[];
  genres: GenresType[];
  tags: TagsType[];
  publishers: PublishersType[];
  esrb_rating: EsrbRatingType;
  description_raw: string;
}

export interface ParentPlatformsType {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}
interface DevelopersType {
  id: number;
  name: string;
  slug: string;
}
export interface GenresType {
  id: number;
  name: string;
  slug: string;
}
export interface TagsType {
  id: number;
  name: string;
}

interface PublishersType {
  id: number;
  name: string;
  slug: string;
}
interface EsrbRatingType {
  id: number;
  name: string;
  slug: string;
}
