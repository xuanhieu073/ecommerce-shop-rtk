import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '@services/product';
import productReducer from '@store/slice/product';
import sidebarReducer from '@store/slice/sidebar';
import cartReducer from '@store/slice/cart';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    product: productReducer,
    sidebar: sidebarReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
