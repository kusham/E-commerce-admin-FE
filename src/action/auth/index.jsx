import {createAsyncThunk } from "@reduxjs/toolkit";
import {getOrder, login} from '../../api/auth'

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

  export const getOrderByUser = createAsyncThunk(
    "order/get-order",
    async (id, thunkAPI) => {
      try {
        return await getOrder(id);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );