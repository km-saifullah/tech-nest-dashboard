import { configureStore } from "@reduxjs/toolkit";
import { ecommerce } from "./apiSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    [ecommerce.reducerPath]: ecommerce.reducer,
    authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecommerce.middleware),
});

export default store;
