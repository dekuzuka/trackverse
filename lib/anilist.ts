import { GraphQLClient, gql } from "graphql-request";

import { Movie } from "@/lib/types";

const anilist = new GraphQLClient("https://graphql.anilist.co");

interface AniListAnime {
  id: number;
  title: {
    romaji?: string;
    english?: string;
    native?: string;
  };
  coverImage: {
    extraLarge: string;
  };
  bannerImage?: string;
  averageScore?: number;
  episodes?: number;
  season?: string;
  seasonYear?: number;
  genres?: string[];
  status?: string;
}

interface PopularAnimeResponse {
  Page: {
    media: AniListAnime[];
  };
}

const POPULAR_ANIME_QUERY = gql`
  query PopularAnime($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME, sort: POPULARITY_DESC) {
        id

        title {
          romaji
          english
          native
        }

        coverImage {
          extraLarge
        }

        bannerImage

        averageScore

        episodes

        season

        seasonYear

        genres

        status
      }
    }
  }
`;

export async function getPopularAnime(
  page = 1,
  perPage = 12,
): Promise<Movie[]> {
  const data = await anilist.request<PopularAnimeResponse>(
    POPULAR_ANIME_QUERY,
    {
      page,
      perPage,
    },
  );

  return data.Page.media.map((anime) => ({
    id: anime.id,

    title:
      anime.title.english ||
      anime.title.romaji,

    poster_path: anime.coverImage.extraLarge,

    backdrop_path: anime.bannerImage,

    vote_average: anime.averageScore
      ? anime.averageScore / 10
      : 0,

    release_date: anime.seasonYear
      ? `${anime.seasonYear}-01-01`
      : "",

    media_type: "anime",

    episodes: anime.episodes,

    genres: anime.genres,

    status: anime.status,
  }));
}
