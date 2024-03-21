import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: [
    "user",
    "brands",
    "products",
    "category",
    "printingRequests",
    "onlineOrders",
    "review",
    "dealOfTheDay",
    "bestDeals",
    "hero-slider",
  ],
});
