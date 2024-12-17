import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/images/football-field.jpg";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div
      className="hero container mx-auto rounded-b-lg"
      style={{
        backgroundImage: `url(${heroImg})`,
        maxHeight: "70vh",
        minHeight: "70vh",
      }}
    >
      <img
        src="/sports-facility.jpg"
        alt="Sports Facility"
        className="object-cover rounded-b-lg"
      />
      <div className="hero-overlay bg-opacity-60 rounded-b-lg"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1
            className={`mb-5 text-5xl font-bold transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Book Your Perfect Game
          </h1>
          <p
            className={`mb-5 transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Reserve top-notch sports facilities in your area. Easy booking,
            great prices, and world-class amenities await you.
          </p>
          <button
            onClick={() => navigate("/facilities")}
            className="btn btn-primary btn-lg animate-bounce"
          >
            Book Now
          </button>
          <div className="mt-10 flex flex-col md:flex-row items-center gap-3 justify-center md:space-x-4">
            <div className="stat bg-base-200 bg-opacity-50 rounded-box">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Facilities</div>
              <div className="stat-value text-primary">100+</div>
            </div>
            <div className="stat bg-base-200 bg-opacity-50 rounded-box">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Happy Users</div>
              <div className="stat-value text-secondary">50K+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
