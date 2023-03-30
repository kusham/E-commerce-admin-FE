import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBrands } from "../../api/brand";

export const getBrands = createAsyncThunk(
  "brand/get-brands",
  async (thunkAPI) => {
    try {
      return await getBrands();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);