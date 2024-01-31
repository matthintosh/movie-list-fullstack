import { useParams } from "react-router-dom";
import { useFetchMovieByIdQuery } from "../../infra/queries/useFetchMovieByIdQuery";

export const useFetchMovieDetailRule = () => {
  const { movieId } = useParams() as { movieId: string };
  const { data: movie, isError, isLoading } = useFetchMovieByIdQuery(movieId);
  return { movie, isError, isLoading };
};
