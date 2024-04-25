import { createSlice } from "@reduxjs/toolkit";

type selectOption = {
  filteredData: string;
};
const initialState: selectOption = {
  filteredData: "",
};

const filterProductReview = createSlice({
  name: "filterReview",
  initialState,
  reducers: {
    setFilteredReview: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { setFilteredReview } = filterProductReview.actions;
export default filterProductReview.reducer;
