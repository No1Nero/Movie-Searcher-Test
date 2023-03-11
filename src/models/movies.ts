export interface IMovie {
    Title: string,
    Year: number,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: [{ Source: string, Value: string }],
    Metascore: number,
    imdbRating: number,
    imdbVotes: number,
    imdbID: string,
    Type: string,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: string,
};

export interface IMovieShort {
    Title: string,
    Year: number,
    imdbID: string,
    Type: string,
    Poster: string,
};

export interface IMoviesInfo {
    Response: string,
    Search: IMovieShort[],
    totalResults: number,
    Error?: string
};