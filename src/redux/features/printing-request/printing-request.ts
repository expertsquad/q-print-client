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
        url: "/printing-request/660ec8f6e1d99e7fdccc7d25",
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
  }),
});

// == Export Method ==
export const {
  useGetPrintingRequestsQuery,
  usePrintingRequestOrderHistoryQuery,
  usePrintingRequestByIdQuery,
} = printingRequestApi;
