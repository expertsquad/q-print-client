import { baseApi } from "../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <== User Login Mutation ==>
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/user/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    // <== Get Logged In User Info ==>
    getUser: build.query({
      query: (data) => ({
        url: "/user/me",
        method: "GET",
        data,
      }),
      providesTags: ["user"],
    }),
    // <== User Sign Up Mutation ==>
    userSignUp: build.mutation({
      query: (signUpData) => ({
        url: `/user/signup`,
        method: "POST",
        data: signUpData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useUserLoginMutation, useUserSignUpMutation, useGetUserQuery } =
  authApi;
