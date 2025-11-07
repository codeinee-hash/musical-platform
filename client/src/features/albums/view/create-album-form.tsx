"use client";

import { useActionState, useEffect, useState } from "react";
import Form from "next/form";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  Card,
  Image,
} from "@heroui/react";
import { Music, UploadIcon, User } from "lucide-react";
import { createAlbumAction } from "@/features/albums";
import { FileUpload } from "@/shared/ui/file-upload";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { APP_ROUTES } from "@/shared/lib/const";

export function CreateAlbumForm({
  selectItems,
}: {
  selectItems: { key: string; label: string }[];
}) {
  const [picture, setPicture] = useState<File | null>(null);

  const [state, formAction] = useActionState(createAlbumAction, {
    success: null as boolean | null,
    error: "" as string,
  });

  useEffect(() => {
    if (!state.success && state.error) toast.error(state.error);
    if (state.success) redirect(APP_ROUTES.ALBUMS);
  }, [state]);

  return (
    <Card className="p-6 max-w-[600px] mx-auto mb-20">
      <Form action={formAction} className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Image
            src={
              picture ? URL.createObjectURL(picture) : "/image-placeholder.png"
            }
            alt={picture?.name || "album logo"}
            width={150}
            height={150}
            onLoad={(e) => URL.revokeObjectURL(e.currentTarget.src)}
          />
          <FileUpload setFile={setPicture} accept={"image/*"} name={"picture"}>
            <div className="h-10 rounded-lg bg-primary-50 flex items-center gap-2 px-4 py-2 cursor-pointer active:bg-primary-100 transition font-semibold">
              Upload image
              <UploadIcon size={18} />
            </div>
          </FileUpload>
        </div>

        <Input
          name="title"
          placeholder="Album name"
          className="lg:col-span-1"
          startContent={<Music size={18} />}
        />
        <Input
          name="artist"
          placeholder="Artist name"
          className="lg:col-span-1"
          startContent={<User size={18} />}
        />
        <Textarea
          name="description"
          placeholder="Text about this album..."
          className="lg:col-span-2 resize-none"
          rows={4}
        />

        <Select
          name="tracks"
          className="max-w-xs"
          label="Favorite tracks"
          placeholder="Select an tracks"
          selectionMode="multiple"
        >
          {selectItems.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>

        <Button variant="flat" type="submit" color="secondary">
          Create
        </Button>
      </Form>
    </Card>
  );
}
