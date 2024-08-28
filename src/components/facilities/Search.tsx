const Search = ({ query, setQuery }) => {
  return (
    <div className="w-full mx-auto flex items-center justify-center gap-2">
      <label className="text-2xl font-light" htmlFor="search">
        Search :
      </label>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-slate-200 rounded-full h-8 md:w-[40%] p-5 m-2 input input-bordered"
        placeholder="Name or Location"
        name="search"
        type="text"
      />
    </div>
  );
};

export default Search;
