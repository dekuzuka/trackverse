"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { Movie } from "@/lib/types";

interface QuickPreviewProps {
  movie: Movie;
  visible: boolean;
}

export default function QuickPreview({
  movie,
  visible,
}: QuickPreviewProps) {
  const backdrop = movie.backdrop_path
    ? movie.backdrop_path.startsWith("http")
      ? movie.backdrop_path
      : `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
    : movie.poster_path.startsWith("http")
    ? movie.poster_path
    : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const year = (
    movie.release_date ??
    movie.first_air_date ??
    ""
  ).slice(0, 4);

  const detailsHref =
    movie.media_type === "movie" || !movie.media_type
      ? `/title/movie/${movie.id}`
      : "#";

  const genres =
    Array.isArray(movie.genres) &&
    typeof movie.genres[0] === "string"
      ? (movie.genres as string[]).slice(0, 3).join(" • ")
      : "";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 10,
            scale: 0.97,
          }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 22,
          }}
          className="
            absolute
            left-1/2
            bottom-full
            z-50
            mb-3
            w-[340px]
            -translate-x-1/2
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[#08111E]/95
            shadow-[0_25px_70px_rgba(0,0,0,0.65)]
            backdrop-blur-2xl
          "
        >
          {/* Backdrop */}

          <div className="relative h-28 w-full">
            <Image
              src={backdrop}
              alt={movie.title ?? movie.name ?? ""}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#08111E] via-black/20 to-transparent" />
          </div>

          {/* Content */}

          <div className="p-4">

            <h3 className="line-clamp-1 text-lg font-bold">
              {movie.title ?? movie.name}
            </h3>

            <div className="mt-2 flex items-center gap-3 text-sm text-zinc-400">

              <span>
                ⭐ {(movie.vote_average ?? 0).toFixed(1)}
              </span>

              {year && <span>{year}</span>}

              {movie.media_type && (
                <span className="capitalize">
                  {movie.media_type}
                </span>
              )}

            </div>

            {genres && (
              <p className="mt-3 text-sm text-cyan-300">
                {genres}
              </p>
            )}

            <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-300">
              {movie.overview || "No description available."}
            </p>

            <div className="mt-5">

              <button
                className="
                  w-full
                  rounded-xl
                  bg-cyan-500
                  py-3
                  font-semibold
                  transition
                  hover:bg-cyan-400
                "
              >
                ▶ Continue Watching
              </button>

              <div className="mt-3 grid grid-cols-2 gap-3">

                <button
                  className="
                    rounded-xl
                    bg-white/5
                    py-3
                    transition
                    hover:bg-white/10
                  "
                >
                  ♡ Favorite
                </button>

                {/* TODO: Replace # with TV/anime detail routes when those pages are implemented. */}
                <Link
                  href={detailsHref}
                  className="
                    block
                    rounded-xl
                    bg-white/5
                    py-3
                    text-center
                    transition
                    hover:bg-white/10
                  "
                >
                  ⓘ Details
                </Link>

              </div>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
