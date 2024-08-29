import { TQueryParam } from "../../../types";
import { baseApi } from "../../api/baseApi";

const bookingManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => {
        return {
          url: "/bookings",
          method: "GET",
        };
      },
    }),
    checkAvailability: builder.query({
      query: (queries) => {
        const params = new URLSearchParams();
        console.log(queries);
        if (queries) {
          queries.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/check-availability",
          method: "GET",
          params: params,
        };
      },
    }),
    createBooking: builder.mutation({
      query: (info) => {
        console.log(info);
        return {
          url: "/bookings",
          method: "POST",
          body: info,
        };
      },
    }),
  }),
});

export const {
  useCheckAvailabilityQuery,
  useGetAllBookingsQuery,
  useCreateBookingMutation,
} = bookingManagementApi;
