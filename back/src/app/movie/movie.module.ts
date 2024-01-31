import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MovieResolver } from './movie.resolver';
import { MovieService } from './movie.service';

const test = process.cwd();
console.debug(test);

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/api/src/app/movie/generated/movie.ts'),
      },
    }),
  ],
  controllers: [],
  providers: [MovieResolver, MovieService],
})
export class MovieModule {}
