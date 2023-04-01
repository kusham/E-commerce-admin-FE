import {  createAsyncThunk } from "@reduxjs/toolkit";
import { getColors } from "../../api/color";

export const getColors = createAsyncThunk(
  "color/get-colors",
  async (thunkAPI) => {
    try {
      return await getColors();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);