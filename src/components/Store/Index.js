import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "../Service/Index";
import cartItems from "./slices/cartSlice";
export const Store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    cartItems: cartItems,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});
setupListeners(Store.dispatch);
