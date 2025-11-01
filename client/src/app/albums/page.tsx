"use client";

import {HeroBlock} from "@/shared/ui/hero";
import {Button} from "@heroui/react";


export default function AlbumsPage() {
    return (
        <div>
            <HeroBlock
                title="Albums"
                subtitle="All albums"
                actions={
                    <Button>Button</Button>
                }
            />
        </div>
    )
}