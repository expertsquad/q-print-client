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
    // <== Get Single Order By Query ==>
    getOnlineOrderById: build.query({
      query: (id) => {
        return {
          url: `/online-order/${id}`,
          method: "GET",
        };
      },
      providesTags: ["singleOnlineOrder"],
    }),
  }),
});

// == Export Method ==
export const { useGetOnlineOrderQuery, useGetOnlineOrderByIdQuery } =
  onlineOrderApi;
