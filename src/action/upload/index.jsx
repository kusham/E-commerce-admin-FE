import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteImg, uploadImg } from "../../api/upload";

export const uploadImg = createAsyncThunk(
  "upload/images",
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < data.length; i++) {
        formData.append("images", data[i]);
      }
      return await uploadImg(formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteImg = createAsyncThunk(
    "delete/images",
    async (id, thunkAPI) => {
      try {
        return await deleteImg(id);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );