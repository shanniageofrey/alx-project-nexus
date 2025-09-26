"use client"

import MovieList from "@/components/MovieList";
import { useEffect, useState } from "react";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []); //We Save favorites whenever they change

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">⭐ Your Favorites</h1>

      {favorites.length > 0 ? (
        <MovieList movies={favorites} />
      ) : (
        <p className="text-gray-400">No favorites yet. Add some movies!</p>
      )}
    </div>
  );
}
