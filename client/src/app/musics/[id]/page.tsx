"use client";

import {useEffect} from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@heroui/react";
import {ArrowLeft} from "lucide-react";
import {AddCommentForm, CommentList, useTracks} from "@/features/musics";
import { HeroBlock } from "@/shared/ui/hero";
import { APP_ROUTES } from "@/shared/lib/const";


export default function DetailTrackPage() {
    const { id } = useParams<{ id: string }>();

    const { track, setTrack } = useTracks();

    useEffect(() => {
        setTrack(id);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <HeroBlock
                title={`${track?.name} - ${track?.artist}`}
                subtitle={`🎧 ${track?.listens.toLocaleString()} listens • ${track?.text}`}
                actions={
                    <Button variant="solid" color="primary" as={Link} href={APP_ROUTES.MUSICS}>
                        <ArrowLeft size={20} />
                        Back to Tracks
                    </Button>
                }
            />

            <div className="max-w-4xl mx-auto py-12 space-y-12">
                <section className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-black">Comments ({track?.comments.length})</h2>
                    </div>

                    <AddCommentForm trackId={id} />

                    <CommentList comments={track?.comments} />
                </section>
            </div>
        </div>
    );
}