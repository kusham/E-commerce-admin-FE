import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api/product";

export const getProducts = createAsyncThunk(
  "product/get-products",
  async (thunkAPI) => {
    try {
      return await getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);