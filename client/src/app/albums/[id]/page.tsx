import { albumService } from "@/features/albums";
import { HeroBlock } from "@/shared/ui/hero";
import { AlbumTrackCard } from "@/features/albums";

export default async function DetailAlbumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const album = await albumService.getOne(id);

  if (!album) {
    return (
      <HeroBlock
        title="Album Not Found"
        subtitle="The album you are looking for does not exist."
      />
    );
  }

  return (
    <div className="mb-20">
      <HeroBlock
        title={`${album.title} - ${album.artist}`}
        subtitle={album.description}
      />

      <h2 className="text-2xl font-semibold text-slate-400 mt-10 mb-4">
        Tracks:
      </h2>
      <div className="flex flex-col gap-4">
        {album.tracks?.map((track) => (
          <AlbumTrackCard key={track._id} track={track} />
        ))}
      </div>
    </div>
  );
}
