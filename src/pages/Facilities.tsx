import Filtering from "../components/facilities/Filtering";
import Search from "../components/facilities/Search";
import FacilityCard from "../components/Shared/FacilityCard";
import { useGetAllFacilityQuery } from "../redux/features/facility/facilityManagement.api";
import { TFacility } from "../types";

const Facilities = () => {
  const { data, isLoading, isError, isFetching } = useGetAllFacilityQuery({});
  return (
    <div>
      <h1 className="mt-10 mb-6 text-2xl text-center">
        Here is all our Sport Facilities
      </h1>
      <Search />
      <Filtering />
      <div className="mt-6 grid lg:grid-cols-4 gap-6">
        {(isLoading || isFetching) && (
          <span className="loading loading-ring loading-lg"></span>
        )}
        {data?.data?.map((item: TFacility) => (
          <FacilityCard key={item._id} facility={item} />
        ))}
      </div>
    </div>
  );
};

export default Facilities;
