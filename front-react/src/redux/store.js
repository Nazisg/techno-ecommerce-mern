import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './services/productsApi';
import { categorySlice } from './services/categoryApi';
import authApi from './services/authSlice';
import loginReducer from './services/loginSlice'; 
import cartReducer from './services/cartSlice';

export const store = configureStore({
  reducer: {
    [productSlice.reducerPath]: productSlice.reducer,
    [categorySlice.reducerPath]: categorySlice.reducer,
    [authApi.reducerPath]: authApi.reducer, 
    auth: loginReducer, 
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productSlice.middleware,
      categorySlice.middleware,
      authApi.middleware
    ),
});

export default store;
