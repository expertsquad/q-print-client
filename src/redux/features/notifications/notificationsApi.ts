import { baseApi } from "../api/baseApi";

export const notificationsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query({
      query: (data) => ({
        url: `/notification/me`,
        method: "GET",
      }),
      providesTags: ["notification"],
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationsApi;
