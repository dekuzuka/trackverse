import { NextResponse } from "next/server";
import { getPopularTVShows } from "@/lib/tmdb";

export async function GET() {
  try {
    const shows = await getPopularTVShows();

    return NextResponse.json(shows);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch popular TV shows" },
      { status: 500 }
    );
  }
}