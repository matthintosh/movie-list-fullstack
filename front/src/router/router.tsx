import { createBrowserRouter } from "react-router-dom";
import { MovieList } from "../MovieList/components/MovieList";
import { MovieDetail } from "../MovieDetail/components/MovieDetail";
import { QueryClient } from "react-query";
import { APP_ROUTES } from "./routes";
import { ErrorPage } from "./ErrorPage";
import { movieDetailLoader } from "./loaders/movieDetailLoader";

export const getAppRouter = (queryClient: QueryClient) => {
  return createBrowserRouter(
    [
      {
        path: APP_ROUTES.MOVIE_LIST,
        element: <MovieList />,
        index: true,
      },
      {
        path: `${APP_ROUTES.MOVIE}/:movieId`,
        loader: movieDetailLoader(queryClient),
        element: <MovieDetail />,
        errorElement: <ErrorPage />,
      },
    ],
    { basename: "/movie-list-vite" }
  );
};
