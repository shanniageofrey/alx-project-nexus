import { MovieListProps } from "../../interfaces";
import MovieCard from "./MovieCard";

export default function MovieList({ movies, loading }: MovieListProps) {
  if (loading) {
    return (
      <p className="text-center text-gray-600 mt-6 ">Searching movies...</p>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <p className="text-center text-gray-600 mt-6">
        No movies found. Try another search.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          rating={movie.vote_average}
        />
      ))}
    </div>
  );
}
