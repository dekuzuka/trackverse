export interface Movie {
  id: number;

  title?: string;
  name?: string;

  poster_path: string;
  backdrop_path?: string;

  vote_average: number;

  release_date?: string;
  first_air_date?: string;

  media_type?: string;

  overview?: string;

  genres?: number[] | string[];

  status?: string;

  episodes?: number;

  runtime?: number;

  adult?: boolean;

  original_language?: string;
}