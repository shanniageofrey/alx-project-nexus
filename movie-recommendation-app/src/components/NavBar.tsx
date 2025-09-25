import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-pink-800 text-ehit shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold hover:text-gray-200">
          MovieApp 🎥
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link href="/favorites" className="hover:text-gray-200">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}
