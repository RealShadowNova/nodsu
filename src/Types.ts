export type GameMode = 'fruits' | 'mania' | 'osu' | 'taiko';

export interface UserCompact {
  avatar_url: string;
  country_code: string;
  default_group: string;
  id: number;
  is_active: boolean;
  is_bot: boolean;
  is_deleted: boolean;
  is_online: boolean;
  is_supporter: boolean;
  last_visit: Date;
  pm_friends_only: boolean;
  profile_colour: string;
  username: string;
}

export interface User extends UserCompact {
  cover_url: string;
  discord?: string;
  has_supported: boolean;
  interests?: string;
  join_date: Date;
  kudosu: Kudosu;
  location?: string;
  max_blocks: number;
  max_friends: number;
  occupation?: string;
  playMode: GameMode;
  playstyle: string[];
  post_count: number;
  skype?: string;
  title?: string;
  twitter?: string;
  website?: string;
}

interface Kudosu {
  available: number;
  total: number;
}