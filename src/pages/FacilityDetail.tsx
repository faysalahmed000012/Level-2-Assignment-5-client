import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FacilityCard from "../components/Shared/FacilityCard";
import {
  useGetAllFacilityQuery,
  useGetFacilityByIdQuery,
} from "../redux/features/facility/facilityManagement.api";
import { TFacility } from "../types";

const FacilityDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching } = useGetFacilityByIdQuery(id);
  let name, _id, location, pricePerHour, description, imgUrl;

  if (data && data.data) {
    ({ name, _id, location, pricePerHour, description, imgUrl } = data.data);
  }

  const { data: facilityData } = useGetAllFacilityQuery([
    { name: "limit", value: 3 },
    { name: "page", value: 1 },
  ]);

  const [selectedImage, setSelectedImage] = useState(0);

  // Sample images array
  const images = [imgUrl, imgUrl, imgUrl];

  const amenities = [
    { icon: "🚿", label: "Changing Rooms" },
    { icon: "🚰", label: "Water Facilities" },
    { icon: "🅿️", label: "Parking" },
    { icon: "💡", label: "LED Lighting" },
    { icon: "🧹", label: "Maintenance" },
    { icon: "👥", label: "Staff Support" },
  ];

  return (
    <div className="min-h-screen container mx-auto ">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs px-4 py-4 bg-base-100">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/facility/${_id}`}>{name}</Link>
          </li>
        </ul>
      </div>

      <div className="container mx-auto p-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-video">
              <img
                src={images[selectedImage]}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute top-4 right-4">
                <div className="badge badge-lg bg-primary text-white">
                  ${pricePerHour}/hr
                </div>
              </div>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Preview ${index + 1}`}
                  className={`w-24 h-24 object-cover rounded-lg cursor-pointer transition-all
                    ${
                      selectedImage === index
                        ? "ring-4 ring-primary"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h1 className="card-title text-3xl mb-4">{name}</h1>

              <div className="flex items-center gap-2 mb-4">
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
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-base-content/70">{location}</span>
              </div>

              <div className="divider"></div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="text-base-content/70">{description}</p>
              </div>

              <div className="divider"></div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-xl">{amenity.icon}</span>
                      <span className="text-sm">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="divider"></div>

              <div className="card-actions">
                <button
                  onClick={() => navigate(`/booking/${_id}`)}
                  className="btn btn-primary text-white w-full"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Facilities */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Suggested Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityData?.data?.facilities?.map((facility: TFacility) => (
              <FacilityCard key={facility._id} facility={facility} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;
