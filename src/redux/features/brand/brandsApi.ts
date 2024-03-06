import { baseApi } from "../api/baseApi";

export const brandsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //   <==Get Brands Data Query==>
    getBrands: build.query({
      query: (data) => ({
        url: "/brand",
        method: "GET",
        data,
      }),
      providesTags: ["brands"],
    }),
  }),
});

export const { useGetBrandsQuery } = brandsApi;
