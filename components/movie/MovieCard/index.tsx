"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Movie } from "@/lib/types";
import { useTrackPanel } from "@/context/TrackPanelContext";

import QuickPreview from "./QuickPreview";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({
  movie,
}: MovieCardProps) {
  const { openPanel } = useTrackPanel();

  const [hovered, setHovered] = useState(false);

  const poster =
    movie.poster_path?.startsWith("http")
      ? movie.poster_path
      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <motion.div
      layout
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <QuickPreview
        movie={movie}
        visible={hovered}
      />

      <div
        onClick={() => openPanel(movie)}
        className="cursor-pointer"
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            transition-all
            duration-500
            group-hover:border-cyan-400/60
            group-hover:shadow-[0_20px_60px_rgba(34,211,238,0.22)]
          "
        >
          <Image
            src={poster}
            alt={movie.title ?? movie.name ?? "Poster"}
            width={320}
            height={480}
            className="
              h-auto
              w-full
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
              group-hover:brightness-110
            "
          />

          {/* Cinematic Gradient */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-transparent
              to-transparent
              opacity-70
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />
        </div>

        <div className="mt-4">
          <h3
            className="
              line-clamp-1
              text-lg
              font-semibold
              tracking-tight
              transition-colors
              duration-300
              group-hover:text-cyan-300
            "
          >
            {movie.title ?? movie.name}
          </h3>

          <div
            className="
              mt-2
              flex
              items-center
              justify-between
              text-sm
              text-zinc-400
            "
          >
            <span className="font-medium">
              ⭐ {(movie.vote_average ?? 0).toFixed(1)}
            </span>

            <span>
              {(movie.release_date ??
                movie.first_air_date ??
                "").slice(0, 4)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}