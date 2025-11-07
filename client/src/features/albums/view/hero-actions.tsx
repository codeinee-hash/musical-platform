"use client";

import Link from "next/link";
import { APP_ROUTES } from "@/shared/lib/const";
import { Button } from "@heroui/react";
import { ArrowRightIcon } from "lucide-react";

export function AlbumHeroActions() {
  return (
    <Button
      as={Link}
      href={`${APP_ROUTES.ALBUMS}/create`}
      color={"secondary"}
      variant={"flat"}
    >
      Create <ArrowRightIcon size={18} />
    </Button>
  );
}
