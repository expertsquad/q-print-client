import { baseApi } from "../api/baseApi";

export const printingRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <==Get Printing Requests Query ==>
    getPrintingRequests: build.query({
      query: (data) => ({
        url: `/printing-setup?${data}`,
        method: "GET",
      }),
      providesTags: ["printingRequests"],
    }),
  }),
});

// == Export Method ==
export const { useGetPrintingRequestsQuery } = printingRequestApi;
