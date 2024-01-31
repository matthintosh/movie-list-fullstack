import { IMAGE_BASE } from "../../infra/config/theMovieDBConfig";
import { useFetchMovieImagesRule } from "../rules/useFetchMovieImagesRules";

export const MovieImages = ({ movieId }: { movieId: string }) => {
  const { movieImages, loadingMovieImages, errorOnMovieImages } =
    useFetchMovieImagesRule(movieId);

  if (loadingMovieImages) {
    return (
      <div>
        <div className="flex overflow-x-auto gap-6 pt-2">
          {Array.from(Array(4).keys()).map((key) => (
            <div
              key={key}
              className="min-w-[1080px] bg-gray-500 min-h-[480px] rounded-md animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (errorOnMovieImages) {
    console.error(errorOnMovieImages);
    <p>Something went wrong on movie images</p>;
  }

  return (
    <div>
      <p className="text-3xl text-white">Images</p>
      <div className="flex overflow-x-auto gap-6 pt-2">
        {movieImages?.backdrops.map((backdrop) => (
          <img
            src={`${IMAGE_BASE}${backdrop.file_path}`}
            className="w-[1200px] rounded-md"
          />
        ))}
      </div>
    </div>
  );
};
