const Filtering = ({ setSort, setLimit }) => {
  return (
    <div className="mt-10 mb-6 lg:flex justify-between">
      <select
        className="select select-bordered w-full max-w-xs rounded-full"
        onChange={(e) => setSort(e.target.value)}
      >
        <option disabled selected>
          Sort By
        </option>
        <option value="low to high">price Lowest to Highest</option>
        <option value="high to low">price Highest to Lowest</option>
      </select>

      <select
        onChange={(e) => setLimit(e.target.value)}
        className="select select-bordered w-full max-w-xs rounded-full my-3 md:my-0"
      >
        <option value={5}>5 items per page</option>
        <option selected value={10}>
          Items Per Page (Default 10)
        </option>
        <option value={20}>20 items per page</option>
      </select>
    </div>
  );
};

export default Filtering;
