import { UseQueryOptions, useQuery } from "react-query";
import { Movie } from "../types/movie";
import { TMDB_BEARER_TOKEN } from "../config/theMovieDBConfig";

const MOVIES_ENDPOINT = "https://api.themoviedb.org/3/movie/now_playing";

export const useFetchMoviesQuery = () => {
  const fetchMovieQuery: UseQueryOptions<Movie[]> = {
    queryKey: ["movies"],
    queryFn: async function fetchMovies() {
      const movieResponse = await fetch(MOVIES_ENDPOINT, {
        headers: { Authorization: `Bearer ${TMDB_BEARER_TOKEN}` },
      });

      if (!movieResponse.ok) {
        throw new Error("Something went wrong on movies query");
      }
      const { results } = await movieResponse.json();
      return results;
    },
  };

  return useQuery(fetchMovieQuery);
};
