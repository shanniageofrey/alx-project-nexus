/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import MovieDetail from "@/components/MovieDetails";
import { fetchMovieById } from "@/lib/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MoviePage() {
  const params = useParams();
  const movieId = params?.id as string;

  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    if (movieId) loadMovie();
  }, [movieId]);

  if (loading) {
    return (
      <p className="text-center mt-8 text-indigo-200 ">
        Loading movie details...
      </p>
    );
  }

  if (!movie) {
    return (
      <p className="text-center mt-8 text-indigo-200 "> Movie not found</p>
    );
  }

  return (
    <main className="min-h-screen">
      <MovieDetail movie={movie} />
    </main>
  );
}
