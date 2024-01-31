
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Movie {
    id: string;
    title: string;
    original_title?: Nullable<string>;
    poster_path: string;
    overview: string;
    backdrop_path: string;
    release_date?: Nullable<string>;
    credits?: Nullable<Credits>;
    images?: Nullable<Image>;
}

export interface Credits {
    cast?: Nullable<Nullable<Cast>[]>;
    crew?: Nullable<Nullable<Crew>[]>;
}

export interface Image {
    backdrops?: Nullable<Nullable<Media>[]>;
    logos?: Nullable<Nullable<Media>[]>;
    posters?: Nullable<Nullable<Media>[]>;
}

export interface Media {
    file_path?: Nullable<string>;
    iso_639_1?: Nullable<string>;
}

export interface Cast {
    id?: Nullable<string>;
    name?: Nullable<string>;
    profile_path?: Nullable<string>;
    character?: Nullable<string>;
    order?: Nullable<number>;
}

export interface Crew {
    id?: Nullable<string>;
    profile_path?: Nullable<string>;
    name?: Nullable<string>;
    job?: Nullable<string>;
}

export interface IQuery {
    movies(): Nullable<Nullable<Movie>[]> | Promise<Nullable<Nullable<Movie>[]>>;
    movie(id: string): Nullable<Movie> | Promise<Nullable<Movie>>;
}

type Nullable<T> = T | null;
