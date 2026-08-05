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

  return (
    <motion.div
      layout
      whileHover={{ y: -10 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Quick Preview */}
      <QuickPreview
        movie={movie}
        visible={hovered}
      />

      {/* Card */}
      <div
        onClick={() => openPanel(movie)}
        className="cursor-pointer"
      >
        {/* Poster */}
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            transition-all
            duration-300
            group-hover:border-cyan-400/50
            group-hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
          "
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || movie.name || ""}
            width={320}
            height={480}
            className="
              h-auto
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Information */}
        <div className="mt-4">

          <h3
            className="
              line-clamp-1
              text-lg
              font-semibold
              tracking-tight
            "
          >
            {movie.title || movie.name}
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
              ⭐ {movie.vote_average.toFixed(1)}
            </span>

            <span>
              {(movie.release_date ||
                movie.first_air_date ||
                "").slice(0, 4)}
            </span>
          </div>

        </div>

      </div>
    </motion.div>
  );
}