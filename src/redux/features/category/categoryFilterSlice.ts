import { createSlice } from "@reduxjs/toolkit";

type selectOption = {
  options: string;
};
const initialState: selectOption = {
  options: "",
};

const categoryFilterSlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    setFilterOption: (state, action) => {
      state.options = action.payload;
    },
  },
});

export const { setFilterOption } = categoryFilterSlice.actions;
export default categoryFilterSlice.reducer;
