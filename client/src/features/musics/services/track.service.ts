import { IComment, ITrack } from "@/shared/lib/types";
import { requester } from "@/shared/lib/api";

async function getTracks(): Promise<ITrack[]> {
  try {
    const { data } = await requester.get<ITrack[]>("tracks");
    return data;
  } catch (error) {
    throw error;
  }
}

async function getOne(id: string): Promise<ITrack> {
  try {
    const { data } = await requester.get<ITrack>(`tracks/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

async function createTrack(formData: FormData) {
  try {
    await requester.post("tracks", formData);
  } catch (error) {
    throw error;
  }
}

async function addComment(payload: {
  username: string;
  text: string;
  trackId: string;
}): Promise<IComment> {
  try {
    const { data } = await requester.post("tracks/comment", payload);
    return data;
  } catch (error) {
    throw error;
  }
}

async function deleteTrack(id: string) {
  try {
    await requester.delete(`tracks/${id}`);
  } catch (error) {
    throw error;
  }
}

export const trackService = {
  getTracks,
  getOne,
  createTrack,
  deleteTrack,
  addComment,
};
