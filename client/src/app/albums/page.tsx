"use client";

import { HeroBlock } from "@/shared/ui/hero";
import { Button } from "@heroui/react";
import Link from "next/link";
import { APP_ROUTES } from "@/shared/lib/const";

export default function AlbumsPage() {
  return (
    <div>
      <HeroBlock
        title="Albums"
        subtitle="All albums"
        actions={
          <Button as={Link} href={APP_ROUTES.MUSICS}>
            Tracks
          </Button>
        }
      />
    </div>
  );
}
