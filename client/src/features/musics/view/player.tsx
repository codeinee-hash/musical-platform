"use client";

import {PauseIcon, PlayIcon, Volume2} from "lucide-react";
import {Button} from "@heroui/react";
import {TrackProgress} from "./track-progress";

export function Player() {
    const active = false;

    return (
        <div className="h-[80px] w-full fixed bottom-0 bg-slate-100">
            <div className='h-full max-w-[1200px] mx-auto px-[24px] flex gap-30 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <Button
                        isIconOnly
                        size="sm"
                        variant="flat"
                        color="primary"
                        onClick={(e) => e.preventDefault()}
                    >
                        {active ? <PauseIcon size={18} /> : <PlayIcon size={18} />}
                    </Button>
                    <div>
                        <h3 className="text-xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                            {'MY EYES'}
                        </h3>
                        <p className="font-semibold text-foreground/90">{'Travis Scott'}</p>
                    </div>
                </div>

                <div className='flex-1'>
                    <TrackProgress right={100} left={30} onChange={(e) => e.preventDefault()} />
                </div>

                <div className='flex items-center gap-3'>
                    <Volume2 />
                    <TrackProgress right={100} left={30} onChange={(e) => e.preventDefault()} />
                </div>
            </div>
        </div>
    );
}