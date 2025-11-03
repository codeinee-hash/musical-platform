import { create } from "zustand";
import { ITrack } from "@/shared/lib/types";

interface State {
  active: ITrack | null;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
  setPause: (value: boolean) => void;
  setVolume: (value: number) => void;
  setDuration: (value: number) => void;
  setCurrentTime: (value: number) => void;
  setActiveTrack: (track: ITrack) => void;
}

export const usePlayer = create<State>((set) => ({
  active: null,
  volume: 50,
  duration: 0,
  currentTime: 0,
  pause: true,

  setPause: (pause: boolean) => set({ pause }),
  setVolume: (volume: number) => set({ volume }),
  setDuration: (duration: number) => set({ duration }),
  setCurrentTime: (currentTime: number) => set({ currentTime }),
  setActiveTrack: (active: ITrack) => set({ active }),
}));
