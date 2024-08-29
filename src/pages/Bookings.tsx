import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCheckAvailabilityQuery } from "../redux/features/booking/bookingManagement.api";
import { useGetFacilityByIdQuery } from "../redux/features/facility/facilityManagement.api";

const Bookings = () => {
  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetFacilityByIdQuery(id);
  const { data: availablity } = useCheckAvailabilityQuery([
    { name: "date", value: date },
    { name: "facility", value: data?.data?._id },
  ]);
  console.log(availablity?.data);
  return (
    <div>
      <h1>Hey Pal! wanna book {data?.data?.name}</h1>
      <div className="hero bg-base-100 min-h-[60vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Book <span className="font-bold">{data?.data?.name}</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Facility</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  disabled
                  value={data?.data?.name}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="date" className="label">
                  <span className="label-text">Select Date</span>
                </label>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  name="date"
                  type="date"
                  placeholder="date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control border border-gray-300 rounded-lg mt-3 p-3">
                <p className="font-semibold">Available Time Slots : </p>
                {availablity?.data.map((slots) => {
                  return (
                    <div
                      key={slots}
                      className="flex items-center justify-between gap-3"
                    >
                      <div>
                        <label htmlFor="time" className="label">
                          <span className="label-text">From</span>
                        </label>
                        <input
                          value={slots.startTime}
                          readOnly
                          name="startTime"
                          type="text"
                          placeholder="time"
                          className="w-[140px] input input-bordered"
                        />
                      </div>
                      <div>
                        <label htmlFor="date" className="label">
                          <span className="label-text">To</span>
                        </label>
                        <input
                          value={slots.endTime}
                          readOnly
                          name="endTime"
                          type="text"
                          placeholder="time"
                          className="w-[140px] input input-bordered"
                          required
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="form-control border border-gray-300 rounded-lg mt-3 p-3">
                <p className="font-semibold">Pick Your Time : </p>
                <p>pick time within any available slots</p>
                <div className="flex items-center justify-center gap-3">
                  <div>
                    <label htmlFor="date" className="label">
                      <span className="label-text">From : </span>
                    </label>
                    <input
                      name="startTime"
                      type="number"
                      placeholder="time"
                      max={24}
                      min={0}
                      className="w-[140px] input input-bordered"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="label">
                      <span className="label-text">To : </span>
                    </label>
                    <input
                      name="endTime"
                      type="number"
                      max={24}
                      min={0}
                      placeholder="time"
                      className="w-[140px] input input-bordered"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">
                  Proceed To Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
