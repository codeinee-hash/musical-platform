import { ITrack } from "@/shared/lib/types";
import { MusicCard } from "@/features/musics/view/music-card";

export function MusicsList({ tracks }: { tracks: ITrack[] }) {
  if (tracks.length === 0) {
    return (
      <h2 className="text-2xl font-semibold text-center text-slate-400">
        No data tracks found.
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-10 pb-20">
      {tracks.map((track) => (
        <MusicCard key={track._id} track={track} />
      ))}
    </div>
  );
}
