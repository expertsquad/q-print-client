import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IPrintingRequestOrder = {
  payment: {
    paymentStatus: string;
    paymentMethod: string;
  };
  shippingAddress: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    streetAddress: string;
    state: string;
    country: string;
    zipCode: number;
    companyName?: string;
    isDefault: boolean;
  };
  paperSize: {
    height: string | number;
    width: string | number;
    _id?: string;
  };
  printingColorModeId: string;
  paperTypeId: string;
  printingRequestFile: File | null | any;
  totalQuantity: number;

  paperTypePrice: number;
  printingModePrice: number | null;
};

const initialState: any | Record<string | number, unknown> = {};

const postPrintingRequest = createSlice({
  name: "printingRequestOrder",
  initialState,
  reducers: {
    setPrintingRequest: (
      state,
      action: PayloadAction<Partial<any> | false>
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
    resetPrinting: (state) => {
      return initialState;
    },
    resetShippingAddress: (state) => {
      return {
        ...state,
        shippingAddress: initialState.shippingAddress,
      };
    },
  },
});

export const { setPrintingRequest, resetPrinting, resetShippingAddress } =
  postPrintingRequest.actions;
export default postPrintingRequest.reducer;
