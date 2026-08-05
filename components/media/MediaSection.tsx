"use client";

import { useEffect, useState } from "react";

import MovieCard from "@/components/movie/MovieCard";
import { Movie } from "@/lib/types";

interface MediaSectionProps {
  label: string;
  title: string;
  subtitle?: string;
  endpoint: string;
  limit?: number;
}

export default function MediaSection({
  label,
  title,
  subtitle,
  endpoint,
  limit = 6,
}: MediaSectionProps) {
  const [media, setMedia] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMedia() {
      try {
        const res = await fetch(endpoint);

        if (!res.ok) {
          throw new Error("Failed to fetch media");
        }

        const data: Movie[] = await res.json();

        setMedia(data.slice(0, limit));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadMedia();
  }, [endpoint, limit]);

  return (
    <section className="w-full px-8 xl:px-10 2xl:px-14 py-20">
      {/* Header */}
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
          {label}
        </p>

        <h2 className="mt-3 text-4xl font-black">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-3 text-zinc-400">
            {subtitle}
          </p>
        )}
      </div>

      {/* Loading */}
      {loading ? (
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-6">
          {Array.from({ length: limit }).map((_, index) => (
            <div
              key={index}
              className="h-[420px] animate-pulse rounded-3xl bg-zinc-800"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-6">
          {media.map((item) => (
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