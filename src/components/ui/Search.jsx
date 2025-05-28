export default function Search({ search, setSearch }) {
  return (
    <div className="search-container">
      <label className="mr-2" htmlFor="search">
        Cerca un attore
      </label>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 border-gray-300 rounded-lg p-2"
        type="text"
        placeholder="Cerca un attore"
      />
    </div>
  );
}
