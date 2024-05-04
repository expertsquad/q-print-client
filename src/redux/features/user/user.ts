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
    // <== Get User logged address ==>
    getUserAddress: build.query({
      query: (data) => ({
        url: `/user-address/me?${data}`,
        method: "GET",
      }),
      providesTags: ["address"],
    }),
    // <== Change Password ==>
    changePassword: build.mutation({
      query: (data) => ({
        url: "/user/change-password",
        method: "PUT",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
    // <== Shipping address update ==>
    updateShippingAddress: build.mutation({
      query: (data) => ({
        url: `/user-address/${data.id}`,
        method: "PUT",
        data: data.data,
      }),
      invalidatesTags: ["shipping-address"],
    }),
    // <== Shipping address update ==>
    addShippingAddress: build.mutation({
      query: (data) => ({
        url: `/user-address/add`,
        method: "POST",
        data: data.data,
      }),
      invalidatesTags: ["shipping-address"],
    }),
    // update me
    updateMe: build.mutation({
      query: (data) => ({
        url: "/user/update",
        method: "PUT",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
    // <== Add new user address ==>
    addNewUserAddress: build.mutation({
      query: (data) => ({
        url: "/user-address/add",
        method: "POST",
        data,
      }),
      invalidatesTags: ["address"],
    }),
    // <== Verify User by OTP ==>
    verifyUserByOtp: build.mutation({
      query: (data) => ({
        url: `/user/verify-email`,
        method: "PUT",
        data: data.data,
      }),
      invalidatesTags: ["verify-email"],
    }),
  }),
});

export const {
  useUpdateShippingAddressMutation,
  useUpdateMeMutation,
  useUserLoginMutation,
  useUserSignUpMutation,
  useGetUserQuery,
  useGetUserAddressQuery,
  useChangePasswordMutation,
  useAddShippingAddressMutation,
  useAddNewUserAddressMutation,
  useVerifyUserByOtpMutation,
} = authApi;
