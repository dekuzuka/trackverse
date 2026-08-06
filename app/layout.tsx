import type { Metadata } from "next";
import "./globals.css";

import { TrackPanelProvider } from "@/context/TrackPanelContext";
import MyVersePanel from "@/components/MyVersePanel";

export const metadata: Metadata = {
  title: "TrackVerse",
  description: "Everything you've watched. Everything you'll love next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full bg-[#050816] text-white">
        <TrackPanelProvider>
          {children}

          <MyVersePanel />
        </TrackPanelProvider>
      </body>
    </html>
  );
}
