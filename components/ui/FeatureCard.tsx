"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  comingSoon?: boolean;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  comingSoon = false,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/50
        hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
      "
    >
      {comingSoon && (
        <span
          className="
            absolute
            right-5
            top-5
            rounded-full
            bg-cyan-500/15
            px-3
            py-1
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-cyan-300
          "
        >
          Coming Soon
        </span>
      )}

      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-cyan-500/10
        "
      >
        <Icon
          size={28}
          className="text-cyan-400"
        />
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}