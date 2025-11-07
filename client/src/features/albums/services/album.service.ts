import { IAlbum } from "@/shared/lib/types";
import { requester } from "@/shared/lib/api";

class AlbumService {
  async getAll(): Promise<IAlbum[]> {
    try {
      const { data } = await requester.get<IAlbum[]>("albums");
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getOne(id: string): Promise<IAlbum> {
    try {
      const { data } = await requester.get<IAlbum>(`albums/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async create(formData: FormData): Promise<IAlbum> {
    try {
      const { data } = await requester.post<IAlbum>("albums", formData);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await requester.delete(`albums/${id}`);
    } catch (error) {
      throw error;
    }
  }
}

export const albumService = new AlbumService();
