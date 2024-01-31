import { Link } from "react-router-dom";
import { useFetchMovieDetailRule } from "../rules/useFetchMovieDetailRule";
import { DateTime } from "luxon";
import { ArrowLeft } from "react-feather";
import { IMAGE_BASE } from "../../infra/config/theMovieDBConfig";
import { MovieCredits } from "./MovieCredits";
import { MovieImages } from "./MovieImages";

export const MovieDetail = () => {
  const { movie, isError } = useFetchMovieDetailRule();

  if (isError) {
    return <p>Something went wrong</p>;
  }

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <main
      style={{ backgroundImage: `url("${IMAGE_BASE}${movie?.backdrop_path}")` }}
      className="flex min-h-screen min-w-full bg-cover "
    >
      <div className="flex-1 flex flex-col gap-4 backdrop-blur-2xl bg-slate-800/40 p-6 lg:p-12 overflow-hidden">
        <Link
          to="/"
          className="self-start transition ease-in-out text-white flex gap-1 items-center hover:-translate-x-2"
        >
          <ArrowLeft />
          Back
        </Link>
        <div className="flex flex-col items-center flex-wrap gap-4 justify-center sm:flex-row sm:items-end">
          <img
            className="rounded-md object-cover"
            src={`${IMAGE_BASE}${movie.poster_path}`}
            alt="oppenheimer"
            width={300}
          />
          <div className="flex flex-col flex-1">
            <p className="text-4xl w-auto text-white">{movie.title}</p>
            <p className="text-md w-auto text-white">{movie.overview}</p>
            <GenreList movieGenres={movie.genres ?? []} />
            <MovieReleaseDate releaseDate={movie.release_date} />
          </div>
        </div>
        <MovieCredits movieId={movie.id} />
        <MovieImages movieId={movie.id} />
      </div>
    </main>
  );
};

const MovieReleaseDate = ({ releaseDate }: { releaseDate?: string }) => {
  const dateTime = DateTime.fromISO(releaseDate ?? "");
  return (
    <p className="text-md text-white italic">
      {dateTime.toLocaleString(DateTime.DATE_MED)}
    </p>
  );
};

const GenreList = ({ movieGenres }: { movieGenres: { name: string }[] }) => {
  return (
    <p className="mt-2 text-md text-white italic">
      {movieGenres.map((genre, index) => {
        if (index + 1 === movieGenres.length) {
          return genre.name;
        }
        return genre.name + ", ";
      })}
    </p>
  );
};
