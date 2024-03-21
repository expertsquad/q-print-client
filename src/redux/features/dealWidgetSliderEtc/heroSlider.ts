import { baseApi } from "../api/baseApi";

export const heroSlider = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getHeroSlider: build.query({
      query: (data) => ({
        url: "/promotions/slider",
        method: "GET",
        data,
      }),
      providesTags: ["hero-slider"],
    }),
  }),
});

export const { useGetHeroSliderQuery } = heroSlider;
