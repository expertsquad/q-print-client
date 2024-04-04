import { createSlice } from "@reduxjs/toolkit";

interface TotalAmountState {
  totalAmount: number;
  quantity: number;
}

const initialState: TotalAmountState = {
  totalAmount: 0,
  quantity: 1,
};

const totalAmountSlice = createSlice({
  name: "totalAmount",
  initialState,
  reducers: {
    setPrintingTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
    incrementQuantity: (state) => {
      state.quantity += 1;
    },
    decrementQuantity: (state) => {
      if (state.quantity > 1) {
        state.quantity -= 1;
      }
    },
  },
});

export const { setPrintingTotalAmount, incrementQuantity, decrementQuantity } =
  totalAmountSlice.actions;

export default totalAmountSlice.reducer;
