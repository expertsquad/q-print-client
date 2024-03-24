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
    // <== Add Review Query ==>
    addReview: build.mutation({
      query: (data) => ({
        url: "/review/add",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["review"],
    }),
  }),
});

// == Export Method ==
export const { useGetReviewQuery, useAddReviewMutation } = reviewApi;
