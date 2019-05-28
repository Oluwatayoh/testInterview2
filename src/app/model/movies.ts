import { Url } from 'url';

export interface IMovies {
    id: string,
    movieName: string,
    openingDate: Date,
    moviePosterUrl: Url,
    movieThumbnail: Url,
    format: string,
    isRestricted: boolean,
    description: string
}