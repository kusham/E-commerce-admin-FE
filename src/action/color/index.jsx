import { createAsyncThunk } from "@reduxjs/toolkit";
import { createColor, getColors } from "../../api/color";

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
