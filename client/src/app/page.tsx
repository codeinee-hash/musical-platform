"use client";

import { Button } from "@heroui/react";
import { HeroBlock } from "@/shared/ui/hero";
import Link from "next/link";
import { APP_ROUTES } from "@/shared/lib/const";

export default function Home() {
  return (
    <div>
      <HeroBlock
        title="Home Page"
        subtitle="Home Page"
        actions={
          <Button
            as={Link}
            href={APP_ROUTES.MUSICS}
            variant={"flat"}
            color={"primary"}
          >
            Tracks
          </Button>
        }
      />

      <p className="text-xl text-center font-semibold text-slate-400 mt-10">
        Upload tracks, collect albums, discover new artists, and share moments.
        Music isn't just background music. It's a mood.
      </p>
    </div>
  );
}
