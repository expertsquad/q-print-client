import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  products: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<any>) => {
      const alreadyAdded = state.products.find(
        (product: any) => product._id === action.payload._id
      );
      if (alreadyAdded) {
        alreadyAdded.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromFavourite: (state, action: PayloadAction<any>) => {
      state.products = state.products.filter(
        (product: any) => product._id !== action.payload._id
      );
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
