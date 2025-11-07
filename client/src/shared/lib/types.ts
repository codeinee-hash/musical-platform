export interface IComment {
  _id: string;
  username: string;
  text: string;
}

export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: IComment[];
}

export interface IAlbum {
  _id: string;
  title: string;
  artist: string;
  description: string;
  picture: string;
  tracks: ITrack[];
}
