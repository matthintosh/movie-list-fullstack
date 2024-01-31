import { UseQueryOptions, useQuery } from "react-query";
import { TMDB_BEARER_TOKEN } from "../config/theMovieDBConfig";
import { MovieImage } from "../types/movieImage";

const MOVIE_IMAGES_ENDPOINT =
  "https://api.themoviedb.org/3/movie/{movie_id}/images";

const fetchMovieImagesQuery = (id: string): UseQueryOptions<MovieImage> => {
  return {
    queryKey: ["images", id],
    queryFn: async () => {
      const movieImagesUrl = MOVIE_IMAGES_ENDPOINT.replace("{movie_id}", id);
      const movieImagesResponse = await fetch(movieImagesUrl, {
        headers: { Authorization: `Bearer ${TMDB_BEARER_TOKEN}` },
      });
      if (!movieImagesResponse.ok) {
        throw new Error("Something went wrong on movie by Id query");
      }
      const movieImages: MovieImage = await movieImagesResponse.json();
      movieImages.backdrops = movieImages.backdrops.filter(
        (backdrop) => backdrop.iso_639_1 === null
      );
      return movieImages;
    },
  };
};

export const useFetchMovieImages = (movieId: string) => {
  return useQuery(fetchMovieImagesQuery(movieId));
};
