import { createSlice } from "@reduxjs/toolkit";

type selectOption = {
  options: string;
};
const initialState: selectOption = {
  options: "",
};

const productsFilterSlice = createSlice({
  name: "productsFilteByOptions",
  initialState,
  reducers: {
    setProductsFilterOption: (state, action) => {
      state.options = action.payload;
    },
  },
});

export const { setProductsFilterOption } = productsFilterSlice.actions;
export default productsFilterSlice.reducer;
