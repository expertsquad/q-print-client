import { baseApi } from "./features/api/baseApi";
import cartReducer from "@/redux/features/cart/cartSlice";
import favouriteReducer from "@/redux/features/wishlist/favouriteSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  cart: cartReducer,
  favourite: favouriteReducer,
};
