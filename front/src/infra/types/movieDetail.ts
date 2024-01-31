export interface MovieDetail {
  id: string;
  title: string;
  original_title: string;
  homepage: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
  poster_path: string;
  genres: { name: string }[];
  release_date: string;
}
