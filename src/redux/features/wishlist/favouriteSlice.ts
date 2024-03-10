import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  products: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<any>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addToFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
