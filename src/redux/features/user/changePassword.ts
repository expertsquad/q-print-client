import { createSlice } from "@reduxjs/toolkit";

type IChangePassword = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const initialState: IChangePassword = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const changePasswordSlice = createSlice({
  name: "changePassword",
  initialState,
  reducers: {
    setOldPassword: (state, action) => {
      state.oldPassword = action.payload;
    },
    setNewPassword: (state, action) => {
      state.newPassword = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    clearInput: (state) => {
      return initialState;
    },
  },
});

export const { setOldPassword, setNewPassword, setConfirmPassword, clearInput } =
  changePasswordSlice.actions;
export default changePasswordSlice.reducer;
