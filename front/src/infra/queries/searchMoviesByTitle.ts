import { UseQueryOptions } from "react-query";
import { TMDB_BEARER_TOKEN } from "../config/theMovieDBConfig";
import { Movie } from "../types/movie";

const MOVIE_DETAIL_ENDPOINT = "https://api.themoviedb.org/3/search/movie";

export const searchMoviesByTitle = (
  searchTitle: string
): UseQueryOptions<Movie[]> => {
  return {
    queryKey: ["search_movies", searchTitle],
    queryFn: async () => {
      const queryParam = new URLSearchParams({ query: searchTitle });
      const searchMoviesByTitle = await fetch(
        `${MOVIE_DETAIL_ENDPOINT}?${queryParam}`,
        {
          headers: { Authorization: `Bearer ${TMDB_BEARER_TOKEN}` },
        }
      );
      if (!searchMoviesByTitle.ok) {
        throw new Error("Something went wrong on movie by Id query");
      }
      const { results } = await searchMoviesByTitle.json();
      return results?.filter((movie: Movie) => movie.poster_path !== null);
    },
    enabled: false,
  };
};
