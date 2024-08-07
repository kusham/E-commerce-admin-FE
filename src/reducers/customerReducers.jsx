import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customers: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };
  export const customerSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getUsers.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getUsers.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.customers = action.payload;
        })
        .addCase(getUsers.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
        });
    },
  });