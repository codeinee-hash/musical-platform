import { IComment, ITrack } from "@/shared/lib/types";
import { requester } from "@/shared/lib/api";

class TrackService {
  async getTracks(): Promise<ITrack[]> {
    try {
      const { data } = await requester.get<ITrack[]>("tracks");
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getOne(id: string): Promise<ITrack> {
    try {
      const { data } = await requester.get<ITrack>(`tracks/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async createTrack(formData: FormData) {
    try {
      await requester.post("tracks", formData);
    } catch (error) {
      throw error;
    }
  }

  async addComment(payload: {
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

  async deleteTrack(id: string) {
    try {
      await requester.delete(`tracks/${id}`);
    } catch (error) {
      throw error;
    }
  }
}

export const trackService = new TrackService();
