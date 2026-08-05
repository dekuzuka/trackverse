interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MoviePage({ params }: PageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-cyan-400">
          TrackVerse
        </h1>

        <p className="mt-6 text-2xl">
          Movie Details Page
        </p>

        <p className="mt-3 text-zinc-400">
          Movie ID: {id}
        </p>
      </div>
    </main>
  );
}