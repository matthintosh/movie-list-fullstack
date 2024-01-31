export interface MovieCredits {
  cast: Cast[];
  crew: Crew[];
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string;
  character: string;
  order: number;
}
export interface Crew {
  id: number;
  profile_path: string;
  name: string;
  job: Jobs | string;
}

export enum Jobs {
  DIRECTOR = "Director",
  MUSIC_COMPOSER = "Original Music Composer",
  ACTOR = "Actor",
}
