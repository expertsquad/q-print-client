import { baseApi } from "../api/baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <==Get Products Query ==>
    getProducts: build.query({
      query: (data) => ({
        url: "/product",
        method: "GET",
        data,
      }),
      providesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
