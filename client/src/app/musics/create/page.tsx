"use client";

import { useState } from "react";
import { Button, Input, Textarea } from "@heroui/react";
import { Music, UploadIcon, User } from "lucide-react";
import { CreateTrackStepWrapper, trackService } from "@/features/musics";
import { FileUpload } from "@/shared/ui/file-upload";
import { useInput } from "@/shared/hooks/use-input";
import { redirect } from "next/navigation";
import { APP_ROUTES } from "@/shared/lib/const";
import { Image } from "@heroui/image";

export default function UploadTrackPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState<File | null>(null);
  const [audio, setAudio] = useState<File | null>(null);

  const name = useInput("");
  const artist = useInput("");
  const text = useInput("");

  const next = () => {
    setActiveStep((prev) => prev + 1);

    if (activeStep === 2) {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("artist", artist.value);
      formData.append("text", text.value);
      formData.append("picture", picture!);
      formData.append("audio", audio!);

      trackService
        .createTrack(formData)
        .then((res) => redirect(APP_ROUTES.MUSICS));
    }
  };

  return (
    <div className="pb-10">
      <CreateTrackStepWrapper activeStep={activeStep}>
        <div className="min-h-[284px] p-6">
          {activeStep === 0 && (
            <div className="max-w-4xl mx-auto flex flex-col gap-4">
              <Input
                {...name}
                placeholder="Track name"
                className="lg:col-span-1"
                startContent={<Music size={18} />}
              />
              <Input
                {...artist}
                placeholder="Artist name"
                className="lg:col-span-1"
                startContent={<User size={18} />}
              />
              <Textarea
                {...text}
                placeholder="Text about this track..."
                className="lg:col-span-2 resize-none"
                rows={4}
              />
            </div>
          )}

          {activeStep === 1 && (
            <>
              <FileUpload setFile={setPicture} accept={"image/*"}>
                <div className="rounded-lg bg-primary-50 flex items-center gap-2 px-4 py-2 cursor-pointer active:bg-primary-100 transition font-semibold">
                  Upload image
                  <UploadIcon size={18} />
                </div>
              </FileUpload>
              {picture && (
                <Image
                  src={URL.createObjectURL(picture)}
                  alt={picture.name}
                  width={200}
                  height={200}
                  onLoad={(e) => URL.revokeObjectURL(e.currentTarget.src)}
                  className="mt-4"
                />
              )}
            </>
          )}

          {activeStep === 2 && (
            <>
              <FileUpload setFile={setAudio} accept={"audio/*"}>
                <div className="rounded-lg bg-primary-50 flex items-center gap-2 px-4 py-2 cursor-pointer active:bg-primary-100 transition font-semibold">
                  Upload track
                  <UploadIcon size={18} />
                </div>
              </FileUpload>
              {audio && (
                <p className="text-slate-400 font-semibold text-xl mt-4">
                  {audio?.name}
                </p>
              )}
            </>
          )}
        </div>
      </CreateTrackStepWrapper>

      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <Button
          disabled={activeStep === 0}
          variant={"flat"}
          color={"primary"}
          onPress={() => setActiveStep((prev) => prev - 1)}
        >
          Prev step
        </Button>
        <Button
          disabled={activeStep > 2}
          variant={"flat"}
          color={"primary"}
          onPress={next}
        >
          Next step
        </Button>
      </div>
    </div>
  );
}
