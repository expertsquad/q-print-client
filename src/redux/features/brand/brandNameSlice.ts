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
  },
});

export const { setBrandName } = brandNameSlice.actions;
export default brandNameSlice.reducer;
