import {createAsyncThunk } from "@reduxjs/toolkit";
import {login} from '../../api/auth'

export const login = createAsyncThunk(
    "auth/login",
    async (userData, thunkAPI) => {
      try {
        return await login(userData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );