import { baseApi } from "../api/baseApi";

export const dealOfTheDay = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDealOfTheDay: build.query({
      query: (data) => ({
        url: "/promotions/deals-of-the-day",
        method: "GET",
        data,
      }),
      providesTags: ["dealOfTheDay"],
    }),
  }),
});

export const { useGetDealOfTheDayQuery } = dealOfTheDay;
