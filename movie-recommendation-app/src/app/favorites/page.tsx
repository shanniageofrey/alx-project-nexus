"use client";

import MovieList from "@/components/MovieList";
import { useEffect, useState } from "react";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
    setLoading(false);
  }, []); //We save favorites whenever they change and stop the loading

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">⭐ Your Favorites</h1>

      {favorites.length > 0 ? (
        <MovieList movies={favorites} loading={loading} />
      ) : loading ? (
        <p className="text-gray-400">Loading favoritest...</p>
      ) : (
        <p className="text-gray-400"> No favorites yet. Add some movies!</p>
      )}
    </div>
  );
}
