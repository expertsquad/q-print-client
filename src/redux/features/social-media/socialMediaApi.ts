import { baseApi } from "../api/baseApi";

export const socialMediaApi: any = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get social media data
    getSocialMedia: build.query({
      query: (query?: string) => ({
        url: "/settings/social-media?" + query,
        method: "GET",
      }),
      providesTags: ["social-media"],
    }),

    // get a single social media

    getSingleSocialMedia: build.query({
      query: (id) => ({
        url: `/settings/social-media/${id}`,
        method: "GET",
      }),
      providesTags: ["social-media"],
    }),
  }),
});

export const {useGetSocialMediaQuery,useGetSingleSocialMediaQuery} = socialMediaApi;
