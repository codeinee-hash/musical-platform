"use client";

import { PauseIcon, PlayIcon, Volume2 } from "lucide-react";
import { Button } from "@heroui/react";
import { TrackProgress } from "./track-progress";
import { usePlayer } from "@/features/musics";
import { ChangeEvent, useEffect } from "react";
import { BASE_API_URL } from "@/shared/lib/const";

let audio: HTMLAudioElement;

export function Player() {
  const {
    pause,
    setPause,
    volume,
    setVolume,
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
    active,
  } = usePlayer();

  const setAudio = () => {
    if (active) {
      audio.src = BASE_API_URL + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => setDuration(Math.ceil(audio.duration));
      audio.ontimeupdate = () => setCurrentTime(Math.ceil(audio.currentTime));
    }
  };

  const play = () => {
    setPause(!pause);

    if (pause) audio?.play();
    else audio.pause();
  };

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setVolume(Number(e.target.value));
  };

  const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  if (!active) {
    return null;
  }

  return (
    <div className="h-[80px] w-full fixed bottom-0 bg-slate-100 z-20">
      <div className="h-full max-w-[1200px] mx-auto px-[24px] flex gap-30 items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            color="primary"
            onPress={play}
          >
            {pause ? <PlayIcon size={18} /> : <PauseIcon size={18} />}
          </Button>
          <div>
            <h3 className="text-xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
              {active?.name}
            </h3>
            <p className="font-semibold text-foreground/90">{active?.artist}</p>
          </div>
        </div>

        <div className="flex-1">
          <TrackProgress
            left={currentTime}
            right={duration}
            onChange={changeCurrentTime}
            isTime
          />
        </div>

        <div className="flex items-center gap-3">
          <Volume2 />
          <TrackProgress left={volume} right={100} onChange={changeVolume} />
        </div>
      </div>
    </div>
  );
}
