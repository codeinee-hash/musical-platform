"use client";

import {HeroBlock} from "@/shared/ui/hero";
import {Button} from "@heroui/react";
import Link from "next/link";
import {APP_ROUTES} from "@/shared/lib/const";
import {UploadIcon} from "lucide-react";
import {useEffect} from "react";
import {useTracks, MusicsList} from "@/features/musics";

export function MusicsPage() {
    const { tracks, setTracks } = useTracks();

    useEffect(() => {
        setTracks();
    }, []);

    return (
        <div className='flex flex-col gap-10'>
            <HeroBlock
                title="Tracks"
                subtitle="All tracks"
                actions={
                    <Button variant={'solid'} color={'primary'} as={Link} href={`${APP_ROUTES.MUSICS}/create`}>
                        <UploadIcon size={20} />
                        Upload
                    </Button>
                }
            />

            <MusicsList tracks={tracks} />
        </div>
    )
}
