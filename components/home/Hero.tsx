import PosterRibbon from "./PosterRibbon";

export default function Hero() {
  return (
      <section
        className="
          relative
          mx-auto
          flex
          min-h-[980px]
          max-w-[1900px]
          items-center
          overflow-visible
          px-16
          pt-8
          pb-24
        "
      >
        {/* LEFT SIDE */}

        <div
          className="
            relative
            z-30
            w-[46%]
          "
        >
          {/* Small Label */}

          <p
            className="
              mb-7
              text-sm
              font-semibold
              uppercase
              tracking-[0.42em]
              text-cyan-400
            "
          >
            Welcome to TrackVerse
          </p>

          {/* Heading */}

          <h1
            className="
              text-[72px]
              font-black
              leading-[1.02]
              tracking-[-0.03em]
            "
          >
            Everything You've
            <br />
            Watched.
            <br />

            <span className="text-cyan-400">
              Everything You'll
            </span>

            <br />

            <span className="text-cyan-400">Love Next.</span>
          </h1>

          {/* Description */}

          <div className="mt-9 space-y-5">

            <p className="max-w-[560px] text-xl leading-9 text-zinc-300">
              Automatically track movies, TV shows and anime
              across every streaming platform.
            </p>

            <p className="max-w-[560px] text-xl leading-9 text-zinc-400">
              Discover, organize and never lose your
              entertainment journey.
            </p>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex gap-5">

            <button
              className="
                rounded-2xl
                bg-cyan-400
                px-10
                py-5
                text-lg
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
              "
            >
              Start Tracking →
            </button>

            <button
              className="
                rounded-2xl
                border
                border-cyan-400/25
                bg-white/5
                px-10
                py-5
                text-lg
                font-semibold
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-cyan-400/10
              "
            >
              Explore →
            </button>

          </div>

        </div>

        <div className="relative z-10 overflow-visible w-[54%]">
          <PosterRibbon />
        </div>

      </section>
    );
  }