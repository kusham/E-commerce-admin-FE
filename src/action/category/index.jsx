import { createAsyncThunk } from "@reduxjs/toolkit";
import { createCategory, deleteProductCategory, getProductCategories, updateProductCategory } from "../../api/category";

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

export const createCategory = createAsyncThunk(
    "productCategory/create-category",
    async (categoryData, thunkAPI) => {
      try {
        return await createCategory(categoryData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const updateAProductCategory = createAsyncThunk(
    "productCategory/update-category",
    async (category, thunkAPI) => {
      try {
        return await updateProductCategory(category);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const deleteAProductCategory = createAsyncThunk(
    "productCategory/delete-category",
    async (id, thunkAPI) => {
      try {
        return await deleteProductCategory(id);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );