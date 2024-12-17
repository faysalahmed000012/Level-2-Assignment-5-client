import { useGetAllFacilityQuery } from "../../redux/features/facility/facilityManagement.api";
import { TFacility } from "../../types";
import FacilityCard from "../Shared/FacilityCard";

const Featured = () => {
  const { data, isLoading } = useGetAllFacilityQuery([
    { name: "limit", value: 8 },
    { name: "page", value: 1 },
  ]);
  return (
    <div className="mt-24 container mx-auto">
      <h1 className="text-3xl md:text-4xl mb-10">Featured Facilities</h1>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {isLoading && (
          <div className="flex items-center justify-center mt-4">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        )}

        {data?.data?.facilities.map((item: TFacility) => (
          <FacilityCard key={item._id} facility={item} />
          // <NewCard key={item._id} facility={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
