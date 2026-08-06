import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/home/Hero";
import MediaSection from "@/components/media/MediaSection";
import WhyTrackVerse from "@/components/home/WhyTrackVerse";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/footer/Footer";

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
        // TODO: Replace # with /discover when the Discover page is implemented.
        viewAllHref="#"
      />

      {/* Anime */}
      <MediaSection
        label="ANIME"
        title="Anime Picks"
        subtitle="Powered by AniList."
        endpoint="/api/anime/popular"
        showViewAll
        // TODO: Replace # with /anime when the Anime page is implemented.
        viewAllHref="#"
      />

      {/* Movies */}
      <MediaSection
        label="MOVIES"
        title="Popular Movies"
        subtitle="The biggest blockbusters from around the world."
        endpoint="/api/movies/popular"
        showViewAll
        // TODO: Replace # with /movies when the Movies page is implemented.
        viewAllHref="#"
      />

      {/* TV */}
      <MediaSection
        label="TV"
        title="Popular TV Shows"
        subtitle="Binge-worthy series everyone is talking about."
        endpoint="/api/tv/popular"
        showViewAll
        // TODO: Replace # with /tv when the TV page is implemented.
        viewAllHref="#"
      />

      <WhyTrackVerse />

      <CallToAction />

      {/* Footer */}
      <Footer />

    </main>
  );
}
