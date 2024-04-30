import { baseApi } from "../api/baseApi";

export const quickOrderSettings = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuickOrderSetting: build.query({
      query: (data) => ({
        url: "/settings/quick-order-setting",
        method: "GET",
        data,
      }),
      providesTags: ["quick-order"],
    }),
  }),
});

export const { useGetQuickOrderSettingQuery } = quickOrderSettings;
export default quickOrderSettings.reducer;
