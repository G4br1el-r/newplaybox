export interface FeaturedGamesType {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  tags: TagsType[];
}

export interface TagsType {
  id: number;
  name: string;
}
