import { useState } from "react";
import Filtering from "../components/facilities/Filtering";
import Search from "../components/facilities/Search";
import FacilityCard from "../components/Shared/FacilityCard";
import { useGetAllFacilityQuery } from "../redux/features/facility/facilityManagement.api";
import { TFacility } from "../types";

const Facilities = () => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isLoading, isFetching } = useGetAllFacilityQuery([
    { name: "limit", value: limit },
    { name: "page", value: page },
  ]);
  const totalPage = data?.data?.meta?.totalPage || 1;
  const numbers = [...Array(totalPage + 1).keys()].slice(1);

  let main = data?.data?.facilities;
  if (query && data.data.facilities) {
    main = data.data.facilities.filter(
      (item: TFacility) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.location.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (sort == "low to high") {
    main = [...main].sort((a, b) => a.pricePerHour - b.pricePerHour);
  } else if (sort == "high to low") {
    main = [...main].sort((a, b) => b.pricePerHour - a.pricePerHour);
  }

  return (
    <div>
      <h1 className="mt-10 mb-6 text-2xl text-center">
        Here is all our Sport Facilities
      </h1>
      <Search query={query} setQuery={setQuery} />
      <Filtering setSort={setSort} setLimit={setLimit} />
      <div className="mt-6 grid lg:grid-cols-4 gap-6">
        {isLoading || isFetching ? (
          <span className="loading loading-ring loading-lg"></span>
        ) : (
          main.map((item: TFacility) => (
            <FacilityCard key={item._id} facility={item} />
          ))
        )}
      </div>
      <div className="mt-6 flex flex-col items-end">
        <p className="font-light">Page : </p>
        <div className="join">
          {numbers.map((n, i) => (
            <input
              onClick={() => setPage(n)}
              key={i}
              className={`join-item btn btn-square ${
                data?.data?.meta.page == n ? "active" : ""
              }`}
              type="radio"
              name="options"
              aria-label={`${n}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
