import { createSlice } from "@reduxjs/toolkit";

type addReviewState = {
  orderId: string;
  productId: string;
  rating: number;
  comment: string;
};

const initialState: addReviewState = {
  orderId: "",
  productId: "",
  rating: 0,
  comment: "",
};

const addReviewSlice = createSlice({
  name: "addReview",
  initialState,
  reducers: {
    setOrderId: (state, action) => {
      state.orderId = action.payload;
    },
    setProductId: (state, action) => {
      state.productId = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setComment: (state, action) => {
      state.comment = action.payload;
    },
  },
});

export const { setOrderId, setProductId, setRating, setComment } =
  addReviewSlice.actions;

export default addReviewSlice.reducer;
