export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-6 flex justify-center">
      <div className="relative w-full max-w-md">

        <span className="absolute left-4 top-3 text-gray-400">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search for toys..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-full border border-gray-300 py-3 pl-10 pr-4 text-sm focus:border-pink-400 focus:outline-none"
        />

      </div>
    </div>
  );
}