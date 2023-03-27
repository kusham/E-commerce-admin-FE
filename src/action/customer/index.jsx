import { getUsers } from "../../api/customer";


export const getUsers = createAsyncThunk(
    "customer/get-customers",
    async (thunkAPI) => {
      try {
        return await getUsers();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );