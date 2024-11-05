import { useNavigate, useParams } from "react-router-dom";
import FacilityCard from "../components/Shared/FacilityCard";
import {
  useGetAllFacilityQuery,
  useGetFacilityByIdQuery,
} from "../redux/features/facility/facilityManagement.api";

const suggestedProducts = [
  {
    id: 1,
    image: "/suggested-product-1.jpg",
    title: "Suggested Product 1",
    description: "Description of Suggested Product 1",
  },
  {
    id: 2,
    image: "/suggested-product-2.jpg",
    title: "Suggested Product 2",
    description: "Description of Suggested Product 2",
  },
  {
    id: 3,
    image: "/suggested-product-3.jpg",
    title: "Suggested Product 3",
    description: "Description of Suggested Product 3",
  },
];

const FacilityDetail = () => {
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

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">{name}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:flex">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={imgUrl} alt="Football Field" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p className="text-gray-600">Price Per Hour: {pricePerHour}</p>
              <p className="text-gray-600">Location: {location}</p>
              <p className="text-gray-600">{description}</p>
              <div className="card-actions justify-start">
                <button
                  onClick={() => navigate(`/booking/${_id}`)}
                  className="btn btn-primary"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Suggested </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {facilityData?.data?.facilities?.map((product) => (
              <FacilityCard key={product._id} facility={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilityDetail;

/*

  <div>
      <h1 className="mt-12 mb-6 text-center text-2xl">
        Details about Your Product <span className="font-bold">{name}</span>
      </h1>
      <div className="hero bg-base-200 min-h-[70vh]">
        <div className="md:min-w-full hero-content flex-col lg:flex-row items-center justify-between p-24">
          <img
            src={imgUrl}
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

*/
