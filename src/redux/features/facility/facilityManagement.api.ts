import { baseApi } from "../../api/baseApi";

const facilityManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: () => {
        return {
          url: "/facility",
          method: "GET",
        };
      },
    }),
    createFacility: builder.mutation({
      query: (info) => {
        return {
          url: "/facility",
          method: "POST",
          body: info.facility,
        };
      },
    }),
    // updateFacility: builder.mutation({
    //   query: (info) => {
    //     return {
    //       url: "/facility/:id",
    //       method: "PUT",
    //       body: info.facility,
    //     };
    //   },
    // }),
  }),
});

export const { useCreateFacilityMutation, useGetAllFacilityQuery } =
  facilityManagementApi;
