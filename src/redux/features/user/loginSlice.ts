import { createSlice } from "@reduxjs/toolkit";
type LoginState = {
  phoneNumber: string;
  password: string;
};
const initialState: LoginState = {
  phoneNumber: "",
  password: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setLoginPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setLoginPhoneNumber, setLoginPassword } = loginSlice.actions;
export default loginSlice.reducer;
