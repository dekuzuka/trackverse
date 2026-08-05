"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { Movie } from "@/lib/types";

interface TrackPanelContextType {
  selectedMovie: Movie | null;
  isOpen: boolean;

  openPanel: (movie: Movie) => void;
  closePanel: () => void;
}

const TrackPanelContext =
  createContext<TrackPanelContextType | null>(null);

export function TrackPanelProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedMovie, setSelectedMovie] =
    useState<Movie | null>(null);

  const [isOpen, setIsOpen] =
    useState(false);

  function openPanel(movie: Movie) {
    setSelectedMovie(movie);
    setIsOpen(true);
  }

  function closePanel() {
    setIsOpen(false);
  }

  return (
    <TrackPanelContext.Provider
      value={{
        selectedMovie,
        isOpen,
        openPanel,
        closePanel,
      }}
    >
      {children}
    </TrackPanelContext.Provider>
  );
}

export function useTrackPanel() {
  const context = useContext(
    TrackPanelContext
  );

  if (!context) {
    throw new Error(
      "useTrackPanel must be used inside TrackPanelProvider"
    );
  }

  return context;
}