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
    // <== Get Product By Id ==>
    getProductById: build.query({
      query: (productId) => ({
        url: `/product/${productId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
