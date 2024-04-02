import { baseApi } from "../api/baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <== Get Category Query ==>
    getCategory: build.query({
      query: (data) => ({
        url: "/category",
        method: "GET",
        data,
      }),
      providesTags: ["category"],
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
