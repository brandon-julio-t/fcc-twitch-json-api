export default interface User {
  _id: string;
  display_name: string;
  name: string;
  username: string;
  type: string;
  bio: string;
  created_at: Date;
  updated_at: Date;
  logo: string;
  _links: {
    self: string;
  };
}
