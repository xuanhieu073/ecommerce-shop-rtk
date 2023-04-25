import { Product } from '@models/product';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { productApi } from '@services/product';

const initialState = {
  products: [] as Product[],
  status: 'idle' as 'idle' | 'loading' | 'error' | 'success',
  error: '',
};

const productSlide = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProducts(state) {
      state.status = 'loading';
    },
    fetchProductsSuccess(state, action: any) {
      state.status = 'success';
      state.products = action.payload;
    },
    fetchProductsError(state, aciton: PayloadAction<string>) {
      state.status = 'error';
      state.error = aciton.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productApi.endpoints.getProducts.matchFulfilled,
      (state, action) => {
        state.products = action.payload;
      }
    );
  },
});

export const { fetchProducts, fetchProductsSuccess, fetchProductsError } =
  productSlide.actions;
export default productSlide.reducer;
