import { configureStore } from "@reduxjs/toolkit";
import { ecommerce } from "./apiSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    [ecommerce.reducerPath]: ecommerce.reducer,
    authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecommerce.middleware),
});
