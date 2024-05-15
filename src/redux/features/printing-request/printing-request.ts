import { baseApi } from "../api/baseApi";

export const printingRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <== Get Printing Requests Query ==>
    getPrintingRequests: build.query({
      query: (data) => ({
        url: `/printing-setup?${data}`,
        method: "GET",
      }),
      providesTags: ["printingRequests"],
    }),
    // <== Get printing request order history ==>
    printingRequestOrderHistory: build.query({
      query: (data) => ({
        url: `/printing-request?${data}`,
        method: "GET",
      }),
    }),
    printingRequestById: build.query({
      query: (data) => ({
        url: `/printing-request/${data}`,
        method: "GET",
      }),
      providesTags: ["printingRequests"],
    }),
    printingRequestPost: build.mutation({
      query: (data) => ({
        url: "/printing-request/add",
        method: "POST",
        data: data.data,
      }),
    }),
    printingRequestOrderCancel: build.mutation({
      query: (data) => ({
        url: `/printing-request/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["printingRequests"],
    }),
  }),
});

// == Export Method ==
export const {
  useGetPrintingRequestsQuery,
  usePrintingRequestOrderHistoryQuery,
  usePrintingRequestByIdQuery,
  usePrintingRequestOrderCancelMutation,
} = printingRequestApi;
