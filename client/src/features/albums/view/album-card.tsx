"use client";

import { Card, CardBody } from "@heroui/card";
import { IAlbum } from "@/shared/lib/types";
import { APP_ROUTES, BASE_API_URL } from "@/shared/lib/const";
import { Image } from "@heroui/image";
import { ArrowRight, Trash } from "lucide-react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { deleteAlbumAction } from "@/features/albums";
import { toast } from "sonner";

export function AlbumCard({ album }: { album: IAlbum }) {
  const removeAlbum = async () => {
    const result = await deleteAlbumAction(album._id);

    if (result.success) toast.success("Album deleted");
    else toast.error("Error deleting album");
  };

  return (
    <Card className="w-full p-3">
      <CardBody>
        <div className="flex gap-4">
          <Image
            alt={album.title}
            className="object-cover rounded-xl"
            src={`${BASE_API_URL}${album.picture}`}
            width={120}
            height={120}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">{album.title}</h3>
            <p className="font-semibold">{album.artist}</p>
            <p className="text-sm text-slate-400">{album.description}</p>
          </div>

          <div className="flex gap-2 ml-auto">
            <Button
              isIconOnly
              color="primary"
              variant="flat"
              as={Link}
              href={`${APP_ROUTES.ALBUMS}/${album._id}`}
            >
              <ArrowRight size={20} />
            </Button>
            <Button
              isIconOnly
              color="danger"
              variant="flat"
              onPress={removeAlbum}
            >
              <Trash size={20} color="red" />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
