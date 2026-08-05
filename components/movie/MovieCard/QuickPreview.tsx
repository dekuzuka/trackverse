"use client";

import { Movie } from "@/lib/types";

interface QuickPreviewProps {
  movie: Movie;
  visible: boolean;
}

export default function QuickPreview({
  movie,
  visible,
}: QuickPreviewProps) {
  return (
    <div
      className={`
        absolute
        left-1/2
        -translate-x-1/2
        bottom-full
        mb-4
        w-72
        rounded-2xl
        border
        border-white/10
        bg-[#0B1220]/95
        backdrop-blur-xl
        p-5
        shadow-2xl
        transition-all
        duration-200
        z-50
        ${
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }
      `}
    >
      <h3 className="text-lg font-bold">
        {movie.title || movie.name}
      </h3>

      <p className="text-zinc-400 mt-1">
        ⭐ {movie.vote_average.toFixed(1)}
      </p>

      <span className="inline-block mt-3 rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">
        Watching
      </span>

      <div className="mt-5 space-y-2">
        <button className="w-full rounded-xl bg-cyan-500 py-2 font-semibold hover:bg-cyan-400 transition">
          ▶ Continue
        </button>

        <button className="w-full rounded-xl bg-zinc-800 py-2 hover:bg-zinc-700 transition">
          ♡ Favorite
        </button>

        <button className="w-full rounded-xl bg-zinc-800 py-2 hover:bg-zinc-700 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  );
}