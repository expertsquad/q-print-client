import { baseApi } from "../api/baseApi";
export const onlineOrderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <== Get Online Orders Query ==>
    getOnlineOrder: build.query({
      query: (data) => ({
        url: `/online-order?${data}`,
        method: "GET",
        // data,
      }),
      providesTags: ["onlineOrders"],
    }),
  }),
});

// == Export Method ==
export const { useGetOnlineOrderQuery } = onlineOrderApi;
