import { baseApi } from "./features/api/baseApi";
import cartReducer from "@/redux/features/cart/cartSlice";
import favouriteReducer from "@/redux/features/wishlist/favouriteSlice";
import addReviewSlice from "./features/review/addReviewSlice";
import signUpSlice from "./features/user/signUpSlice";
import loginSlice from "./features/user/loginSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  cart: cartReducer,
  favourite: favouriteReducer,
  signUp: signUpSlice,
  login: loginSlice,
  addReview: addReviewSlice,
};
