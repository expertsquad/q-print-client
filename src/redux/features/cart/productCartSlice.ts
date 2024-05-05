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
  total: number;
}

const initialState: CartState = {
  products: [],
  subTotal: 0,

  total: 0,
};

// <== Function to save state into localStorage ==>
const saveStateToLocalStorage = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};

// <== Function to load state from localStorage ==>
const loadStateFromLocalStorage = (): CartState | undefined => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return undefined;
  }
};

const productCartSlice = createSlice({
  name: "cart",
  initialState: loadStateFromLocalStorage() || initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
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

      // sub total
      state.subTotal = calculateSubTotal(state.products);
      saveStateToLocalStorage(state);
      // total
      state.total = calculateTotal(state.products);
      saveStateToLocalStorage(state);
    },
    removeOneFromCart: (state, action: PayloadAction<Product>) => {
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
      // sub total
      state.subTotal = calculateSubTotal(state.products);
      saveStateToLocalStorage(state);
      // total
      state.total = calculateTotal(state.products);
      saveStateToLocalStorage(state);
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const removedProduct = action.payload;
      state.products = state.products.filter(
        (product) =>
          !(
            product._id === removedProduct._id &&
            product.variantName === removedProduct.variantName
          )
      );

      state.subTotal = calculateSubTotal(state.products);
      saveStateToLocalStorage(state);

      state.total = calculateTotal(state.products);
      saveStateToLocalStorage(state);
    },
    resetCart: (state) => {
      localStorage.removeItem("cartState");
      return initialState;
    },
  },
});

// sub total calculate
const calculateSubTotal = (products: Product[]): number => {
  return products.reduce((total, product) => {
    return total + product.price * product.orderQuantity;
  }, 0);
};
// total calculate
const calculateTotal = (products: Product[]): number => {
  return products.reduce((total, product) => {
    return total + product.sellingPrice * product.orderQuantity;
  }, 0);
};

export const { addToCart, removeFromCart, removeOneFromCart, resetCart } =
  productCartSlice.actions;
export default productCartSlice.reducer;
