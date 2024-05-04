import { baseApi } from "../api/baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <==Get Products Query ==>
    getProducts: build.query({
      query: (data) => ({
        url: `/product?${data}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    // <== Get Product By Id ==>
    getProductById: build.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
    // <== Get products by search ==>
    productsBySearch: build.query({
      query: (data) => ({
        url: `/product?searchTerm=${data}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useProductsBySearchQuery,
} = productsApi;
