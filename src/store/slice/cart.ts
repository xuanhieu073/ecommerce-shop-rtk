import { CartItem } from '@models/cart';
import { Product } from '@models/product';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store';

const initialState = {
  cart: [] as CartItem[],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const cartItem = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (cartItem) {
        cartItem.amount++;
      } else {
        state.cart.push({ ...action.payload, amount: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
    increaseItemAmount(state, action: PayloadAction<number>) {
      const cartItem = state.cart.find(
        (cartItem) => cartItem.id === action.payload
      );
      if (cartItem) cartItem.amount++;
    },
    decreaseItemAmount(state, action: PayloadAction<number>) {
      const cartItem = state.cart.find(
        (cartItem) => cartItem.id === action.payload
      );
      if (cartItem && cartItem.amount > 1) cartItem.amount--;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const selectTotalPrice = createSelector(
  (state: RootState) => state.cart,
  (cart) =>
    cart.cart.reduce((acc, item) => (acc += item.amount * item.price), 0)
);
export const selectCartCount = createSelector(
  (state: RootState) => state.cart,
  (cart) => cart.cart.reduce((acc, item) => (acc += item.amount), 0)
);

export const {
  addToCart,
  removeFromCart,
  increaseItemAmount,
  decreaseItemAmount,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
