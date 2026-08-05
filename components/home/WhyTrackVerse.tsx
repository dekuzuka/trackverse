"use client";

import {
  Clapperboard,
  Tv,
  Sparkles,
  Gamepad2,
  BookOpen,
  Music,
  Brain,
  BarChart3,
} from "lucide-react";

import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    icon: Clapperboard,
    title: "Movies",
    description:
      "Never lose your movie journey. Track every film you've watched and discover what's next.",
  },
  {
    icon: Tv,
    title: "TV Shows",
    description:
      "Keep every season, episode and binge session beautifully organized.",
  },
  {
    icon: Sparkles,
    title: "Anime",
    description:
      "Manage your anime journey with powerful tracking and recommendations.",
  },
  {
    icon: Gamepad2,
    title: "Games",
    description:
      "Track your gaming backlog and completed adventures.",
    comingSoon: true,
  },
  {
    icon: BookOpen,
    title: "Books",
    description:
      "Build your personal reading library and reading goals.",
    comingSoon: true,
  },
  {
    icon: Music,
    title: "Music",
    description:
      "Organize your favorite albums and artists in one place.",
    comingSoon: true,
  },
  {
    icon: Brain,
    title: "AI Recommendations",
    description:
      "Receive personalized recommendations based on your unique taste.",
    comingSoon: true,
  },
  {
    icon: BarChart3,
    title: "Statistics",
    description:
      "Visualize your entertainment habits with beautiful insights.",
    comingSoon: true,
  },
];

export default function WhyTrackVerse() {
  return (
    <section className="mx-auto max-w-7xl px-8 pt-40 pb-32">

      <div className="mx-auto mb-20 max-w-3xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          WHY TRACKVERSE
        </p>

        <h2 className="mt-5 text-5xl font-black tracking-tight">
          One Tracker.
          <br />
          Every Universe.
        </h2>

        <p className="mt-8 text-xl leading-9 text-zinc-400">
          Track movies, TV shows, anime and much more from a
          single beautiful platform designed around your
          entertainment journey.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            comingSoon={feature.comingSoon}
          />
        ))}

      </div>

    </section>
  );
}