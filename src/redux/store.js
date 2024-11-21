import { configureStore } from "@reduxjs/toolkit";
import { ecommerce } from "./apiSlice";

const store = configureStore({
  reducer: {
    [ecommerce.reducerPath]: ecommerce.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecommerce.middleware),
});

export default store;
