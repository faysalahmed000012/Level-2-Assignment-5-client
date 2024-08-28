import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => {
        return {
          url: "/users",
          method: "GET",
        };
      },
    }),
    getCurrentUser: builder.query({
      query: (args) => {
        return {
          url: "/users/email",
          method: "GET",
          body: args.email,
        };
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useGetCurrentUserQuery } = userApi;
