import { HeroActions, MusicsList, trackService } from "@/features/musics";
import { HeroBlock } from "@/shared/ui/hero";

export default async function Musics() {
  const tracks = await trackService.getTracks();

  return (
    <div className="flex flex-col gap-10">
      <HeroBlock
        title="Tracks"
        subtitle="All tracks"
        actions={<HeroActions />}
      />

      <MusicsList tracks={tracks} />
    </div>
  );
}
