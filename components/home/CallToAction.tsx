import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative mx-auto max-w-7xl px-8 pt-8 pb-32">
      <div
        className="
          pointer-events-none
          absolute
          inset-x-8
          top-4
          -z-10
          h-72
          rounded-full
          bg-cyan-400/15
          blur-[120px]
        "
      />

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          px-8
          py-12
          text-center
          shadow-[0_0_80px_rgba(34,211,238,0.10)]
          backdrop-blur-2xl
          sm:px-12
          sm:py-16
          lg:px-20
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%)]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            border
            border-cyan-300/20
            bg-cyan-400/10
            blur-2xl
          "
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            READY TO START?
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Build Your Entertainment Universe.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9">
            Track every movie, TV show and anime you&apos;ve watched. Discover
            what to watch next and keep your entertainment journey beautifully
            organized.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              // TODO: Replace # with /myverse when the tracking onboarding flow is implemented.
              href="#"
              className="
                inline-flex
                min-h-14
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-cyan-400
                px-8
                py-4
                text-base
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
                sm:w-auto
                sm:text-lg
              "
            >
              Start Tracking
              <ArrowRight size={20} aria-hidden="true" />
            </Link>

            <Link
              // TODO: Replace # with /discover when the Discover page is implemented.
              href="#"
              className="
                inline-flex
                min-h-14
                w-full
                items-center
                justify-center
                rounded-2xl
                border
                border-cyan-400/25
                bg-white/5
                px-8
                py-4
                text-base
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/50
                hover:bg-cyan-400/10
                sm:w-auto
                sm:text-lg
              "
            >
              Explore Discover
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
