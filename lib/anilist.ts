import { GraphQLClient, gql } from "graphql-request";

const anilist = new GraphQLClient("https://graphql.anilist.co");

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

export async function getPopularAnime(page = 1, perPage = 12) {
  const data = await anilist.request(POPULAR_ANIME_QUERY, {
    page,
    perPage,
  });

return data.Page.media.map((anime: any) => ({
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
