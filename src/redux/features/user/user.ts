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
    // <== User Sign Up Mutation ==>
    userSignUp: build.mutation({
      query: (data) => ({
        url: `/user/signup`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
    // <== Get Logged In User Info ==>
    getUser: build.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    // <== Get User logged data ==>
    getUserLogged: build.query({
      query: (data) => ({
        url: `/user-address/me?${data}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserSignUpMutation,
  useGetUserQuery,
  useGetUserLoggedQuery,
} = authApi;
