import { getFromLocalStorage } from "@/utils/local-storage";
import { baseApi } from "../api/baseApi";
import { authKey } from "@/constants/storageKey";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <==Get Products Query ==>
    getProducts: build.query({
      query: (data) => ({
        url: `/product?${data}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getFromLocalStorage(authKey)}`,
        },
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
