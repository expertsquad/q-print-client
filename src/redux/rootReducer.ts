import { baseApi } from "./features/api/baseApi";
import cartReducer from "@/redux/features/cart/cartSlice";
import favouriteReducer from "@/redux/features/wishlist/favouriteSlice";
import signUpSlice from "./features/user/signUpSlice";
import addReviewSlice from "./features/review/addReviewSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  cart: cartReducer,
  favourite: favouriteReducer,
  signUp: signUpSlice,
  addReview: addReviewSlice,
};
