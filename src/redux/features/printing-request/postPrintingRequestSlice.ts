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
    zipCode: string;
  };
  paperSize: {
    height: string;
    width: string;
  };
  printingColorModeId: string;
  paperTypeId: string;
  printingRequestFile: File | null;
  totalQuantity: number;
};

const initialState: IPrintingRequestOrder | Record<string | number, unknown> =
  {};

const postPrintingRequest = createSlice({
  name: "printingRequestOrder",
  initialState,
  reducers: {
    setPrintingRequest: (
      state,
      action: PayloadAction<Partial<IPrintingRequestOrder> | false>
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

export const { setPrintingRequest: setShippingData } =
  postPrintingRequest.actions;
export default postPrintingRequest.reducer;
