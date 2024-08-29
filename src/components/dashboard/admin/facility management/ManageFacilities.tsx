import { useGetAllFacilityQuery } from "../../../../redux/features/facility/facilityManagement.api";
import { TFacility } from "../../../../types";
import Controllers from "./Controllers";

const ManageFacilities = () => {
  const { data, isLoading } = useGetAllFacilityQuery([{ limit: 10 }]);
  return (
    <div>
      <h1 className="text-2xl mt-10 ms-10 mb-6">All Facilities : </h1>
      <div className="ms-10">
        <Controllers />
      </div>
      {isLoading && (
        <div>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
      <div className="ms-1 md:ms-10 grid lg:grid-cols-3 gap-6">
        {data?.data?.facilities.map((item: TFacility) => (
          <div
            key={item._id}
            className="card card-compact bg-base-100 w-96 shadow-xl"
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="mt-2">
                <span className="font-bold">Price Per Hour :</span> $
                {item.pricePerHour}
              </p>
              <p>
                <span className="font-bold">Location :</span> {item.location}
              </p>
              <p className="mt-2"> {item.description}</p>
              <div className="card-actions flex items-center justify-between">
                <button className="btn bg-green-500 text-white hover:border hover:border-green-500 hover:bg-slate-200 hover:text-black">
                  Edit
                </button>
                <button className="btn bg-red-500 text-white hover:bg-slate-200 hover:border hover:border-red-500 hover:text-black">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageFacilities;
