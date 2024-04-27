import { baseApi } from "../api/baseApi";
export const onlineOrderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <== Get Online Orders Query ==>
    getOnlineOrder: build.query({
      query: (data) => ({
        url: `/online-order?${data}`,
        method: "GET",
      }),
      providesTags: ["onlineOrders"],
    }),
    // <== Get Single Order By Query ==>
    getOnlineOrderById: build.query({
      query: (id) => ({
        url: `/online-order/${id}`,
        method: "GET",
      }),
      providesTags: ["singleOnlineOrder"],
    }),
    // <== Online Order Post ==>
    onlineOrderPost: build.mutation({
      query: (data) => ({
        url: "/online-order/add",
        method: "POST",
        data: data,
      }),
    }),
  }),
});

// == Export Method ==
export const {
  useGetOnlineOrderQuery,
  useGetOnlineOrderByIdQuery,
  useOnlineOrderPostMutation,
} = onlineOrderApi;
