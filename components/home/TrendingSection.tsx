"use client";

import { useEffect, useState } from "react";
import { Movie } from "@/lib/types";
import MovieCard from "@/components/movie/MovieCard/index";

export default function TrendingSection() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      try {
        const res = await fetch("/api/trending");

        if (!res.ok) {
          throw new Error("Failed to fetch trending");
        }

        const data: Movie[] = await res.json();

        setMovies(data.slice(0, 6));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  return (
    <section className="w-full px-8 xl:px-10 2xl:px-14 py-20">

      {/* Section Header */}
      <div className="mb-12 flex items-center justify-between">

        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            DISCOVER
          </p>

          <h2 className="mt-3 text-4xl font-black">
            🔥 Trending Now
          </h2>
        </div>

        <button className="rounded-xl border border-cyan-400/20 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:bg-cyan-400/10">
          View All →
        </button>

      </div>

      {/* Loading */}
      {loading ? (
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-[420px] animate-pulse rounded-3xl bg-zinc-800"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-6">

          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}

        </div>
      )}

    </section>
  );
}