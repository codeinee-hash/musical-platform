"use client";

import { ITrack } from "@/shared/lib/types";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/react";
import { PlayIcon } from "lucide-react";
import { APP_ROUTES, BASE_API_URL } from "@/shared/lib/const";
import Link from "next/link";
import { usePlayer } from "@/features/musics";

export function MusicCard({ track }: { track: ITrack }) {
  const { setActiveTrack } = usePlayer();

  const play = (e: MouseEvent) => {
    e.preventDefault();
    setActiveTrack(track);
  };

  return (
    <Card
      as={Link}
      href={`${APP_ROUTES.MUSICS}/${track._id}`}
      className="py-2 hover:-translate-y-2 hover:shadow-xl transition duration-200 ease-in-out cursor-pointer"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="w-full flex gap-2 justify-between">
          <div>
            <p className="text-tiny uppercase font-bold">{track.artist}</p>
            <small className="text-default-500">{track.listens} listens</small>
          </div>
          <Button
            isIconOnly
            size="sm"
            variant="light"
            color="primary"
            onClick={play}
          >
            {<PlayIcon size={16} />}
          </Button>
        </div>
        <h4 className="font-bold text-large">{track.name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={track.name}
          className="object-cover rounded-xl"
          src={`${BASE_API_URL}${track.picture}`}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
