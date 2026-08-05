import { NextResponse } from "next/server";
import { getPopularAnime } from "@/lib/anilist";

export async function GET() {
  try {
    const anime = await getPopularAnime();

    return NextResponse.json(anime);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch anime" },
      { status: 500 }
    );
  }
}