"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import MovieList from "@/components/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query: string) => {
    if (!query) return;
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.TMDB_API_KEY}&s=${query}`
    );
    const data = await res.json();
    setMovies(data.Search || []);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white w-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-pink-800 via-black to-blue-600">
        <h1 className="text-4xl font-bold mb-3">🎬 MovieApp</h1>
        <p className="text-lg mb-6">
          Search movies and discover recommendations
        </p>
        <div className="w-full max-w-xl">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Results Section */}
      <section className="p-8">
        {movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <p className="text-center text-gray-400">
            No movies found. Try searching above.
          </p>
        )}
      </section>
    </div>
  );
}
