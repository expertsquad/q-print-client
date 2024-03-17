import { getFromLocalStorage } from "@/utils/local-storage";
import { baseApi } from "../api/baseApi";
import { authKey } from "@/constants/storageKey";

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
      query: () => ({
        url: "/user/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${getFromLocalStorage(authKey)}`,
        },
      }),
      providesTags: ["user"],
    }),
    // <== Get User logged data ==>
    getUserLogged: build.query({
      query: (data) => ({
        url: `/user-address/me?${data}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getFromLocalStorage(authKey)}`,
        },
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

export const {
  useUserLoginMutation,
  useUserSignUpMutation,
  useGetUserQuery,
  useGetUserLoggedQuery,
} = authApi;
