import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    facility: "Special Football Field",
    date: "2024-11-04",
    startTime: 0,
    endTime: 23,
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Book Special Football Field</h2>
          <p className="text-gray-500">Price Per Hour: $150</p>
        </div>
        <p className="text-gray-500 mb-8">Location: 456 Sports Ave, Khulna.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="facility" className="block font-medium mb-2">
              Facility
            </label>
            <input
              type="text"
              name="facility"
              id="facility"
              value={formData.facility}
              disabled
              className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="date" className="block font-medium mb-2">
              Select Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="startTime" className="block font-medium mb-2">
              From (Hour)
            </label>
            <input
              type="number"
              name="startTime"
              id="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              min="0"
              max="23"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="endTime" className="block font-medium mb-2">
              To (Hour)
            </label>
            <input
              type="number"
              name="endTime"
              id="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
              min="0"
              max="23"
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
              value={formData.name}
              onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
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
              value={formData.phone}
              onChange={handleInputChange}
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
              value={formData.location}
              onChange={handleInputChange}
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

export default BookingForm;

/* 

   <div>
      <div className=" bg-base-100 ">
        <div className="">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-semibold">
              Book <span className="font-bold">{data?.data?.name}</span>
            </h1>
            <p className="text-xl">
              Price Per Hour: ${data?.data?.pricePerHour}
            </p>
            <p className="py-6 text-xl">Location: {data?.data?.location}</p>
          </div>
          <div className="border p-6 rounded-xl bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="flex items-start justify-evenly gap-10">
              <div className="w-4/5">
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
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="w-4/5">
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
                <div>
                  <button
                    onClick={() => {
                      handleCheckAvailability();
                    }}
                    className="btn btn-primary bg-green-500 text-white"
                  >
                    Check Availability
                  </button>
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
                    <button
                      type="submit"
                      className="btn btn-primary text-white"
                    >
                      Create Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

*/
