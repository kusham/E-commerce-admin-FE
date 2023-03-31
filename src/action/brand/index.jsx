import { createAsyncThunk } from "@reduxjs/toolkit";
import { createBrand, deleteBrand, getBrand, getBrands, updateBrand } from "../../api/brand";

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

  export const createBrand = createAsyncThunk(
    "brand/create-brand",
    async (brandData, thunkAPI) => {
      try {
        return await createBrand(brandData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const updateABrand = createAsyncThunk(
    "brand/update-brand",
    async (brand, thunkAPI) => {
      try {
        return await updateBrand(brand);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const deleteABrand = createAsyncThunk(
    "brand/delete-brand",
    async (id, thunkAPI) => {
      try {
        return await deleteBrand(id);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );