import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createProduct, getProducts } from "../../api/product";

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

export const createProducts = createAsyncThunk(
    "product/create-products",
    async (productData, thunkAPI) => {
      try {
        return await createProduct(productData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );