import { HeroBlock } from "@/shared/ui/hero";
import { AlbumHeroActions, AlbumList, albumService } from "@/features/albums";

export default async function AlbumsPage() {
  const albums = await albumService.getAll();

  return (
    <div className="mb-20">
      <HeroBlock
        title="Albums"
        subtitle="All albums"
        actions={<AlbumHeroActions />}
      />
      <AlbumList albums={albums} />
    </div>
  );
}
