import { useFetchMovieCredits } from "../../infra/queries/useFetchMovieCredits";

export const useFetchMovieCreditsRule = (movieId: string) => {
  const {
    data:movieCredits,
    error: errorOnMovieCredits,
    isLoading: loadingMovieCredits,
  } = useFetchMovieCredits(movieId);


  return { movieCredits, errorOnMovieCredits, loadingMovieCredits };
};
