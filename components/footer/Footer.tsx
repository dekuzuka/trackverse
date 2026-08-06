"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617]">

      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="grid gap-16 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-black tracking-tight">
              Track
              <span className="text-cyan-400">
                Verse
              </span>
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Your entertainment universe in one place.
              Track movies, TV shows and anime beautifully.
            </p>

          </div>

          {/* Explore */}

          <div>

            <h3 className="mb-6 font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <div className="space-y-4 text-zinc-400">

              <Link
                href="/discover"
                className="block hover:text-cyan-400 transition"
              >
                Discover
              </Link>

              <Link
                href="/movies"
                className="block hover:text-cyan-400 transition"
              >
                Movies
              </Link>

              <Link
                href="/tv"
                className="block hover:text-cyan-400 transition"
              >
                TV Shows
              </Link>

              <Link
                href="/anime"
                className="block hover:text-cyan-400 transition"
              >
                Anime
              </Link>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="mb-6 font-semibold uppercase tracking-wider text-white">
              Product
            </h3>

            <div className="space-y-4 text-zinc-400">

              <p>Games (Soon)</p>

              <p>Books (Soon)</p>

              <p>Music (Soon)</p>

              <p>Statistics (Soon)</p>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-6 font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <div className="space-y-4 text-zinc-400">

              <p>About</p>

              <p>Roadmap</p>

              <p>Privacy</p>

              <p>Terms</p>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 TrackVerse. All rights reserved.
          </p>

          <p>
            Built with Next.js • TMDB • AniList
          </p>

        </div>

      </div>

    </footer>
  );
}