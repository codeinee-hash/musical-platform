"use client";

import {Button} from "@heroui/react";
import {HeroBlock} from "@/shared/ui/hero";
import Link from "next/link";
import {APP_ROUTES} from "@/shared/lib/const";

export default function Home() {
    return (
        <div>
            <HeroBlock
                title="Home Page"
                subtitle="Home Page"
                actions={
                    <Button as={Link} href={APP_ROUTES.MUSICS} variant={'flat'} color={'primary'}>
                        Tracks
                    </Button>
                }
            />
        </div>
    );
}
