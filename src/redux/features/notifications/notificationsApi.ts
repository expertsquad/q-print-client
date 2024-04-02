import { baseApi } from "../api/baseApi";

export const notificationsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query({
      query: () => ({
        url: "/notification/me",
        method: "GET",
      }),
      providesTags: ["notifications"],
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationsApi;
