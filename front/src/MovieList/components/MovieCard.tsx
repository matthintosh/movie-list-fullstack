import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../router/routes";
import { IMAGE_BASE } from "../../infra/config/theMovieDBConfig";

interface MovieCardProps {
  id: string;
  posterPath: string;
}

export const MovieCard = ({ id, posterPath }: MovieCardProps) => {
  return (
    <Link to={`${APP_ROUTES.MOVIE}/${id}`}>
      <Card>
        <img
          className="rounded-md object-cover"
          src={`${IMAGE_BASE}${posterPath}`}
          height={"100%"}
          alt="image poster"
        />
      </Card>
    </Link>
  );
};

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="shadow-lg h-auto transition ease-in-out rounded-md hover:scale-105 hover:cursor-pointer hover:shadow-2xl">
      {children}
    </div>
  );
};
