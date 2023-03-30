import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBrand, getBrands } from "../../api/brand";

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

export const getABrand= createAsyncThunk(
    "brand/get-brand",
    async (id, thunkAPI) => {
      try {
        return await getBrand(id);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );