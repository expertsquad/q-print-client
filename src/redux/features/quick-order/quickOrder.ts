import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SingleQuickOrderProps = {
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

const initialState: SingleQuickOrderProps | Record<string, unknown> = {};

// const initialState: SingleQuickOrderProps = {
//   orderItems: [
//     {
//       productId: "",
//       variantName: "",
//       orderQuantity: 1,
//     },
//   ],
//   buyer: {
//     fullName: "",
//     phoneNumber: "",
//     address: "",
//   },
// };

const singleQuickOrderSlice = createSlice({
  name: "quickOrder",
  initialState,
  reducers: {
    setSingleQuickOrder: (
      state,
      action: PayloadAction<Partial<SingleQuickOrderProps> | false>
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

export const { resetQuickOrder, setSingleQuickOrder } =
  singleQuickOrderSlice.actions;
export default singleQuickOrderSlice.reducer;
