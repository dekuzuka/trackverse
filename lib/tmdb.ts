import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

export const tmdb = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

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