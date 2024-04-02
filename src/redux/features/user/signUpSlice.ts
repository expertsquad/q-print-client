import { createSlice } from "@reduxjs/toolkit";

type SignUpState = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  qid: string;
  phoneNumber: string;
};

const initialState: SignUpState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  qid: "",
  phoneNumber: "",
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setQid: (state, action) => {
      state.qid = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
  },
});

export const {
  setFullName,
  setQid,
  setEmail,
  setPassword,
  setConfirmPassword,
  setPhoneNumber,
} = signUpSlice.actions;

export default signUpSlice.reducer;
