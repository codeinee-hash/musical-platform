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

export async function addCommentAction(payload: {
  username: string;
  trackId: string;
  text: string;
}) {
  try {
    await trackService.addComment(payload);
    revalidatePath(`/musics/${payload.trackId}`);
    return { success: true };
  } catch (error) {
    console.error("Failed to add comment:", error);
    return { success: false, error: "Failed to add comment" };
  }
}
