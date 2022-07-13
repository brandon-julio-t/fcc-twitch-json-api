export default interface Channel {
  mature: boolean;
  status: string;
  broadcaster_language: string;
  display_name: string;
  game: string;
  language: string;
  _id: number;
  name: string;
  created_at: string;
  updated_at: string;
  delay: string | null;
  logo: string;
  banner: string | null;
  video_banner: string;
  background: string | null;
  profile_banner: string;
  profile_banner_background_color: string;
  partner: true;
  url: string;
  views: number;
  followers: number;
  _links: {
    self: string;
    follows: string;
    commercial: string;
    stream_key: string;
    chat: string;
    subscriptions: string;
    editors: string;
    teams: string;
    videos: string;
  };
}
