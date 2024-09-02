import { useState } from "react";
import {
  useDeleteFacilityMutation,
  useGetAllFacilityQuery,
} from "../../../../redux/features/facility/facilityManagement.api";
import { TFacility } from "../../../../types";
import AddEditModal from "./AddEditModal";
import Controllers from "./Controllers";

const ManageFacilities = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllFacilityQuery([
    { name: "limit", value: limit },
    { name: "page", value: page },
  ]);
  const [del] = useDeleteFacilityMutation();

  const totalPage = data?.data?.meta?.totalPage || 1;
  // pagination
  const numbers = [...Array(totalPage + 1).keys()].slice(1);

  const handleDelete = (id: string) => {
    if (confirm("Are You Sure You Want to Delete ?")) {
      del(id);
      document.location.reload();
    }
  };

  return (
    <div>
      <h1 className="text-2xl mt-10 ms-10 mb-6">All Facilities : </h1>
      <div className="ms-10">
        <Controllers setLimit={setLimit} />
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
              <img src={item.imgUrl} alt="Shoes" />
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
                <AddEditModal isEditMode={true} facility={item} />

                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn bg-red-500 text-white hover:bg-slate-200 hover:border hover:border-red-500 hover:text-black"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
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

export default ManageFacilities;
