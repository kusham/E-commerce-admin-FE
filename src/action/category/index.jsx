import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductCategories } from "../../api/category";

export const getCategories = createAsyncThunk(
  "productCategory/get-categories",
  async (thunkAPI) => {
    try {
      return await getProductCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
