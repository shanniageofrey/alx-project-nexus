import { useEffect, useState } from "react";
import { fetchRecommendations } from "../lib/api";
import MovieList from "./MovieList";

interface MovieDetailProps {
  movie: {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    vote_average: number;
  };
}

export default function MovieDetail({ movie }: MovieDetailProps) {
  const [recommendations, setRecommendations] = useState<any[]>([]);

  useEffect(() => {
    async function loadRecommendations() {
      const data = await fetchRecommendations(movie.id);
      setRecommendations(data.results || []);
    }
    loadRecommendations();
  }, [movie.id]);

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/no-poster.png";

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg shadow"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{movie.title}</h1>
          <p className="text-gray-600 mt-2">⭐ {movie.vote_average.toFixed(1)}</p>
          <p className="mt-4">{movie.overview}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recommended Movies</h2>
        <MovieList movies={recommendations} />
      </div>
    </div>
  );
}
