import { IMovieShort } from "@/models/movies";
import MovieItem from "./MovieItem";

interface MoviesListProps {
    movies: IMovieShort[],
};

export default function MoviesList({ movies }: MoviesListProps) {
    return (
        <div className="flex flex-wrap px-6 sm:px-24 justify-center mt-10">
            {movies.map((movie) => (
                <div key={movie.imdbID}>
                    <MovieItem movie={movie} />
                </div>
            ))}
        </div>
    );
};