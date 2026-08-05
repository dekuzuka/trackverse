import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

export const tmdb = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

/* -------------------------------- */
/* TMDB → TrackVerse Media Mapper */
/* -------------------------------- */

function normalizeMedia(item: any) {
  return {
    id: item.id,

    title: item.title ?? item.name,

    name: item.name,

    poster_path: item.poster_path,

    backdrop_path: item.backdrop_path,

    vote_average: item.vote_average ?? 0,

    release_date:
      item.release_date ??
      item.first_air_date ??
      "",

    first_air_date: item.first_air_date,

    overview: item.overview,

    media_type:
      item.media_type ??
      (item.title ? "movie" : "tv"),

    genres: item.genre_ids ?? [],

    adult: item.adult,

    original_language: item.original_language,
  };
}

/* -------------------------------- */
/* Generic Fetcher */
/* -------------------------------- */

async function fetchMedia(endpoint: string, params = {}) {
  const response = await tmdb.get(endpoint, {
    params,
  });

  return response.data.results.map(normalizeMedia);
}

/* -------------------------------- */
/* Trending */
/* -------------------------------- */

export function getTrendingMovies() {
  return fetchMedia("/trending/movie/week");
}

export function getTrendingTV() {
  return fetchMedia("/trending/tv/week");
}

export function getTrendingAll() {
  return fetchMedia("/trending/all/week");
}

/* -------------------------------- */
/* Popular */
/* -------------------------------- */

export function getPopularMovies() {
  return fetchMedia("/movie/popular");
}

export function getPopularTVShows() {
  return fetchMedia("/tv/popular");
}

export function getPopularAnime() {
  return fetchMedia("/discover/tv", {
    with_genres: 16,
    sort_by: "popularity.desc",
  });
}