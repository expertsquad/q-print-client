import { createSlice } from "@reduxjs/toolkit";

type selectedSubcategoryName = {
  selectedSubcategoryName: string;
};
const initialState: selectedSubcategoryName = {
  selectedSubcategoryName: "",
};

const productsBySubcategory = createSlice({
  name: "productsBySubcategory",
  initialState,
  reducers: {
    setSelectedSubcategoryName: (state, action) => {
      state.selectedSubcategoryName = action.payload;
    },
    resetSelectedSubcategoryName: (state) => {
      return initialState;
    },
  },
});
