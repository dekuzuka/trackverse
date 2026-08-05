import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/home/Hero";
import MediaSection from "@/components/media/MediaSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020617] text-white">

      {/* Background */}
      <div className="fixed inset-0 -z-20 bg-[#020617]" />

      <div
        className="
          fixed
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_45%)]
        "
      />

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Trending */}
      <MediaSection
        label="DISCOVER"
        title="Trending Now"
        subtitle="The hottest movies and TV shows everyone is watching."
        endpoint="/api/trending"
        showViewAll
        viewAllHref="/discover"
      />

      {/* Anime */}
      <MediaSection
        label="ANIME"
        title="Anime Picks"
        subtitle="Powered by AniList."
        endpoint="/api/anime/popular"
        showViewAll
        viewAllHref="/anime"
      />

      {/* Movies */}
      <MediaSection
        label="MOVIES"
        title="Popular Movies"
        subtitle="The biggest blockbusters from around the world."
        endpoint="/api/movies/popular"
        showViewAll
        viewAllHref="/movies"
      />

      {/* TV */}
      <MediaSection
        label="TV"
        title="Popular TV Shows"
        subtitle="Binge-worthy series everyone is talking about."
        endpoint="/api/tv/popular"
        showViewAll
        viewAllHref="/tv"
      />

      {/* Next Sprint */}
      {/*
        <WhyTrackVerse />

        <Footer />
      */}

    </main>
  );
}