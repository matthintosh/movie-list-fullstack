import { PropsWithChildren } from "react";
import { MovieCard } from "./MovieCard";
import { useFetchMovieListRule } from "../rules/useFetchMovieListRule";
import { MovieCardSkeleton } from "./MovieCardSkeleton";
import { Movie } from "../../infra/types/movie";
import { useSearchMoviesRule } from "../rules/useSearchMoviesRule";

export const MovieList = () => {
  const {
    movies,
    isLoading: isLoadingMovies,
    isError,
  } = useFetchMovieListRule();
  const {
    setSearchText,
    movies: moviesFormSearch,
    isLoading: isLoadingMovieSearch,
    emptySearchText,
  } = useSearchMoviesRule();

  if (isError) {
    return (
      <MovieListContainer>
        <p>Something went wrong loading movies</p>
      </MovieListContainer>
    );
  }

  const moviesToDisplay = emptySearchText ? movies : moviesFormSearch;
  const isLoading = isLoadingMovies || isLoadingMovieSearch;

  return (
    <MovieListContainer>
      <MovieListHeader>
        <MovieSearchInput setSearchText={setSearchText} />
      </MovieListHeader>
      {isLoading ? <MovieSkeletons /> : <Movies movies={moviesToDisplay!} />}
    </MovieListContainer>
  );
};

const MovieListContainer = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex flex-col gap-6 min-h-screen min-w-full p-12 dark:bg-gray-800">
      {children}
    </main>
  );
};

const MovieListHeader = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-wrap gap-2 sm:justify-between ">
      <p className="text-2xl sm:text-4xl">🎬🍿 Movie library</p>
      {children}
    </div>
  );
};

const MovieSearchInput = ({
  setSearchText,
}: {
  setSearchText: (searchText: string) => void;
}) => {
  return (
    <input
      onChange={(e) => setSearchText(e.target.value)}
      className="pl-4 rounded-full min-w-full sm:min-w-[20rem]  dark:bg-gray-700"
      type="text"
      placeholder="🔎 Search for movie"
    />
  );
};

const Movies = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(254px,1fr))] gap-4">
      {movies.map((movieToDiscover) => (
        <MovieCard
          key={movieToDiscover.id}
          id={movieToDiscover.id}
          posterPath={movieToDiscover.poster_path}
        />
      ))}
    </div>
  );
};

const MovieSkeletons = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(254px,1fr))] gap-4">
      {Array.from(Array(15).keys()).map((value) => (
        <MovieCardSkeleton key={value} />
      ))}
    </div>
  );
};
