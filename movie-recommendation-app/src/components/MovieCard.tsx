import Link from "next/link";

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string | null;
  rating: number;
}

export default function MovieCard({
  id,
  title,
  posterPath,
  rating,
}: MovieCardProps) {
  const imageUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "/no-poster.png";

  return (
    <Link href={`/movie/${id}`}>
      <div className="relative group cursor-pointer overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3">
          <h3 className="text-sm font-semibold truncate">{title}</h3>
          <p className="text-xs text-gray-300">⭐ {rating.toFixed(1)}</p>
        </div>
      </div>
    </Link>
  );
}
