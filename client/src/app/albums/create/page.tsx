import { trackService } from "@/features/musics";
import { CreateAlbumForm } from "@/features/albums";

export default async function CreateAlbumPage() {
  const tracks = await trackService.getTracks();
  const selectTrackItems = tracks.map((track) => ({
    key: track._id,
    label: track.name,
  }));

  return (
    <div>
      <CreateAlbumForm selectItems={selectTrackItems} />
    </div>
  );
}
