import { createSlice } from "@reduxjs/toolkit";

export const resetState = createAction("Reset_all");

const initialState = {
  colors: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const colorSlice = createSlice({
    name: "colors",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getColors.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getColors.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.colors = action.payload;
        })
        .addCase(getColors.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
        })
        .addCase(createColor.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(createColor.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.createdColor = action.payload;
        })
        .addCase(createColor.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
        })
        .addCase(updateAColor.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updateAColor.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.updatedColor = action.payload;
        })
        .addCase(updateAColor.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
        })
        .addCase(getAColor.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getAColor.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.colorName = action.payload.title;
        })
        .addCase(getAColor.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
        })
        .addCase(deleteAColor.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(deleteAColor.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.deletedColor = action.payload.title;
        })
        .addCase(deleteAColor.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
        })
        .addCase(resetState, () => initialState);
    },
  });