import { MdOutlineHomeWork } from "react-icons/md";
import { useGetAllFacilityQuery } from "../../../../redux/features/facility/facilityManagement.api";

const TotalFacility = () => {
  const { data } = useGetAllFacilityQuery(undefined);
  console.log(data?.data.facilities);
  return (
    <div>
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm p-4 flex justify-between items-start border mt-10 ms-6">
        <div className="space-y-1">
          <h2 className="text-sm text-gray-500">Total Facilities</h2>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-900">
              {data?.data?.facilities?.length}
            </span>
            <span className="px-2 py-0.5 text-xs text-emerald-700 bg-emerald-50 rounded-full">
              Active
            </span>
          </div>
        </div>
        <div className="rounded-full p-3 bg-orange-50">
          <MdOutlineHomeWork className="w-5 h-5 text-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default TotalFacility;