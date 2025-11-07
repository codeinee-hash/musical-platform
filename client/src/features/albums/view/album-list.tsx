import { IAlbum } from "@/shared/lib/types";
import { AlbumCard } from "./album-card";

export function AlbumList({ albums }: { albums: IAlbum[] }) {
  if (albums.length === 0) {
    return (
      <h1 className="text-2xl font-semibold text-center text-slate-400 mt-10">
        No albums
      </h1>
    );
  }

  return (
    <div className="flex flex-col gap-6 mt-10">
      {albums.map((album) => (
        <AlbumCard key={album._id} album={album} />
      ))}
    </div>
  );
}
