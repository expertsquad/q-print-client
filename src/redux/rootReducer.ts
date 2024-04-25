import { baseApi } from "./features/api/baseApi";
import addReviewSlice from "./features/review/addReviewSlice";
import signUpSlice from "./features/user/signUpSlice";
import loginSlice from "./features/user/loginSlice";
import categoryFilterSlice from "./features/category/categoryFilterSlice";
import productsByCategorySlice from "./features/brand/productsByCategorySlice";
import brandNameSlice from "./features/brand/brandNameSlice";
import FilterByPriceSlice from "./features/filterByPrice/FilterByPriceSlice";
import changePassword from "./features/user/changePassword";
import shippingAddressSlice from "./features/user/shippingAddressSlice";
import postPrintingRequestSlice from "./features/printing-request/postPrintingRequestSlice";
import productCartSlice from "./features/cart/productCartSlice";
import favouriteCartSlice from "./features/wishlist/favouriteCartSlice";
import quickOrder from "./features/quick-order/quickOrder";
import filterProductReview from "./features/review/filterProductReview";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  signUp: signUpSlice,
  login: loginSlice,
  addReview: addReviewSlice,
  categoryOption: categoryFilterSlice,
  productByCategory: productsByCategorySlice,
  productByBrandName: brandNameSlice,
  priceRangeSlice: FilterByPriceSlice,
  changePasswordSlice: changePassword,
  updateShippingInfo: shippingAddressSlice,
  printingRequestOrder: postPrintingRequestSlice,
  productCartSlice: productCartSlice,
  favouriteCartSlice: favouriteCartSlice,
  singleQuickOrder: quickOrder,
  filteredProductByReview: filterProductReview,
};
