import { UseQueryOptions } from "react-query";
import { MovieDetail } from "../types/movieDetail";
import { TMDB_BEARER_TOKEN } from "../config/theMovieDBConfig";

const MOVIE_DETAIL_ENDPOINT = "https://api.themoviedb.org/3/movie/";

export const fetchMovieByIdQuery = (
  id: string
): UseQueryOptions<MovieDetail> => {
  return {
    queryKey: ["movie", id],
    queryFn: async () => {
      const movieDetailResponse = await fetch(`${MOVIE_DETAIL_ENDPOINT}${id}`, {
        headers: { Authorization: `Bearer ${TMDB_BEARER_TOKEN}` },
      });
      if (!movieDetailResponse.ok) {
        throw new Error("Something went wrong on movie by Id query");
      }
      const movie: MovieDetail = await movieDetailResponse.json();
      return movie;
    },
  };
};
