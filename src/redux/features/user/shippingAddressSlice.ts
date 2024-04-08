import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IShippingAddress = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  state?: string;
  streetAddress?: string;
  zipCode?: number;
  isDefault?: boolean;
  companyName?: string;
  country?: string;
  _id?: string;
};

const initialState: IShippingAddress = {};

const shippingAddressSlice = createSlice({
  name: "updateShippingInfo",
  initialState,
  reducers: {
    setShippingData: (
      state,
      action: PayloadAction<Partial<IShippingAddress> | false>
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
  },
});

export const { setShippingData } = shippingAddressSlice.actions;
export default shippingAddressSlice.reducer;
