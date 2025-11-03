import { create } from "zustand";
import { trackService } from "@/features/musics/services/track.service";
import { IComment, ITrack } from "@/shared/lib/types";

interface State {
  track: ITrack | null;
  tracks: ITrack[];
  setTracks: () => void;
  setTrack: (id: string) => void;
  setComment: (comment: IComment) => void;
}

export const useTracks = create<State>((set) => ({
  tracks: [],
  track: null,

  setTracks: async () => {
    const data = await trackService.getTracks();
    set({ tracks: data });
  },

  setTrack: async (id: string) => {
    const data = await trackService.getOne(id);
    set({ track: data });
  },

  setComment: async (comment) => {
    set(({ track }) =>
      track
        ? { track: { ...track, comments: [...track.comments, comment!] } }
        : {},
    );
  },
}));
