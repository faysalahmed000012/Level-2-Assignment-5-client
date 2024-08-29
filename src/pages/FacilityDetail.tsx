import { FaMapLocationDot } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { useGetFacilityByIdQuery } from "../redux/features/facility/facilityManagement.api";

const FacilityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching } = useGetFacilityByIdQuery(id);
  let name, _id: string, location, pricePerHour, description;

  if (data && data.data) {
    ({ name, _id, location, pricePerHour, description } = data.data);
  }

  return (
    <div>
      <h1 className="mt-12 mb-6 text-center text-2xl">
        Details about Your Product <span className="font-bold">{name}</span>
      </h1>
      <div className="hero bg-base-200 min-h-[70vh]">
        <div className="md:min-w-full hero-content flex-col lg:flex-row items-center justify-between p-24">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className=" w-[20%] h-[10%] rounded-lg shadow-2xl"
          />
          <div className="md:max-w-[50%] mx-auto">
            {(isFetching || isLoading) && (
              <span className="loading loading-ring loading-lg"></span>
            )}
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="mt-2">
              <span className="font-bold">Price Per Hour :</span> $
              {pricePerHour}
            </p>
            <p>
              <span className="font-bold">
                <FaMapLocationDot className="inline w-6" /> :{" "}
              </span>{" "}
              {location}
            </p>
            <p className="mt-2"> {description}</p>
            <button
              onClick={() => navigate(`/booking/${_id}`)}
              className="btn btn-primary text-white"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetail;
