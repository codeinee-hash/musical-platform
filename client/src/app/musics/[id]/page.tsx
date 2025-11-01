"use client";

import { useParams } from "next/navigation";
import { Button } from "@heroui/react";
import Link from "next/link";
import { APP_ROUTES } from "@/shared/lib/const";
import { HeroBlock } from "@/shared/ui/hero";
import {ArrowLeft, MessageCircle, Star} from "lucide-react";
import { ITrack } from "@/shared/lib/types";
import {AddCommentForm, CommentList} from "@/features/musics";
import {useState} from "react";
import {Card} from "@heroui/card";

// Mock data (замени на реальные данные)
const mockTrack: ITrack = {
    _id: "1",
    name: "Summer Vibes",
    artist: "Ocean Sounds",
    text: "A relaxing summer track with gentle waves and soft melodies. Perfect for beach vibes and sunset moments.",
    listens: 12456,
    picture: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    audio: "",
    comments: [
        {
            _id: "1",
            username: "Alex Johnson",
            text: "Love this track! Perfect for working from home ☕"
        },
        {
            _id: "2",
            username: "Sarah M.",
            text: "So calming, helps me focus during long coding sessions"
        },
        {
            _id: "3",
            username: "Mike D.",
            text: "Great quality audio, feels like I'm actually at the beach!"
        }
    ]
};

export default function DetailTrackPage() {
    const [isAddingComment, setIsAddingComment] = useState(false);
    const { id } = useParams<{ id: string }>();

    return (
        <div className="min-h-screen bg-background">
            <HeroBlock
                title={`${mockTrack.name} - ${mockTrack.artist}`}
                subtitle={`🎧 ${mockTrack.listens.toLocaleString()} listens • ${mockTrack.text}`}
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
                        <h2 className="text-3xl font-black">Comments ({mockTrack.comments.length})</h2>
                        <Button variant={'light'} className="gap-2 font-semibold" onPress={() => setIsAddingComment(true)}>
                            <MessageCircle size={20} />
                            Add comment
                        </Button>
                    </div>

                    {isAddingComment && <AddCommentForm />}

                    <CommentList comments={mockTrack.comments} />
                </section>
            </div>
        </div>
    );
}