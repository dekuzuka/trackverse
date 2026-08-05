"use client";

import { useTrackPanel } from "@/context/TrackPanelContext";

export default function MyVersePanel() {
  const { isOpen, selectedMovie, closePanel } = useTrackPanel();

  if (!isOpen || !selectedMovie) {
    return null;
  }

  return (
    <>
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={closePanel}
      />

      {/* Side Panel */}
      <div className="fixed top-0 right-0 h-full w-[420px] bg-[#111827]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 p-6 overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={closePanel}
          className="absolute top-5 right-5 text-2xl hover:text-cyan-400 transition"
        >
          ✕
        </button>

        {/* Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
          alt={selectedMovie.title || selectedMovie.name || ""}
          className="w-full rounded-2xl mb-6"
        />

        {/* Title */}
        <h1 className="text-3xl font-bold">
          {selectedMovie.title || selectedMovie.name}
        </h1>

        <p className="text-zinc-400 mt-2">
          ⭐ {selectedMovie.vote_average.toFixed(1)}
        </p>

        <div className="mt-8">
          <h2 className="font-semibold text-lg mb-4">Status</h2>

          <div className="space-y-3">
            <button className="w-full rounded-xl bg-cyan-500 py-3 font-semibold hover:bg-cyan-400 transition">
              Watching
            </button>

            <button className="w-full rounded-xl bg-zinc-800 py-3 hover:bg-zinc-700 transition">
              Plan To Watch
            </button>

            <button className="w-full rounded-xl bg-zinc-800 py-3 hover:bg-zinc-700 transition">
              Completed
            </button>

            <button className="w-full rounded-xl bg-zinc-800 py-3 hover:bg-zinc-700 transition">
              On Hold
            </button>

            <button className="w-full rounded-xl bg-zinc-800 py-3 hover:bg-zinc-700 transition">
              Dropped
            </button>
          </div>
        </div>

        <button className="mt-8 w-full rounded-xl border border-cyan-400 py-3 hover:bg-cyan-500/20 transition">
          More Info →
        </button>
      </div>
    </>
  );
}