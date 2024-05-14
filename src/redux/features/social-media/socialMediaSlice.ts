import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISocialMedia {
  _id: string;
  mediaName: string;
  isActive: boolean;
  userName: string;
}

const initialState: ISocialMedia[] = [];

const socialMediaSlice = createSlice({
  name: "socialMediaSlice",
  initialState,
  reducers: {
    setSocialMedia: (
      state,
      action: PayloadAction<ISocialMedia | ISocialMedia[]>
    ) => {
      if (action.payload && Array.isArray(action.payload)) {
        console.log("action.payload sp-1", action.payload);

        return action.payload;
      } else if (action.payload && typeof action.payload === "object") {
        const newData = action.payload;
        const isExist = state.find((item) => item._id === newData._id);
        const index = state.findIndex((item) => item._id === newData._id);

        console.log("action.payload sp-2", action.payload);
        return isExist
          ? [...state.slice(0, index), newData, ...state.slice(index + 1)]
          : [...state, action.payload];
      } else {
        console.log("action.payload sp-3", action.payload);
        return initialState;
      }
    },
    resetSocialMedia: (state) => {
      return initialState;
    },
  },
});

export const { setSocialMedia, resetSocialMedia } = socialMediaSlice.actions;

export default socialMediaSlice.reducer;
