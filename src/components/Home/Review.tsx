import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import man from "../../assets/images/man.jpeg";

const Review = () => {
  const arr = new Array(8).fill("*");
  return (
    <div>
      <h1 className="mt-20 mb-6 lg:text-3xl text-xl">
        What our valuable customers say about us 😍
      </h1>
      <Swiper
        modules={[Navigation, A11y]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          639: {
            slidesPerView: 2,
          },
          865: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
          1700: {
            slidesPerView: 4,
          },
        }}
        className="cursor-grab"
        spaceBetween={50}
        navigation
      >
        {arr.map((item) => (
          <SwiperSlide key={item}>
            <div className="card bg-base-100 lg:w-96 shadow-xl w-80">
              <div className="card-body">
                <div className="flex gap-3">
                  <img className="w-10 h-10 rounded-full" src={man} alt="" />
                  <div>
                    <h2 className="card-title">John Doe</h2>
                    <p className="">Rated: ⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <p>
                  This is the best facility I've Every seen I am going to give
                  them 5 star 💫
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-2 grid grid-cols-5"></div>
    </div>
  );
};

export default Review;
