export interface GenresType {
  results: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    games: GenresGameType[];
  }[];
}

interface GenresGameType {
  id: number;
  slug: string;
  name: string;
  added: number;
}

export interface GenrerArrayType {
  idGenrer: number;
  nameGenrer: string;
}
