import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Movie } from './generated/movie';
import { MovieService } from './movie.service';

@Resolver('Movie')
export class MovieResolver {
  constructor(private movieService: MovieService) {}

  @Query()
  async movies() {
    return this.movieService.getMovies();
  }
  @Query()
  async movie(@Args('id') id: string) {
    return this.movieService.getMovie(id);
  }

  @ResolveField()
  async credits(@Parent() movie: Movie) {
    const { id } = movie;
    return this.movieService.getMovieCredits(id);
  }
  @ResolveField()
  async images(@Parent() movie: Movie) {
    const { id } = movie;
    return this.movieService.getMovieImages(id);
  }
}
