export interface MovieImage {
  backdrops: {
    file_path: string;
    iso_639_1: string;
  }[];
  logos: {
    file_path: string;
  }[];
  posters: {
    file_path: string;
  }[];
}
