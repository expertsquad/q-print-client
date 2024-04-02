import { createSlice } from "@reduxjs/toolkit";

type selectCategory = {
  category: string;
};
const initialState: selectCategory = {
  category: "",
};

const productByCategorySlice = createSlice({
  name: "productsCategory",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = productByCategorySlice.actions;
export default productByCategorySlice.reducer;
