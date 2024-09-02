import { useGetAllBookingsQuery } from "../../../redux/features/booking/bookingManagement.api";

const ManageBookings = () => {
  const { data } = useGetAllBookingsQuery(undefined);
  return (
    <div>
      <h1 className="text-2xl mt-10 ms-10">All Bookings : </h1>
      <div className="ms-10 grid lg:grid-cols-3 gap-6">
        {data?.data?.map((booking) => (
          <div
            key={booking._id}
            className=" ms-1 lg:ms-10 mt-6 p-6 bg-base-200 rounded-xl grid lg:grid-cols-1 gap-6"
          >
            <div className="flex flex-col  items-center justify-around gap-7">
              <div>
                <h1 className="text-xl lg:text-2xl">{booking.facility.name}</h1>
                <p className="max-w-[214px]">{booking.facility.location}</p>
              </div>
              <div className="w-full">
                <p>
                  Time : {booking.startTime} - {booking.endTime}
                </p>
                <p>Payable Amount : ${booking.payableAmount}</p>
                <p>Transaction Id : ${booking.tranId}</p>
              </div>
              <div className="">
                {booking.isBooked == "confirmed" ? (
                  <p className="text-xl text-green-500">Status: Confirmed</p>
                ) : (
                  <p className="text-xl text-red-500">Status Unpaid</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBookings;
