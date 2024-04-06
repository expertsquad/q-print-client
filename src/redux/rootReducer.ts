import { baseApi } from "./features/api/baseApi";
import cartReducer from "@/redux/features/cart/cartSlice";
import favouriteReducer from "@/redux/features/wishlist/favouriteSlice";
import addReviewSlice from "./features/review/addReviewSlice";
import signUpSlice from "./features/user/signUpSlice";
import loginSlice from "./features/user/loginSlice";
import categoryFilterSlice from "./features/category/categoryFilterSlice";
import productsByCategorySlice from "./features/brand/productsByCategorySlice";
import brandNameSlice from "./features/brand/brandNameSlice";
import FilterByPriceSlice from "./features/filterByPrice/FilterByPriceSlice";
import changePassword from "./features/user/changePassword";
import totalAmountSlice from "./features/printing-request/totalAmountSlice";
import shippingAddressSlice from "./features/user/shippingAddressSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  cart: cartReducer,
  favourite: favouriteReducer,
  signUp: signUpSlice,
  login: loginSlice,
  addReview: addReviewSlice,
  categoryOption: categoryFilterSlice,
  productByCategory: productsByCategorySlice,
  productByBrandName: brandNameSlice,
  priceRangeSlice: FilterByPriceSlice,
  changePasswordSlice: changePassword,
  printingReqTotalAmount: totalAmountSlice,
  updateShippingInfo: shippingAddressSlice,
};
