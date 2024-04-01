import { createSlice } from "@reduxjs/toolkit";
type LoginState = {
  email: string;
  password: string;
};
const initialState: LoginState = {
  email: "",
  password: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginEmail: (state, action) => {
      state.email = action.payload;
    },
    setLoginPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setLoginEmail, setLoginPassword } = loginSlice.actions;
export default loginSlice.reducer;
