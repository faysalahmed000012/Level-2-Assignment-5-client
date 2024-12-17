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

  const numbers = [...Array(totalPage + 1).keys()].slice(1);

  const handleDelete = (id: string) => {
    if (confirm("Are You Sure You Want to Delete ?")) {
      del(id);
      document.location.reload();
    }
  };

  return (
    <div>
      <div className="ms-1 md:ms-10 mt-10">
        <h1 className="text-2xl font-bold">Manage Facilities</h1>
        <p className="text-base-content/70">Manage your facilities</p>
      </div>
      <div className="ms-10">
        <Controllers setLimit={setLimit} />
      </div>
      {isLoading && (
        <div>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
      <div className="ms-1 md:ms-10 grid lg:grid-cols-3 gap-6">
        {data?.data?.facilities.map((facility: TFacility) => (
          <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Image Container with Aspect Ratio */}
            <figure className="relative">
              <img
                //   src="/placeholder.svg?height=300&width=400"
                src={facility?.imgUrl}
                alt={facility?.name}
                className="w-full h-[150px] object-cover"
              />
              <div className="absolute top-4 right-4">
                <div className="badge badge-primary text-white text-lg font-semibold p-4">
                  ${facility?.pricePerHour}/hr
                </div>
              </div>
            </figure>

            <div className="card-body p-4">
              {/* Title and Rating */}
              <div className="flex justify-between items-center mb-1">
                <h2 className="card-title text-xl font-bold">
                  {facility?.name}
                </h2>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-primary"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-primary"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-primary"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-primary"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-primary"
                  />
                </div>
              </div>

              {/* Location with Icon */}
              <div className="flex items-center gap-2 text-base-content/70 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{facility?.location}</span>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-2">
                <div className="badge badge-outline">Indoor</div>
                <div className="badge badge-outline">Air Conditioned</div>
                <div className="badge badge-outline">Professional</div>
              </div>

              {/* Description */}
              <p className="text-sm text-base-content/80 mb-3">
                {facility?.description}
              </p>

              {/* Amenities */}
              <div className="flex gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Lockers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Showers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Parking</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="card-actions justify-between items-center">
                <AddEditModal facility={facility} isEditMode={true} />
                <button
                  onClick={() => handleDelete(facility?._id)}
                  className="btn btn-error text-white"
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
