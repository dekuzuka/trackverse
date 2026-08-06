"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import MovieCard from "@/components/movie/MovieCard";
import { Movie } from "@/lib/types";

interface MediaSectionProps {
  label: string;
  title: string;
  subtitle?: string;

  endpoint: string;

  limit?: number;

  showViewAll?: boolean;

  viewAllHref?: string;
}

export default function MediaSection({
  label,
  title,
  subtitle,

  endpoint,

  limit = 6,

  showViewAll = false,

  viewAllHref = "#",
}: MediaSectionProps) {
  const [media, setMedia] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadMedia() {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch(endpoint);

        if (!res.ok) {
          throw new Error("Failed to fetch media");
        }

        const data: Movie[] = await res.json();

        setMedia(data.slice(0, limit));
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadMedia();
  }, [endpoint, limit]);

  return (
    <section className="w-full px-8 py-20 xl:px-10 2xl:px-14">

      {/* Header */}

      <div className="mb-12 flex items-end justify-between">

        <div>

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

        {showViewAll && (
          <Link
            href={viewAllHref}
            className="
              rounded-xl
              border
              border-cyan-400/20
              bg-white/5
              px-6
              py-3
              text-sm
              font-semibold
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-400/10
            "
          >
            View All →
          </Link>
        )}

      </div>

      {/* Loading */}

      {loading ? (
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-6">

          {Array.from({ length: limit }).map((_, index) => (
            <div key={index}>

              <div className="h-[420px] animate-pulse rounded-3xl bg-zinc-800" />

              <div className="mt-4 h-5 w-4/5 animate-pulse rounded bg-zinc-800" />

              <div className="mt-3 h-4 w-2/5 animate-pulse rounded bg-zinc-800" />

            </div>
          ))}

        </div>
      ) : error ? (

        <div className="flex h-[220px] items-center justify-center rounded-3xl border border-red-500/20 bg-red-500/5">

          <div className="text-center">

            <h3 className="text-xl font-semibold text-red-400">
              Couldn&apos;t load this section.
            </h3>

            <p className="mt-2 text-zinc-400">
              Please try again later.
            </p>

          </div>

        </div>

      ) : media.length === 0 ? (

        <div className="flex h-[220px] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03]">

          <p className="text-zinc-400">
            No media found.
          </p>

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
