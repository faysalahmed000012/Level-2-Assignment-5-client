import { baseApi } from "../../api/baseApi";

const facilityManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: (queries) => {
        const params = new URLSearchParams();
        params.append("limit", queries[0].limit);
        return {
          url: "/facility",
          method: "GET",
          params: params,
        };
      },
    }),
    getFacilityById: builder.query({
      query: (id) => {
        return {
          url: `/facility/${id}`,
          method: "GET",
        };
      },
    }),
    createFacility: builder.mutation({
      query: (info) => {
        console.log(info);
        return {
          url: "/facility",
          method: "POST",
          body: info,
        };
      },
    }),
    updateFacility: builder.mutation({
      query: (info) => {
        return {
          url: `/facility/${info._id}`,
          method: "PUT",
          body: info,
        };
      },
    }),
  }),
});

export const {
  useCreateFacilityMutation,
  useGetAllFacilityQuery,
  useGetFacilityByIdQuery,
  useUpdateFacilityMutation,
} = facilityManagementApi;
