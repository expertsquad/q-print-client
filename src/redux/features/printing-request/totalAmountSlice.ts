// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface TotalAmountState {
//   totalAmount: number;
//   quantity: number;
//   file: File | null | any;
// }

// const initialState: TotalAmountState = {
//   totalAmount: 0,
//   quantity: 1,
//   file: null,
// };

// const totalAmountSlice = createSlice({
//   name: "totalAmount",
//   initialState,
//   reducers: {
//     setPrintingTotalAmount: (state, action) => {
//       state.totalAmount = action.payload;
//     },
//     incrementQuantity: (state) => {
//       state.quantity += 1;
//     },
//     decrementQuantity: (state) => {
//       if (state.quantity > 1) {
//         state.quantity -= 1;
//       }
//     },
//     setFile: (state, action: PayloadAction<File | null>) => {
//       state.file = action.payload;
//     },
//   },
// });

// export const {
//   setPrintingTotalAmount,
//   incrementQuantity,
//   decrementQuantity,
//   setFile,
// } = totalAmountSlice.actions;

// export default totalAmountSlice.reducer;
