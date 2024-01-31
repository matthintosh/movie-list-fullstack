import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { searchMoviesByTitle } from "../../infra/queries/searchMoviesByTitle";

export const useSearchMoviesRule = () => {
  const [searchText, setSearchText] = useState("");
  const {
    data: movies,
    refetch,
    isLoading,
    isError,
  } = useQuery(searchMoviesByTitle(searchText));

  useEffect(() => {
    if (searchText?.length !== 0) {
      setTimeout(() => refetch(), 1000);
    }
  }, [searchText, refetch]);

  return {
    movies: movies ?? [],
    isLoading,
    isError,
    setSearchText,
    emptySearchText: searchText.trim().length === 0,
  };
};
