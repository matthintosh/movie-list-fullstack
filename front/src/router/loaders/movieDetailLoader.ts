import { QueryClient } from "react-query";
import { LoaderFunctionArgs } from "react-router-dom";
import { fetchMovieByIdQuery } from "../../infra/queries/fetchMovieByIdQuery";

export const movieDetailLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    return await queryClient.fetchQuery(fetchMovieByIdQuery(params.movieId!));
  };
