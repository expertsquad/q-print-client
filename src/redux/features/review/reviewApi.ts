import { baseApi } from "../api/baseApi";
export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <== Get Review Query ==>
    getReview: build.query({
      query: (data) => ({
        url: "/review",
        method: "GET",
        data,
      }),
      providesTags: ["review"],
    }),
  }),
});

// == Export Method ==
export const { useGetReviewQuery } = reviewApi;
