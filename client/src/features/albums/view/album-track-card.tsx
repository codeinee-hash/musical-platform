"use client";

import { ITrack } from "@/shared/lib/types";
import { Card, CardBody, Image } from "@heroui/react";
import { PlayIcon } from "lucide-react";
import { MouseEvent } from "react";
import { usePlayer } from "@/features/musics";
import { BASE_API_URL } from "@/shared/lib/const";

export function AlbumTrackCard({ track }: { track: ITrack }) {
  const setActiveTrack = usePlayer((state) => state.setActiveTrack);

  const play = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setActiveTrack(track);
  };

  return (
    <Card className="p-2">
      <CardBody>
        <div className="flex gap-4">
          <Image
            src={BASE_API_URL + track.picture}
            alt={track.name}
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">{track.name}</h4>
            <p className="text-sm text-slate-400">{track.artist}</p>
          </div>
          <PlayIcon
            size={22}
            onClick={play}
            color={"blue"}
            className="cursor-pointer ml-auto"
          />
        </div>
      </CardBody>
    </Card>
  );
}
