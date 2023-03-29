import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/authReducers";
import { customerSlice } from "./reducers/customerReducers";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    customer: customerSlice,
  },
});