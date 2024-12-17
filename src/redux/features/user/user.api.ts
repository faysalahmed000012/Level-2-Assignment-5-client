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
    makeAdmin: builder.mutation({
      query: (payload) => {
        return {
          url: "/users/admin",
          method: "POST",
          body: payload,
        };
      },
    }),
    updateUser: builder.mutation({
      query: (payload) => {
        return {
          url: `/users/update/${payload.id}`,
          method: "POST",
          body: payload.user,
        };
      },
    }),
    deleteUser: builder.mutation({
      query: (userId) => {
        return {
          url: `/users/${userId}`,
          method: "DELETE",
        };
      },
    }),
    getCurrentUser: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        params.append("email", query.email);
        return {
          url: "/users/email",
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetCurrentUserQuery,
  useMakeAdminMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
