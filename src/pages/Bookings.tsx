import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useCheckAvailabilityQuery,
  useCreateBookingMutation,
} from "../redux/features/booking/bookingManagement.api";
import { useGetFacilityByIdQuery } from "../redux/features/facility/facilityManagement.api";

const Bookings = () => {
  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const { id } = useParams();
  const { data } = useGetFacilityByIdQuery(id);
  const { data: availablity, refetch } = useCheckAvailabilityQuery([
    { name: "date", value: date },
    { name: "facility", value: data?.data?._id },
  ]);
  const [create] = useCreateBookingMutation();

  const handleCheckAvailability = (e: React.SyntheticEvent) => {
    refetch();
    console.log(availablity);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      startTime: { value: number };
      endTime: { value: number };
    };

    const booking = {
      facility: data?.data?._id,
      date: date,
      startTime: `${target.startTime.value}:00`,
      endTime: `${target.endTime.value}:00`,
    };
    console.log(booking);
    const response = await create(booking);
    console.log(response);
  };

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
            <div className="card-body">
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
              <div onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCheckAvailability(e);
                  }}
                  className="btn btn-primary bg-green-500 text-white"
                >
                  Check Availability
                </button>
              </div>
              <div className="form-control border border-gray-300 rounded-lg mt-3 p-3">
                <p className="font-semibold">Available Time Slots : </p>
                {availablity?.data.map((slots: any) => {
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
                          disabled
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
                          disabled
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
              <form
                onSubmit={handleSubmit}
                className="form-control border border-gray-300 rounded-lg mt-3 p-3"
              >
                <p className="font-semibold">Pick Your Time : </p>
                <p>pick time within any available slots.</p>
                <p>Use 24H format and choose hourly</p>
                <div className="flex items-center justify-center gap-3">
                  <div>
                    <label htmlFor="date" className="label">
                      <span className="label-text">From : </span>
                    </label>
                    <input
                      name="startTime"
                      type="number"
                      placeholder="time"
                      max={23}
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
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary text-white">
                    Create Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
