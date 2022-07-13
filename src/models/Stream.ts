import Channel from "./Channel";

export default interface Stream {
  _id: string;
  game: string;
  viewers: number;
  created_at: Date;
  video_height: number;
  average_fps: number;
  delay: number;
  is_playlist: boolean;
  _links: {
    self: string;
  };
  preview: {
    small: string;
    medium: string;
    large: string;
    template: string;
  };
}
