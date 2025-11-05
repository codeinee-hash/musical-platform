"use client";

import { ITrack } from "@/shared/lib/types";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { PlayIcon, TrashIcon } from "lucide-react";
import { APP_ROUTES, BASE_API_URL } from "@/shared/lib/const";
import Link from "next/link";
import { trackService, usePlayer, useTracks } from "@/features/musics";
import { MouseEvent } from "react";

function MusicCard({ track }: { track: ITrack }) {
  const setActiveTrack = usePlayer((state) => state.setActiveTrack);
  const setTracks = useTracks((state) => state.setTracks);

  const play = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setActiveTrack(track);
  };

  const removeTrack = async (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    await trackService.deleteTrack(track._id);
    setTracks();
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
          <div className="flex gap-2">
            <PlayIcon size={16} onClick={play} color={"blue"} />
            <TrashIcon size={16} onClick={removeTrack} color={"red"} />
          </div>
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

export default MusicCard;
