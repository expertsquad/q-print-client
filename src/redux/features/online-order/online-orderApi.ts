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
    // <== Cancel Order by Status ==>
    cancelOrderByStatus: build.mutation({
      query: (data) => ({
        url: `/online-order/${data.id}`,
        method: "PUT",
        data: data.data,
      }),
      invalidatesTags: ["onlineOrders"],
    }),
  }),
});

export const {
  useGetOnlineOrderQuery,
  useGetOnlineOrderByIdQuery,
  useOnlineOrderPostMutation,
  useCancelOrderByStatusMutation,
} = onlineOrderApi;
