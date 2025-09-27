"use client";

import Link from "next/link";
import Image from "next/image";
import { MovieCardProps } from "../../interfaces";
import { useFavorites } from "@/app/context/FavoritesContext"; 

export default function MovieCard({
  id,
  title,
  posterPath,
  rating,
}: MovieCardProps) {
  const { favorites, toggleFavorite } = useFavorites(); 

  const imageUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "/no-poster.png";

  const isFavorite = favorites.includes(id.toString()); // checking from context

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    toggleFavorite(id.toString());
  };

  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-lg">
      <Link href={`/movie/${id}`}>
        <Image
          src={imageUrl}
          width={500}
          height={750}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </Link>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3">
        <h3 className="text-sm font-semibold truncate">{title}</h3>
        <p className="text-xs text-gray-300">⭐ {rating.toFixed(1)}</p>

        {/* Favorite button */}
        <button
          onClick={handleClick}
          className={`mt-2 px-2 py-1 text-xs rounded ${
            isFavorite ? "bg-red-500" : "bg-gray-700"
          }`}
        >
          {isFavorite ? "★ Remove Favorite" : "☆ Add Favorite"}
        </button>
      </div>
    </div>
  );
}
