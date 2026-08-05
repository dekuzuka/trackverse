"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* =======================================================
   MASTER CONFIG
======================================================= */

const CONFIG = {
  anchorX: 160,
  baselineY: 60,

  overlap: 135,

  float: 20,

  heroScale: 1.35,

  deskWidth: 1180,
};

/* =======================================================
   POSTER DATA
======================================================= */

const posters = [
  {
    title: "House of the Dragon",
    image: "/posters/house-of-the-dragon.jpeg",

    offset: -2.1,
    scale: 0.84,

    y: 35,

    z: 10,

    delay: 0,
  },

  {
    title: "Solo Leveling",
    image: "/posters/solo-levelling.jpeg",

    offset: -1.0,
    scale: 0.93,

    y: -5,

    z: 25,

    delay: 0.35,
  },

  {
    title: "The Odyssey",
    image: "/posters/odyssey.jpeg",

    offset: 0,
    scale: 1.18,

    y: -30,

    z: 60,

    delay: 0.7,
  },

  {
    title: "Superman",
    image: "/posters/superman.jpeg",

    offset: 1.35,
    scale: 1.02,

    y: -5,

    z: 40,

    delay: 1.05,
  },

  {
    title: "One Piece",
    image: "/posters/one-piece.jpeg",

    offset: 2.45,
    scale: 0.86,

    y: 25,

    z: 20,

    delay: 1.4,
  },

  {
    title: "The Last of Us",
    image: "/posters/the-last-of-us.jpeg",

    offset: 3.15,
    scale: 0.88,

    y: 45,

    z: 15,

    delay: 1.75,
  },
];

export default function PosterRibbon() {
  return (
    <div
      className="
        relative
        h-[760px]
        w-full
        overflow-visible
      "
    >

      {/* ===================================================
          AMBIENT GLOW
      =================================================== */}

      <div
        className="
          absolute
          right-[80px]
          top-[20px]
          h-[760px]
          w-[760px]
          rounded-full
          bg-cyan-400/8
          blur-[170px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          right-[-140px]
          bottom-[0]
          h-[520px]
          w-[760px]
          rounded-full
          bg-blue-500/10
          blur-[150px]
          pointer-events-none
        "
      />

      {/* ===================================================
          POSTER STAGE
      =================================================== */}

      <div
        className="
          absolute
          inset-0
          overflow-visible
        "
      >
            {posters.map((poster) => {
        const width = 280 * poster.scale * CONFIG.heroScale;
        const height = width * 1.4;

        const x =
          CONFIG.anchorX +
          poster.offset * CONFIG.overlap;

        const y =
          CONFIG.baselineY +
          poster.y;

        return (
          <motion.div
            key={poster.title}
            className="absolute origin-bottom"

            style={{
              left: `${x}px`,
              top: `${y}px`,
              width: `${width}px`,
              height: `${height}px`,
              zIndex: poster.z,
            }}

            animate={{
              y: [0, -CONFIG.float, 0],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: poster.delay,
            }}
          >
            <motion.div
              whileHover={{
                y: -14,
                scale: 1.03,
              }}

              transition={{
                duration: 0.25,
              }}

              className="
                group
                relative
                h-full
                w-full
                overflow-hidden
                rounded-[26px]
                border
                border-white/10
                bg-[#090b10]
                shadow-[0_45px_100px_rgba(0,0,0,0.60)]
                cursor-pointer
              "
            >

              {/* Odyssey Glow */}

              {poster.title === "The Odyssey" && (
                <div
                  className="
                    absolute
                    -inset-8
                    -z-10
                    rounded-full
                    bg-cyan-400/18
                    blur-[120px]
                  "
                />
              )}

              {/* Glass Border */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-[26px]
                  border
                  border-white/10
                  pointer-events-none
                  z-20
                "
              />

              {/* Hover Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                  bg-gradient-to-t
                  from-cyan-400/15
                  via-transparent
                  to-white/5
                  z-10
                "
              />

              <Image
                src={poster.image}
                alt={poster.title}
                fill
                priority
                sizes="300px"
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-[1.03]
                "
              />

            </motion.div>

          </motion.div>
        );
      })}
      </div>

      {/* ===================================================
    GLASS DESK V2
=================================================== */}

<div
  className="absolute pointer-events-none"
  style={{
    left: `${CONFIG.anchorX - 210}px`,
    top: `${CONFIG.baselineY + 430}px`,
    width: "900px",
    height: "220px",
  }}
>
  {/* Glass Base */}

  <div
    className="
      absolute
      inset-0
      rounded-[999px]
      border
      border-white/8
      bg-white/[0.025]
      backdrop-blur-3xl
      shadow-[0_25px_70px_rgba(0,0,0,0.45)]
    "
  />

  {/* Cyan Edge */}

  <div
    className="
      absolute
      top-0
      left-[10%]
      right-[10%]
      h-[1px]
      bg-gradient-to-r
      from-transparent
      via-cyan-400/70
      to-transparent
    "
  />

  {/* Under Glow */}

  <div
    className="
      absolute
      left-1/2
      -translate-x-1/2
      top-[28px]
      w-[75%]
      h-[60px]
      rounded-full
      bg-cyan-400/10
      blur-[45px]
    "
  />
</div>

      {/* ===================================================
          FLOOR REFLECTION
      =================================================== */}

      <div
        className="absolute pointer-events-none"
        style={{
          left: `${CONFIG.anchorX - 650}px`,
          top: `${CONFIG.baselineY + 390}px`,
          width: "900px",
          height: "130px",
        }}
      >
        <div
          className="
            h-full
            w-full
            rounded-full
            bg-gradient-to-t
            from-cyan-400/12
            via-cyan-400/5
            to-transparent
            blur-[65px]
          "
        />
      </div>

      {/* ===================================================
          BOTTOM GLOW
      =================================================== */}

      <div
        className="
          absolute
          bottom-[40px]
          left-1/2
          h-[260px]
          w-[1500px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[160px]
          pointer-events-none
        "
      />

      {/* ===================================================
          SUBTLE RADIAL FADE
      =================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_70%_35%,rgba(34,211,238,0.04),transparent_45%)]
        "
      />

    </div>
  );
}