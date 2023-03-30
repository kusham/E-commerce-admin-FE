import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/authReducers";
import { customerSlice } from "./reducers/customerReducers";
import { productSlice } from "./reducers/productReducers";
import { categorySlice } from "./reducers/categoryReducers";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    customer: customerSlice,
    product: productSlice,
    pCategory: categorySlice,

  },
});