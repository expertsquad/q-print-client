import { baseApi } from "../api/baseApi";

export const forgetPasswordApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <== Post Forget Password ==>
    forgetPassword: build.mutation({
      query: (data) => ({
        url: `/user/forgot-password`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["forget-password"],
    }),
    //   <== OTP ==>
    forgetPasswordOtp: build.mutation({
      query: (data) => ({
        url: `/user/forgot-password-otp`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["forget-password"],
    }),
    // <== Reset and set new password ==>
    resetPassword: build.mutation({
      query: (data) => ({
        url: `/user/reset-password`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["reset-password"],
    }),
  }),
});

export const {
  useForgetPasswordMutation,
  useForgetPasswordOtpMutation,
  useResetPasswordMutation,
} = forgetPasswordApi;
