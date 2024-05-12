import { baseApi } from "../api/baseApi";
export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <== Get Review Query ==>
    getReview: build.query({
      query: (data) => ({
        url: "/review/",
        method: "GET",
      }),
      providesTags: ["review"],
    }),
    // <== Get review by Id Query ==>
    reviewById: build.query({
      query: (data) => ({
        url: `/review?${data}`,
        method: "GET",
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
    //  <== Update Review ==>
    updateReview: build.mutation({
      query: (data) => ({
        url: `/review/${data.id}`,
        method: "PUT",
        data: data,
      }),
      invalidatesTags: ["review"],
    }),
  }),
});

export const {
  useGetReviewQuery,
  useAddReviewMutation,
  useReviewByIdQuery,
  useUpdateReviewMutation,
} = reviewApi;
export default reviewApi.reducer;
