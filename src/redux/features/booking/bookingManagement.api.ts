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
        return {
          url: "/bookings",
          method: "POST",
          body: info,
        };
      },
    }),
    getBookingsByUser: builder.query({
      query: () => {
        return {
          url: "/bookings/user",
          method: "Get",
        };
      },
    }),
    cancelBooking: builder.mutation({
      query: (id) => {
        return {
          url: `/bookings/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useCheckAvailabilityQuery,
  useGetAllBookingsQuery,
  useCreateBookingMutation,
  useGetBookingsByUserQuery,
  useCancelBookingMutation,
} = bookingManagementApi;
