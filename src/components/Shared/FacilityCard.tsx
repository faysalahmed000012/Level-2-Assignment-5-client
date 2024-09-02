import { FaMapLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { TFacility } from "../../types";

const FacilityCard = ({ facility }: { facility: TFacility }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={facility.imgUrl} alt={facility.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{facility.name}</h2>
          <p className="">
            <span className="font-bold">Price Per Hour :</span> $
            {facility.pricePerHour}
          </p>
          <p>
            <span className="font-bold">
              <FaMapLocationDot className="inline w-6" /> :{" "}
            </span>{" "}
            {facility.location}
          </p>
          <p className="mt-2"> {facility.description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/facility/${facility._id}`)}
              className="btn btn-primary text-white rounded-md"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
