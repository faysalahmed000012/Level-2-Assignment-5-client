import { useNavigate } from "react-router-dom";
import HeroImg from "../../assets/images/hero-1.jpeg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero bg-base-100 min-h-[70vh]">
        <div className="min-w-[90%] hero-content flex-col lg:flex-row-reverse lg:gap-10 ">
          <img src={HeroImg} className="flex-1 rounded-lg shadow-2xl " />
          <div className="flex-1">
            <h1 className="text-5xl font-bold">Your Game. Your Place!</h1>
            <p className="py-6">
              Take control of your athletic journey. Our state-of-the-art
              facilities and personalized training programs provide the perfect
              environment to elevate your game. Whether you're a seasoned pro or
              just starting out, we have everything you need to achieve your
              goals.
            </p>
            <button
              onClick={() => navigate("/facilities")}
              className="btn btn-primary text-white rounded-3xl"
            >
              All Facilities
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
