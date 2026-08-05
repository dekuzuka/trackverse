"use client";

import { useEffect, useState } from "react";
import { Movie } from "@/lib/types";
import MovieCard from "@/components/movie/MovieCard";

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

        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  return (
    <section className="relative w-full px-8 xl:px-12 2xl:px-16 pt-32 pb-24">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[180px]" />
      </div>

      {/* Header */}
      <div className="mb-16 flex items-end justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
            DISCOVER
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-white">
            Trending Now
          </h2>

          <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-400">
            Discover the biggest movies, TV shows and anime everyone's
            watching this week.
          </p>

        </div>

        <button
          className="
            rounded-2xl
            border
            border-cyan-400/20
            bg-white/[0.03]
            px-7
            py-3.5
            text-sm
            font-semibold
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-cyan-400/10
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
          "
        >
          View All →
        </button>

      </div>

      {/* Movies */}

      {loading ? (

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="aspect-[2/3] animate-pulse rounded-3xl bg-zinc-900"
            />
          ))}

        </div>

      ) : (

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

          {movies.slice(0, 6).map((movie) => (

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