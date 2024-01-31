import { useQuery } from "react-query";
import { searchMoviesByTitle } from "./searchMoviesByTitle";
import { useEffect } from "react";

export const useSearchMovieByTitle = (searchText: string) => {
  const {
    data: movies,
    refetch,
    isLoading,
    isError,
  } = useQuery(searchMoviesByTitle(searchText));

  useEffect(() => {
    if (searchText?.length !== 0) {
      refetch();
    }
  }, [searchText, refetch]);

  return { movies, isLoading, isError };
};
