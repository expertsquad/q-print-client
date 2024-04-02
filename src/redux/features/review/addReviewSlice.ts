import { createSlice } from "@reduxjs/toolkit";

type addReviewState = {
  orderId: string;
  productId: string;
  rating?: number | string | Blob | null;
  comment: string;
  reviewPhotos?: File | HTMLImageElement | null | [];
};

const initialState: addReviewState = {
  orderId: "",
  productId: "",
  rating: null,
  comment: "",
  reviewPhotos: null,
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
    setReviewPhotos: (state, action) => {
      state.reviewPhotos = action.payload;
    },
  },
});

export const {
  setOrderId,
  setProductId,
  setRating,
  setComment,
  setReviewPhotos,
} = addReviewSlice.actions;

export default addReviewSlice.reducer;
