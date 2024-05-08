import { baseApi } from "../api/baseApi";
export const printingRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <== Online Order Post ==>
    addPrinting: build.mutation({
      query: (data) => ({
        url: "/printing-request/add",
        method: "POST",
        data: data,
      }),
    }),
  }),
});

// == Export Method ==
export const { useAddPrintingMutation } = printingRequestApi;
