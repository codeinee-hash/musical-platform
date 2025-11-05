"use client";

import Link from "next/link";
import { APP_ROUTES } from "@/shared/lib/const";
import { UploadIcon } from "lucide-react";
import { Button } from "@heroui/react";

export function HeroActions() {
  return (
    <Button
      variant={"solid"}
      color={"primary"}
      as={Link}
      href={`${APP_ROUTES.MUSICS}/create`}
    >
      <UploadIcon size={20} />
      Upload
    </Button>
  );
}
