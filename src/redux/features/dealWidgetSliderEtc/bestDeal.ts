import { baseApi } from "../api/baseApi";

export const bestDeals = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBestDeals: build.query({
      query: (data) => ({
        url: "/promotions/best-deals",
        method: "GET",
        data,
      }),
      providesTags: ["bestDeals"],
    }),
  }),
});

export const { useGetBestDealsQuery } = bestDeals;
