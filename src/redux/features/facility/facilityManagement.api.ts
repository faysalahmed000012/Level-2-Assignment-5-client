import { TQueryParam } from "../../../types";
import { baseApi } from "../../api/baseApi";

const facilityManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: (queries) => {
        const params = new URLSearchParams();
        if (queries) {
          queries.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
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
          body: info.facility,
        };
      },
    }),
    deleteFacility: builder.mutation({
      query: (id) => {
        return {
          url: `/facility/${id}`,
          method: "DELETE",
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
  useDeleteFacilityMutation,
} = facilityManagementApi;
