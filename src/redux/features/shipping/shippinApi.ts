import { baseApi } from "../api/baseApi";

export const shippinApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <== Get Review Query ==>
    getShipping: build.query({
      query: (data) => ({
        url: "/settings/shipping-charge",
        method: "GET",
        data,
      }),
    }),
  }),
});

export const { useGetShippingQuery } = shippinApi;
export default shippinApi.reducer;
