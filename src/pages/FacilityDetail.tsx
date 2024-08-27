import { useParams } from "react-router-dom";

const FacilityDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="mt-12 mb-6 text-center text-2xl">
        Details about Your Product {id}
      </h1>
      <div className="hero bg-base-200 min-h-[70vh]">
        <div className="md:min-w-full hero-content flex-col lg:flex-row items-center justify-between p-24">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className=" w-[20%] h-[10%] rounded-lg shadow-2xl"
          />
          <div className="md:max-w-[50%] mx-auto">
            <h1 className="text-5xl font-bold">Product Name</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white">Book</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetail;
