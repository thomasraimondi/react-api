export default function Search({ search, setSearch }) {
  return (
    <div className="search-container flex items-center gap-2">
      <div className="relative flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {/* Icona lente di ingrandimento */}
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="7" strokeWidth="2" />
            <line
              x1="16.5"
              y1="16.5"
              x2="21"
              y2="21"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <input
          id="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-gray-300 rounded-lg p-2 pl-10 w-full focus:outline-blue-400"
          type="text"
          placeholder="Cerca un attore"
          aria-label="Cerca un attore"
        />
      </div>
    </div>
  );
}
