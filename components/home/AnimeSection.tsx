"use client";

import { useEffect, useState } from "react";

import MovieCard from "@/components/movie/MovieCard";

import { Movie } from "@/lib/types";

export default function AnimeSection() {
  const [anime, setAnime] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAnime() {
      try {
        const res = await fetch("/api/anime/popular");

        if (!res.ok) {
          throw new Error("Failed to fetch anime");
        }

        const data = await res.json();

        setAnime(data.slice(0, 6));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadAnime();
  }, []);

  return (
    <section className="w-full px-8 xl:px-10 2xl:px-14 py-20">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
          ANIME
        </p>

        <h2 className="mt-3 text-4xl font-black">
          Anime Picks
        </h2>

        <p className="mt-3 text-zinc-400">
          Powered by AniList
        </p>
      </div>

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
          {anime.map((item) => (
            <MovieCard
              key={item.id}
              movie={item}
            />
          ))}
        </div>
      )}
    </section>
  );
}