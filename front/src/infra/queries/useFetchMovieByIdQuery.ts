import { useQuery } from "react-query";
import { fetchMovieByIdQuery } from "./fetchMovieByIdQuery";

export const useFetchMovieByIdQuery = (id: string) => {
  return useQuery(fetchMovieByIdQuery(id));
};
