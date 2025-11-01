"use client";

import {ITrack} from "@/shared/lib/types";
import {Card, CardHeader, CardBody} from "@heroui/card";
import {Image} from "@heroui/image";
import {Button} from "@heroui/react";
import {PauseIcon, PlayIcon} from "lucide-react";
import {useState} from "react";
import {APP_ROUTES} from "@/shared/lib/const";
import Link from "next/link";

export function MusicCard({ track, active }: { track: ITrack, active: boolean }) {
    const [imageError, setImageError] = useState(false);
    const [imageSrc, setImageSrc] = useState(track.picture || "/image-placeholder.png");

    const handleImageError = () => {
        if (!imageError) {
            setImageError(true);
            setImageSrc('/image-placeholder.png');
        }
    };

    return (
        <Card
            as={Link}
            href={`${APP_ROUTES.MUSICS}/${track._id}`}
            className="py-2 hover:-translate-y-2 hover:shadow-xl transition duration-200 ease-in-out cursor-pointer"
        >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <div className='w-full flex gap-2 justify-between'>
                    <div>
                        <p className="text-tiny uppercase font-bold">{track.artist}</p>
                        <small className="text-default-500">{track.listens} listens</small>
                    </div>
                    <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                        color="primary"
                        onClick={(e) => e.preventDefault()}
                    >
                        {active ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
                    </Button>
                </div>
                <h4 className="font-bold text-large">{track.name}</h4>
                {active && <span className="text-default-500">02:42 / 03:34</span>}
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt={track.name}
                    className="object-cover rounded-xl"
                    src={imageSrc}
                    width={270}
                    onError={handleImageError}
                />
            </CardBody>
        </Card>
    );
}
