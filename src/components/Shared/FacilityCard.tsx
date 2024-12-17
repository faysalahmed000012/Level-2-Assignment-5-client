import { useNavigate } from "react-router-dom";
import { TFacility } from "../../types";

const FacilityCard = ({ facility }: { facility: TFacility }) => {
  const navigate = useNavigate();

  const { _id, name, imgUrl, description, pricePerHour, location } = facility;

  return (
    <div className="card md:w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container with Aspect Ratio */}
      <figure className="relative">
        <img
          //   src="/placeholder.svg?height=300&width=400"
          src={imgUrl}
          alt={name}
          className="w-full h-[150px] object-cover"
        />
        <div className="absolute top-4 right-4">
          <div className="badge badge-primary text-white text-lg font-semibold p-4">
            ${pricePerHour}/hr
          </div>
        </div>
      </figure>

      <div className="card-body p-4">
        {/* Title and Rating */}
        <div className="flex justify-between items-center mb-1">
          <h2 className="card-title text-xl font-bold">{name}</h2>
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
          <span>{location}</span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-2">
          <div className="badge badge-outline">Indoor</div>
          <div className="badge badge-outline">Air Conditioned</div>
          <div className="badge badge-outline">Professional</div>
        </div>

        {/* Description */}
        <p className="text-sm text-base-content/80 mb-3">{description}</p>

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
          <button
            onClick={() => navigate(`/facility/${_id}`)}
            className="btn btn-primary text-white"
          >
            View Details
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
