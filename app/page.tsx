import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/home/Hero";
import TrendingSection from "@/components/home/TrendingSection";

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

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Rest of Homepage */}
      <TrendingSection />
    </main>
  );
}