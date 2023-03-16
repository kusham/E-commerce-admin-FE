import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/authReducers";
export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});