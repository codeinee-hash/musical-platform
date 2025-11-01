"use client";

import {Button} from "@heroui/react";
import {HeroBlock} from "@/shared/ui/hero";
import Link from "next/link";
import {APP_ROUTES} from "@/shared/lib/const";
import {ITrack} from "@/shared/lib/types";
import {MusicsList} from "@/features/musics/view/musics-list";

export default function MusicsPage() {
    const tracks: ITrack[] = [
        { _id: '1', name: 'Track 1', artist: 'Artist 1', listens: 0, text: 'Demo text', picture: 'https://heroui.com/images/hero-card-complete.jpeg', audio: '', comments: [] },
        { _id: '2', name: 'Track 2', artist: 'Artist 2', listens: 2, text: 'Demo text 2', picture: '', audio: '', comments: [] },
    ];

    return (
        <div className='flex flex-col gap-10'>
            <HeroBlock
                title="Tracks"
                subtitle="All tracks"
                actions={
                    <Button variant={'solid'} color={'secondary'} as={Link} href={`${APP_ROUTES.MUSICS}/create`}>
                        Upload
                    </Button>
                }
            />

            <MusicsList tracks={tracks} />
        </div>
    )
}
