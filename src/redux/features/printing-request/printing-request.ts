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
  }),
});

// == Export Method ==
export const {
  useGetPrintingRequestsQuery,
  usePrintingRequestOrderHistoryQuery,
} = printingRequestApi;
