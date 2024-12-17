import {
  useCancelBookingMutation,
  useGetBookingsByUserQuery,
} from "../../../redux/features/booking/bookingManagement.api";
import { TBooking } from "../../../types";
import BookingDetailModal from "./BookingDetailModal";

const MyBookings = () => {
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "active":
        return "badge-success";
      case "completed":
        return "badge-info";
      case "cancelled":
        return "badge-error";
      default:
        return "badge-ghost";
    }
  };

  const { data } = useGetBookingsByUserQuery(undefined);
  const [cancel] = useCancelBookingMutation();

  const handleCancel = (id: string) => {
    if (confirm("Are You Sure You Want to Cancel This Booking ?")) {
      cancel(id);
      document.location.reload();
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">My Bookings</h1>
          <p className="text-base-content/70">Manage your facility bookings</p>
        </div>

        {/* Stats */}
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Total Bookings</div>
            <div className="stat-value text-primary">{data?.data?.length}</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">Amount Spent</div>
            <div className="stat-value text-secondary">
              $
              {data?.data?.reduce(
                (sum, booking) => sum + booking.payableAmount,
                0
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Facility</th>
              <th>Location</th>
              <th>Date</th>
              <th>Time</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data?.data?.map((booking: TBooking) => (
              <tr key={booking._id} className="hover">
                <td>
                  <div className="font-medium">{booking.facility?.name}</div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-base-content/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    <span>{booking.facility?.location}</span>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-base-content/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-7 8h6m-6 4h6m-7 8h8m-9-16h10a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h1"
                      />{" "}
                    </svg>
                    <span>{booking.date}</span>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-base-content/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      {booking.startTime} - {booking.endTime}
                    </span>
                  </div>
                </td>
                <td>
                  <div className="font-medium">${booking.payableAmount}</div>
                </td>
                <td>
                  <div
                    className={`badge text-white ${getStatusBadgeClass(
                      booking.isBooked ? "active" : "cancelled"
                    )} gap-2`}
                  >
                    <div className="w-2 h-2 rounded-full bg-current"></div>
                    {booking.isBooked ? "confirmed" : "cancelled"}
                  </div>
                </td>
                <td>
                  <div className="flex gap-2">
                    <BookingDetailModal booking={booking} />
                    <button
                      onClick={() => handleCancel(booking._id as string)}
                      className="btn text-white btn-sm btn-error"
                    >
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* <div className="flex justify-center">
        <div className="join">
          <button className="join-item btn btn-sm">«</button>
          <button className="join-item btn btn-sm btn-active">1</button>
          <button className="join-item btn btn-sm">2</button>
          <button className="join-item btn btn-sm">3</button>
          <button className="join-item btn btn-sm">»</button>
        </div>
      </div> */}
    </div>
  );
};

export default MyBookings;
