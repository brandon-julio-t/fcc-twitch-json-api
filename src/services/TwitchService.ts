import axios from "axios";
import Channel from "../models/Channel";
import Stream from "../models/Stream";
import User from "../models/User";

export default class TwitchService {
  private get baseUrl() {
    return "https://twitch-proxy.freecodecamp.rocks/twitch-api";
  }

  public async getStream(username: string): Promise<Stream> {
    return await axios
      .get<{ stream: Stream }>(`${this.baseUrl}/streams/${username}`)
      .then((r) => r.data.stream);
  }

  public async getUser(username: string): Promise<User> {
    return await axios
      .get<User>(`${this.baseUrl}/users/${username}`)
      .then((r) => ({ ...r.data, username }));
  }

  public async getChannel(username: string) {
    return await axios
      .get<Channel>(`${this.baseUrl}/channels/${username}`)
      .then((r) => r.data);
  }
}
