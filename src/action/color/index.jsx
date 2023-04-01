import { createAsyncThunk } from "@reduxjs/toolkit";
import { createColor, getColor, getColors } from "../../api/color";

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
export const createColor = createAsyncThunk(
  "color/create-color",
  async (colorData, thunkAPI) => {
    try {
      return await createColor(colorData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAColor = createAsyncThunk(
    "color/get-color",
    async (id, thunkAPI) => {
      try {
        return await getColor(id);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );