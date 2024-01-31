import { useFetchMoviesQuery } from "../../infra/queries/useFetchMoviesQuery";

export const useFetchMovieListRule = () => {
  const { data: movies, isError, isLoading } = useFetchMoviesQuery();
  return { movies, isError, isLoading };
};
