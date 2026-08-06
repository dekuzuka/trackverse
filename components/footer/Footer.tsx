"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617]">

      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="grid gap-16 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Link
              href="/"
              className="inline-block text-3xl font-black tracking-tight transition hover:opacity-90"
            >
              Track
              <span className="text-cyan-400">
                Verse
              </span>
            </Link>

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

              {/* TODO: Replace # with /discover when the Discover page is implemented. */}
              <Link
                href="#"
                className="block hover:text-cyan-400 transition"
              >
                Discover
              </Link>

              {/* TODO: Replace # with /movies when the Movies page is implemented. */}
              <Link
                href="#"
                className="block hover:text-cyan-400 transition"
              >
                Movies
              </Link>

              {/* TODO: Replace # with /tv when the TV page is implemented. */}
              <Link
                href="#"
                className="block hover:text-cyan-400 transition"
              >
                TV Shows
              </Link>

              {/* TODO: Replace # with /anime when the Anime page is implemented. */}
              <Link
                href="#"
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

              {/* TODO: Replace # with /games when the Games page is implemented. */}
              <Link
                href="#"
                className="block hover:text-cyan-400 transition"
              >
                Games (Soon)
              </Link>

              {/* TODO: Replace # with /books when the Books page is implemented. */}
              <Link
                href="#"
                className="block hover:text-cyan-400 transition"
              >
                Books (Soon)
              </Link>

              {/* TODO: Replace # with /music when the Music page is implemented. */}
              <Link
                href="#"
                className="block hover:text-cyan-400 transition"
              >
                Music (Soon)
              </Link>

              {/* TODO: Replace # with /statistics when the Statistics page is implemented. */}
              <Link
                href="#"
                className="block hover:text-cyan-400 transition"
              >
                Statistics (Soon)
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-6 font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <div className="space-y-4 text-zinc-400">

              {/* TODO: Replace # with /about when the About page is implemented. */}
              <Link
                href="#"
                className="block hover:text-cyan-400 transition"
              >
                About
              </Link>

              {/* TODO: Replace # with /roadmap when the Roadmap page is implemented. */}
              <Link
                href="#"
                className="block hover:text-cyan-400 transition"
              >
                Roadmap
              </Link>

              {/* TODO: Replace # with /privacy when the Privacy page is implemented. */}
              <Link
                href="#"
                className="block hover:text-cyan-400 transition"
              >
                Privacy
              </Link>

              {/* TODO: Replace # with /terms when the Terms page is implemented. */}
              <Link
                href="#"
                className="block hover:text-cyan-400 transition"
              >
                Terms
              </Link>

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
