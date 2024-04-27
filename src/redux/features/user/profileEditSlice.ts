import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserSetting {
  fullName: string;
  phoneNumber: string;
  profilePhoto: File | null;
  profileLocalPhoto: string;
}

const initialState: IUserSetting = {
  fullName: "",
  phoneNumber: "",
  profilePhoto: null,
  profileLocalPhoto: "",
};

const profileEditSlice = createSlice({
  name: "profileSetting",
  initialState,
  reducers: {
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },

    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setProfilePhoto: (state, action: PayloadAction<File | null>) => {
      state.profilePhoto = action.payload;
    },
    setProfileLocalPhoto: (state, action: PayloadAction<string>) => {
      state.profileLocalPhoto = action.payload;
    },
  },
});

export const {
  setFullName,
  setPhoneNumber,
  setProfilePhoto,
  setProfileLocalPhoto,
} = profileEditSlice.actions;

export default profileEditSlice.reducer;
