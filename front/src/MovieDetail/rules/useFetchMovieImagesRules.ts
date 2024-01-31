import { useFetchMovieImages } from "../../infra/queries/useFetchMovieImages";

export const useFetchMovieImagesRule = (movieId: string) => {
  const { data: movieImages, isLoading, error } = useFetchMovieImages(movieId);
  return {
    movieImages,
    loadingMovieImages: isLoading,
    errorOnMovieImages: error,
  };
};
