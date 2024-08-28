import { useGetAllFacilityQuery } from "../../redux/features/facility/facilityManagement.api";
import { TFacility } from "../../types";
import FacilityCard from "../Shared/FacilityCard";

const Featured = () => {
  const { data, isError, isLoading } = useGetAllFacilityQuery([{ limit: 8 }]);
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl">Featured Facilities</h1>
      <div className="mt-3 grid lg:grid-cols-4 gap-6">
        {isLoading && (
          <div>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        )}
        {data?.data?.facilities.map((item: TFacility) => (
          <FacilityCard key={item._id} facility={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
