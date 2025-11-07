"use server";

import { revalidatePath } from "next/cache";
import { albumService } from "@/features/albums";
import { APP_ROUTES } from "@/shared/lib/const";

export async function deleteAlbumAction(albumId: string) {
  try {
    await albumService.remove(albumId);
    revalidatePath("/albums");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete album:", error);
    return { success: false, error: "Failed to delete album" };
  }
}

export async function createAlbumAction(
  prevState: { success: boolean | null; error: string },
  formData: FormData,
) {
  try {
    const title = formData.get("title") as string;
    const artist = formData.get("artist") as string;
    const tracks = formData.getAll("tracks") as string[];

    if (!title || !artist) {
      return { success: false, error: "Fields title and artist are required" };
    }

    if (!tracks || tracks.length === 0) {
      return { success: false, error: "At least one track is required" };
    }

    await albumService.create(formData);

    revalidatePath(APP_ROUTES.ALBUMS);
    return { success: true, error: "" };
  } catch (error) {
    return { success: false, error: "Failed to create album" };
  }
}
