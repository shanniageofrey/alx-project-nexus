import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { SearchBarProps } from "../../interfaces";

export default function Search({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="w-full max-w-md flex items-center border rounded-2xl overflow-hidden ">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input w-full rounded-2xl outline-none pl-8 pr-4 py-2 border"
          />
          <FaMagnifyingGlass className="absolute left-2 right-10 top-1/3 transform -translate-y-1/2. text-gray-500" />
        </div>
      </div>

      <button
        type="submit"
        className="px-4  py-2 bg-blue-500 text-white rounded-2xl my-9"
      >
        Search
      </button>
    </form>
  );
}
