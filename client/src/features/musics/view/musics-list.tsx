import {ITrack} from "@/shared/lib/types";
import {MusicCard} from "@/features/musics/view/music-card";


export function MusicsList({ tracks }: { tracks: ITrack[] }) {
    return (
        <div className="grid grid-cols-4 gap-10">
            {tracks.map((track) => <MusicCard key={track._id} track={track} active={false} />)}
        </div>
    );
}
