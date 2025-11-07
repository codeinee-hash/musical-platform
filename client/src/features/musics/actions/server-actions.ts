"use server";

import { revalidatePath } from "next/cache";
import { trackService } from "@/features/musics";

export async function deleteTrackAction(trackId: string) {
  try {
    await trackService.deleteTrack(trackId);
    revalidatePath("/musics");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete track:", error);
    return { success: false, error: "Failed to delete track" };
  }
}

export async function addCommentAction(
  prevState: { success: boolean | null; error: string },
  formData: FormData,
) {
  try {
    const username = formData.get("username") as string;
    const text = formData.get("text") as string;
    const trackId = formData.get("trackId") as string;

    if (!username || !text) {
      return { success: false, error: "All fields are required" };
    }

    await trackService.addComment({ username, text, trackId });
    revalidatePath(`/musics/${trackId}`);
    return { success: true, error: "" };
  } catch (error) {
    return { success: false, error: "Failed to add comment" };
  }
}
