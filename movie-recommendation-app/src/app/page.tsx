"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import MovieList from "@/components/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query) return;
    setHasSearched(true);
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.NEXT_PUBLIC_TMDB_API_KEY
        }&query=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setMovies(data.results || []);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white w-auto">
      <section
        className="relative flex flex-col items-center justify-center text-center py-28 bg-cover bg-center"
        style={{
          backgroundImage: `url('/resident.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4">🎬 MovieApp</h1>
          <p className="text-lg mb-6 text-gray-200">
            Search movies and discover recommendations
          </p>
          <div className="w-full max-w-xl">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* this is results section */}
      <section className="p-8">
        {hasSearched && <MovieList movies={movies} loading={loading} />}
      </section>
    </div>
  );
}
