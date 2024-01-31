import { UseQueryOptions, useQuery } from "react-query";
import { TMDB_BEARER_TOKEN } from "../config/theMovieDBConfig";
import { MovieCredits } from "../types/movieCredit";

const MOVIE_CREDIT_ENDPOINT = "https://api.themoviedb.org/3/movie/{movie_id}/credits"

const fetchMovieCreditsQuery = (id: string): UseQueryOptions<MovieCredits> => {
  return {
    queryKey: ["credits", id],
    queryFn: async () => {
      const movieCreditUrl = MOVIE_CREDIT_ENDPOINT.replace("{movie_id}",id)
      const movieCreditsResponse = await fetch(movieCreditUrl, {
        headers: { Authorization: `Bearer ${TMDB_BEARER_TOKEN}` },
      });
      if (!movieCreditsResponse.ok) {
        throw new Error("Something went wrong on movie by Id query");
      }
      const movieCredits: MovieCredits = await movieCreditsResponse.json();
      return movieCredits;
    },
  };
};

export const useFetchMovieCredits = (movieId: string) => {
  return useQuery(fetchMovieCreditsQuery(movieId));
};
