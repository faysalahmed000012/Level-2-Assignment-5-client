import { useGetBookingsByUserQuery } from "../../../redux/features/booking/bookingManagement.api";

const MyBookings = () => {
  const arr1 = new Array(9).fill("*");
  const { data } = useGetBookingsByUserQuery(undefined);
  console.log(data?.data);
  return (
    <div>
      <h1 className="text-2xl mt-10 ms-10">My Bookings : </h1>
      <div className="grid lg:grid-cols-3 gap-6">
        {data?.data?.map((booking) => (
          <div
            key={booking._id}
            className=" ms-1 lg:ms-10 mt-6 p-6 bg-base-200 rounded-xl grid lg:grid-cols-1 gap-6"
          >
            <div className="flex flex-col  items-center justify-around gap-7">
              <div>
                <h1 className="text-xl lg:text-2xl">
                  {booking.facility?.name}
                </h1>
                <p className="max-w-[214px]">{booking.facility?.location}</p>
              </div>
              <div className="w-full">
                <p className="">
                  Time : {booking.startTime} - {booking.endTime}
                </p>
                <p>Payable Amount : ${booking.payableAmount}</p>
              </div>
              <div className="flex items-center justify-between gap-6">
                <button className="btn btn-primary hover:border hover:border-green-500 hover:bg-slate-200 hover:text-black border-0 text-white bg-green-500">
                  Confirm
                </button>
                <button className="btn hover:border hover:border-red-500 hover:bg-slate-200 hover:text-black btn-primary border-0 text-white bg-red-500">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
