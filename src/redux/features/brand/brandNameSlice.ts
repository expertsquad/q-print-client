import { createSlice } from "@reduxjs/toolkit";

type selectBrandName = {
  brandName: string;
};
const initialState: selectBrandName = {
  brandName: "",
};

const brandNameSlice = createSlice({
  name: "brandName",
  initialState,
  reducers: {
    setBrandName: (state, action) => {
      state.brandName = action.payload;
    },
    resetBrandName: (state) => {
      return initialState;
    },
  },
});

export const { setBrandName, resetBrandName } = brandNameSlice.actions;
export default brandNameSlice.reducer;
