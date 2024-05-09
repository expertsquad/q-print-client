import { baseApi } from "../api/baseApi";

export const quickOrderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <== Add new user address ==>
    quickOrder: build.mutation({
      query: (data) => ({
        url: "/quick-order/add",
        method: "POST",
        data,
      }),
      invalidatesTags: ["quick-order"],
    }),
    quickOrderById: build.query({
      query: (id) => ({
        url: `/quick-order/${id}`,
        method: "GET",
      }),
      providesTags: ["quick-order"],
    }),
  }),
});

export const { useQuickOrderMutation, useQuickOrderByIdQuery } = quickOrderApi;
