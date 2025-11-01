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
            {/* Hero Section */}
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

            <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
                {/* Track Info & Player */}
                <section className="bg-card rounded-3xl shadow-xl p-8 border border-border">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Track Cover */}
                        <div className="relative group">
                            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-all duration-500">
                                <img
                                    src={mockTrack.picture}
                                    alt={`${mockTrack.name} cover`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <Button className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-6 py-3 rounded-full font-bold text-sm">
                                        PLAY
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Track Details */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                                    <MessageCircle size={16} />
                                    <span>{mockTrack.comments.length} comments</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                                    <Star size={16} />
                                    <span>{mockTrack.listens.toLocaleString()} listens</span>
                                </div>
                            </div>
                            <h1 className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                                {mockTrack.name}
                            </h1>
                            <p className="text-xl font-semibold text-foreground/90">{mockTrack.artist}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>02:42 / 03:34</span>
                                <div className="h-1 bg-muted rounded-full flex-1">
                                    <div className="h-1 bg-primary rounded-full w-3/4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comments Section */}
                <section className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-black">Comments ({mockTrack.comments.length})</h2>
                        <Button variant={'light'} className="gap-2" onPress={() => setIsAddingComment(true)}>
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