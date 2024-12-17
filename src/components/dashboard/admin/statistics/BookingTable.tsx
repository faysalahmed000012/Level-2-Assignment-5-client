import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetAllBookingsQuery } from "../../../../redux/features/booking/bookingManagement.api";

const BookingStatistics = () => {
  // If no bookings data, show empty state

  const { data, isLoading, isFetching } = useGetAllBookingsQuery(undefined);
  console.log(data);
  const bookings = data?.data;

  if (isFetching || isLoading) {
    return (
      <div className="w-full h-96 p-4 bg-white rounded-lg shadow-lg flex items-center justify-center">
        <p className="text-gray-500">Loading ...</p>
      </div>
    );
  }

  if (!isLoading && !bookings) {
    return (
      <div className="w-full h-96 p-4 bg-white rounded-lg shadow-lg flex items-center justify-center">
        <p className="text-gray-500">No booking data available</p>
      </div>
    );
  }

  // Process bookings data to get monthly counts
  const getMonthlyBookings = () => {
    const monthlyData = new Array(12).fill(0).map((_, index) => ({
      month: new Date(2024, index).toLocaleString("default", {
        month: "short",
      }),
      count: 0,
    }));

    bookings.forEach((booking) => {
      try {
        const bookingDate = new Date(booking.date);
        if (!isNaN(bookingDate.getTime())) {
          const monthIndex = bookingDate.getMonth();
          monthlyData[monthIndex].count += 1;
        }
      } catch (error) {
        console.error("Error processing booking:", error);
      }
    });

    return monthlyData;
  };

  const monthlyBookings = getMonthlyBookings();

  return (
    <div className="w-full h-96 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Monthly Booking Statistics</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={monthlyBookings}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            label={{ value: "Months", position: "bottom" }}
          />
          <YAxis
            label={{
              value: "Number of Bookings",
              angle: -90,
              position: "left",
            }}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="count"
            name="Bookings"
            fill="#4F46E5"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingStatistics;
