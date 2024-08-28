import { TFacility } from "../../types";

const FacilityCard = ({ facility }: { facility: TFacility }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{facility.name}</h2>
          <p className="mt-2">{facility.pricePerHour}</p>
          <p className="mt-2">{facility.location}</p>
          <p className="mt-2">{facility.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
