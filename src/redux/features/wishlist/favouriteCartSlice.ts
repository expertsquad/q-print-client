import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  variant: Variant;
  orderQuantity: number;
  variantName: string;
  variantId: string;
  discountPercentage: number;
  discountedPrice: number;
  inStock: number;
  isDefault: boolean;
  sellingPrice: number;
  stockAlert: number;
  price: number;
  productId: string;
}

interface Variant {
  isDefault: boolean;
  discountedPrice?: number;
  sellingPrice: number;
}

interface CartState {
  products: Product[];
  subTotal: number;
  discount: number;
}

const initialState: CartState = {
  products: [],
  subTotal: 0,
  discount: 0,
};

const calculateSubTotal = (products: Product[]): number => {
  return products.reduce((total, product) => {
    return total + product.price * product.orderQuantity;
  }, 0);
};

const productCartSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<Product>) => {
      const addedProduct = action.payload;
      const existingProductIndex = state.products.findIndex(
        (product) =>
          product._id === addedProduct._id &&
          product.variantName === addedProduct.variantName
      );

      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].orderQuantity += 1;
      } else {
        state.products.push(addedProduct);
      }

      state.subTotal = calculateSubTotal(state.products);
    },
    removeOneFromFavourite: (state, action: PayloadAction<Product>) => {
      const removedProduct = action.payload;
      const existingProductIndex = state.products.findIndex(
        (product) =>
          product._id === removedProduct._id &&
          product.variantName === removedProduct.variantName
      );

      if (
        existingProductIndex !== -1 &&
        state.products[existingProductIndex].orderQuantity > 1
      ) {
        state.products[existingProductIndex].orderQuantity -= 1;
      }

      state.subTotal = calculateSubTotal(state.products);
    },
    removeFromFavourite: (state, action: PayloadAction<Product>) => {
      const removedProduct = action.payload;
      state.products = state.products.filter(
        (product) =>
          !(
            product._id === removedProduct._id &&
            product.variantName === removedProduct.variantName
          )
      );

      state.subTotal = calculateSubTotal(state.products);
    },
    setDiscount: (state, action: PayloadAction<number>) => {
      state.discount = action.payload;
    },
    resetCart: (state) => {
      return initialState;
    },
    increaseFavQuantity: (state, action: PayloadAction<Product>) => {
      const { _id, variantName } = action.payload;
      const existingProductIndex = state.products.findIndex(
        (product) => product._id === _id && product.variantName === variantName
      );

      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].orderQuantity += 1;
        state.subTotal = calculateSubTotal(state.products);
      }
    },
    decreaseFavQuantity: (state, action: PayloadAction<Product>) => {
      const { _id, variantName } = action.payload;
      const existingProductIndex = state.products.findIndex(
        (product) => product._id === _id && product.variantName === variantName
      );

      if (
        existingProductIndex !== -1 &&
        state.products[existingProductIndex].orderQuantity > 1
      ) {
        state.products[existingProductIndex].orderQuantity -= 1;
        state.subTotal = calculateSubTotal(state.products);
      }
    },
  },
});

export const {
  addToFavourite,
  removeFromFavourite,
  removeOneFromFavourite,
  setDiscount,
  resetCart,
  increaseFavQuantity,
  decreaseFavQuantity,
} = productCartSlice.actions;
export default productCartSlice.reducer;
