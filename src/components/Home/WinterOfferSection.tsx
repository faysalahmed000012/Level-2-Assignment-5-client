import { useNavigate } from "react-router-dom";
import offerImage from "../../assets/images/footballFacility.jpeg";

const WinterOfferSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 mt-24 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center max-h-[300px]">
            <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-transparent hover:border-blue-500 transition-colors duration-300 bg-gradient-to-r from-blue-400 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100">
              <h2 className="text-4xl font-bold text-white mb-4">
                Winter Offer
              </h2>
              <p className="text-lg text-white mb-8">
                Enjoy 20% off on all bookings for our sports facilities during
                November and December.
              </p>
              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-2xl font-bold text-white">20% Off</p>
              </div>
              <button
                onClick={() => navigate("/facilities")}
                className="mt-8 bg-white hover:bg-gray-200 text-blue-500 font-bold py-3 px-6 rounded-md transition-colors duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="md:row-start-1 md:row-end-3 max-h-[300px] overflow-hidden">
            <img
              // src="/api/placeholder/800/600"
              src={offerImage}
              alt="Winter Sports Facility"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterOfferSection;
