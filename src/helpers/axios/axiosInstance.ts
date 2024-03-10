// import { authKey } from "@/constants/storageKey";
// import { getFromLocalStorage } from "@/utils/local-storage";
// import axios from "axios";

// const instance = axios.create();
// instance.defaults.headers.post["Content-Type"] = "application/json";
// instance.defaults.headers["Accept"] = "application/json";
// instance.defaults.timeout = 60000;

// // <== Add a request Interceptor ==>
// instance.interceptors.request.use(
//   function (config) {
//     const accessToken = getFromLocalStorage(authKey);
//     if (accessToken) {
//       config.headers.Authorization = accessToken;
//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// // <== Add a response Interceptor ==>
// instance.interceptors.response.use(
//   function (response) {
//     const responseObject: any = {
//       data: response?.data?.data,
//       meta: response?.data?.meta,
//     };
//     return responseObject;
//   },
//   function (error) {
//     const responseObject: any = {
//       statusCode: error?.response?.data?.statusCode || 500,
//       messages: error?.response?.data?.messages || "Something went wrong",
//       errorMessages: error?.response?.data?.errorMessages,
//     };
//     // return Promise.reject(error);
//     return responseObject;
//   }
// );

// export { instance };
