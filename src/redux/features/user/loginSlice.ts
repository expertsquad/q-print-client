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
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setPhoneNumber, setPassword } = loginSlice.actions;
export default loginSlice.reducer;
