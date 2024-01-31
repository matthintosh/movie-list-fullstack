import { IMAGE_BASE } from "../../infra/config/theMovieDBConfig";
import { Cast, Crew, Jobs } from "../../infra/types/movieCredit";
import { useFetchMovieCreditsRule } from "../rules/useFetchMovieCreditsRule";

export const MovieCredits = ({ movieId }: { movieId: string }) => {
  const { movieCredits, errorOnMovieCredits, loadingMovieCredits } =
    useFetchMovieCreditsRule(movieId);

  if (loadingMovieCredits) {
    return (
      <div>
        <div className="flex overflow-x-auto gap-6 pt-2">
          {Array.from(Array(10).keys()).map((key) => (
            <div
              key={key}
              className="min-w-[150px] bg-gray-500 min-h-[200px] rounded-md animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (errorOnMovieCredits) {
    return <p>Something went wrong loading movie credits</p>;
  }

  const castMembers = movieCredits?.cast.slice(0, 10);
  const crewMembers = movieCredits?.crew.filter(
    (crewMember) =>
      crewMember.job === Jobs.DIRECTOR || crewMember.job === Jobs.MUSIC_COMPOSER
  );

  return (
    <div>
      <p className="text-3xl text-white">Credits</p>
      <div className="flex gap-6 pt-2 overflow-x-scroll">
        {castMembers?.map((castMember) => (
          <CastCard key={castMember.id} castMember={castMember} />
        ))}
        {crewMembers?.map((crewMember) => (
          <CrewCard key={crewMember.id} crewMember={crewMember} />
        ))}
      </div>
    </div>
  );
};

const CrewCard = ({ crewMember }: { crewMember: Crew }) => {
  return (
    <MovieCreditCard
      imageUrl={
        crewMember.profile_path
          ? `${IMAGE_BASE}${crewMember.profile_path}`
          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      }
      primaryText={crewMember.name}
      secondaryText={crewMember.job}
    />
  );
};

const CastCard = ({ castMember }: { castMember: Cast }) => {
  return (
    <MovieCreditCard
      imageUrl={`${IMAGE_BASE}${castMember.profile_path}`}
      primaryText={castMember.name}
      secondaryText={castMember.character}
    />
  );
};

const MovieCreditCard = ({
  imageUrl,
  primaryText,
  secondaryText,
}: {
  imageUrl: string;
  primaryText: string;
  secondaryText: string;
}) => {
  console.log(imageUrl);
  return (
    <div className="min-w-[200px] w-[200px]">
      <img src={imageUrl} className="rounded-md" />
      <p className="text-white text-sm">{primaryText}</p>
      <p className="text-stone-300  text-sm">{secondaryText}</p>
    </div>
  );
};
