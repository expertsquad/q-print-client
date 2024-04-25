import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MultipleQuickOrderProps = {
  orderItems: [
    {
      productId: string;
      variantName: string;
      orderQuantity: number;
    }
  ];

  buyer: {
    fullName: string;
    phoneNumber: string;
    address: string;
  };
};

const initialState: MultipleQuickOrderProps | Record<string, unknown> = {};

const multipleQuickOrderSlice = createSlice({
  name: "multipleQuickOrder",
  initialState,
  reducers: {
    setMultipleQuickOrder: (
      state,
      action: PayloadAction<Partial<MultipleQuickOrderProps> | false>
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

export const { resetQuickOrder, setMultipleQuickOrder } =
  multipleQuickOrderSlice.actions;
export default multipleQuickOrderSlice.reducer;
