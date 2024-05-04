import { createSlice } from "@reduxjs/toolkit";
type ForgetPassTypes = {
  email: string;
  newPassword: string;
  confirmPassword: string;
};
const initialState: ForgetPassTypes = {
  email: "",
  newPassword: "",
  confirmPassword: "",
};
const loginSlice = createSlice({
  name: "forgetPass",
  initialState,
  reducers: {
    setForgettedEmail: (state, action) => {
      state.email = action.payload;
    },
    setResetNewPassword: (state, action) => {
      state.newPassword = action.payload;
    },
    confirmSetResetNewPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
  },
});

export const {
  setForgettedEmail,
  setResetNewPassword,
  confirmSetResetNewPassword,
} = loginSlice.actions;
export default loginSlice.reducer;
