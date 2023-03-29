import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/authReducers";
import { customerSlice } from "./reducers/customerReducers";
import { productSlice } from "./reducers/productReducers";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    customer: customerSlice,
    product: productSlice,
  },
});