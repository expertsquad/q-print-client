import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuickOrderTypes {
  productPrice: number;
  orderQuantity: number;
}

const initialState: QuickOrderTypes = {
  productPrice: 0,
  orderQuantity: 0,
};

const quickOrders = createSlice({
  name: "quickorderslice",
  initialState,
  reducers: {
    setQuickOrder: (
      state,
      action: PayloadAction<Partial<QuickOrderTypes> | false>
    ) => {
      if (action.payload === false) {
        return initialState;
      } else {
        return {
          ...state,
          ...action.payload,
        };
      }
    },
    resetQuickOrder: (state) => {
      return initialState;
    },
  },
});

export const { setQuickOrder, resetQuickOrder } = quickOrders.actions;
export default quickOrders.reducer;
