const Filtering = () => {
  return (
    <div className="mt-10 mb-6 lg:flex justify-between">
      <select className="select select-bordered w-full max-w-xs rounded-full">
        <option disabled selected>
          Sort By
        </option>
        <option>price Lowest to Highest</option>
        <option>price Lowest to Highest</option>
      </select>
      <select className="select select-bordered w-full max-w-xs rounded-full my-3 md:my-0">
        <option>5 items per page</option>
        <option disabled selected>
          Items Per Page (Default 10)
        </option>
        <option>20 items per page</option>
      </select>
    </div>
  );
};

export default Filtering;
