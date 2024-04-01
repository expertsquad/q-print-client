import { baseApi } from "../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // <== User Login Mutation ==>
    userLogin: build.mutation({
      query: (data) => ({
        url: `/user/login`,
        method: "POST",
        data: data,
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
    getUserAddress: build.query({
      query: (data) => ({
        url: `/user-address/me`,
        method: "GET",
      }),
      providesTags: ["address"],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserSignUpMutation,
  useGetUserQuery,
  useGetUserAddressQuery,
} = authApi;
