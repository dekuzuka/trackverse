import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

export const tmdb = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

/* ----------------------------- */
/* Trending */
/* ----------------------------- */

export async function getTrendingMovies() {
  const response = await tmdb.get("/trending/movie/week");
  return response.data.results;
}

export async function getTrendingTV() {
  const response = await tmdb.get("/trending/tv/week");
  return response.data.results;
}

export async function getTrendingAll() {
  const response = await tmdb.get("/trending/all/week");
  return response.data.results;
}

/* ----------------------------- */
/* Popular */
/* ----------------------------- */

export async function getPopularMovies() {
  const response = await tmdb.get("/movie/popular");
  return response.data.results;
}

export async function getPopularTVShows() {
  const response = await tmdb.get("/tv/popular");
  return response.data.results;
}

export async function getPopularAnime() {
  const response = await tmdb.get("/discover/tv", {
    params: {
      with_genres: 16,
      sort_by: "popularity.desc",
    },
  });

  return response.data.results;
}