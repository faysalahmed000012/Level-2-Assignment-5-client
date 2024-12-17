import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useCheckAvailabilityQuery,
  useCreateBookingMutation,
} from "../redux/features/booking/bookingManagement.api";
import { useGetFacilityByIdQuery } from "../redux/features/facility/facilityManagement.api";
import { useAppSelector } from "../redux/hooks";

const Bookings = () => {
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth.user);
  if (user?.role == "admin") {
    navigate("/");
    toast.error("Admins Can not book!");
  }

  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const { id } = useParams();
  const { data } = useGetFacilityByIdQuery(id);
  const { data: availablity } = useCheckAvailabilityQuery([
    { name: "date", value: date },
    { name: "facility", value: data?.data?._id },
  ]);
  const [create] = useCreateBookingMutation();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      startTime: { value: number };
      endTime: { value: number };
    };
    const refine = (value) => {
      if (value && value < 10 && value.length < 2) {
        return "0" + value;
      }
      return value;
    };

    const booking = {
      facility: data?.data?._id,
      date: date,
      startTime: `${refine(target.startTime.value)}:00`,
      endTime: `${refine(target.endTime.value)}:00`,
    };
    const response = await create(booking);
    if (response?.data?.data?.result == "true") {
      window.location.replace(response.data?.data?.payment_url);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Book {data?.data?.name}</h2>
          <p className="text-gray-500">
            Price Per Hour: ${data?.data?.pricePerHour}
          </p>
        </div>
        <p className="text-gray-500 mb-8">Location: {data?.data?.location}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="facility" className="block font-medium mb-2">
              Facility
            </label>
            <input
              type="text"
              name="facility"
              id="facility"
              value={data?.data?.name}
              disabled
              className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="date" className="block font-medium mb-2">
              Select Date
            </label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              name="date"
              type="date"
              placeholder="date"
              //  className="input input-bordered"
              required
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
        </div>
        <div className="form-control border border-gray-300 rounded-lg mt-3 p-3">
          <p className="font-semibold">Available Time Slots : </p>
          {availablity?.data.map((slots) => {
            return (
              <div
                key={slots}
                className="flex flex-col md:flex-row items-center justify-between gap-3"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="startTime" className="block font-medium mb-2">
              From (Hour)
            </label>
            <input
              name="startTime"
              type="number"
              placeholder="time"
              max={23}
              min={0}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="endTime" className="block font-medium mb-2">
              To (Hour)
            </label>
            <input
              name="endTime"
              type="number"
              max={24}
              min={0}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="phone" className="block font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="location" className="block font-medium mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 mt-8 w-full"
        >
          Create Booking
        </button>
      </form>
    </div>
  );
};

export default Bookings;
