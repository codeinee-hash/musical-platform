import { AddCommentForm, CommentList, trackService } from "@/features/musics";
import { HeroBlock } from "@/shared/ui/hero";

export default async function DetailTrackPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const track = await trackService.getOne(id);

  if (!track) {
    return (
      <HeroBlock
        title="Track Not Found"
        subtitle="The track you are looking for does not exist."
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroBlock
        title={`${track?.name} - ${track?.artist}`}
        subtitle={`🎧 ${track?.listens.toLocaleString()} listens • ${track?.text}`}
      />

      <div className="max-w-4xl mx-auto py-12 space-y-12">
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-black">
              Comments ({track?.comments.length})
            </h2>
          </div>

          <AddCommentForm trackId={id} />

          <CommentList comments={track?.comments} />
        </section>
      </div>
    </div>
  );
}
