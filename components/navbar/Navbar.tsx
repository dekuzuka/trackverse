import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-5 pt-4">
      <nav
        className="
          mx-auto
          flex
          h-[84px]
          w-full
          items-center
          justify-between
          rounded-2xl
          border
          border-cyan-400/10
          bg-[#050816]/80
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          px-8
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition duration-300 hover:opacity-90"
        >
          <Image
            src="/Trackverse.png"
            alt="TrackVerse"
            width={210}
            height={55}
            priority
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-10">

          <Link
            href="/"
            className="relative font-semibold text-cyan-400"
          >
            Home

            <span
              className="
                absolute
                -bottom-3
                left-1/2
                h-[3px]
                w-10
                -translate-x-1/2
                rounded-full
                bg-cyan-400
              "
            />
          </Link>

          {/* TODO: Replace # with /myverse when the MyVerse page is implemented. */}
          <Link
            href="#"
            className="font-medium text-white transition hover:text-cyan-400"
          >
            MyVerse
          </Link>

          {/* TODO: Replace # with /movies when the Movies page is implemented. */}
          <Link
            href="#"
            className="font-medium text-white transition hover:text-cyan-400"
          >
            Movies
          </Link>

          {/* TODO: Replace # with /tv when the TV page is implemented. */}
          <Link
            href="#"
            className="font-medium text-white transition hover:text-cyan-400"
          >
            TV Shows
          </Link>

          {/* TODO: Replace # with /anime when the Anime page is implemented. */}
          <Link
            href="#"
            className="font-medium text-white transition hover:text-cyan-400"
          >
            Anime
          </Link>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* TODO: Replace # with /search when the Search page is implemented. */}
          <Link
            href="#"
            className="
              rounded-full
              p-2
              transition
              hover:bg-white/10
            "
            aria-label="Search"
          >
            <Search
              size={22}
              className="text-white"
            />
          </Link>

          {/* TODO: Replace # with /login when authentication pages are implemented. */}
          <Link
            href="#"
            className="font-medium text-white transition hover:text-cyan-400"
          >
            Log in
          </Link>

          {/* TODO: Replace # with /signup when authentication pages are implemented. */}
          <Link
            href="#"
            className="
              rounded-xl
              bg-cyan-400
              px-7
              py-3
              font-semibold
              text-black
              transition
              duration-300
              hover:scale-105
              hover:bg-cyan-300
              hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]
            "
          >
            Sign Up
          </Link>

        </div>
      </nav>
    </header>
  );
}
