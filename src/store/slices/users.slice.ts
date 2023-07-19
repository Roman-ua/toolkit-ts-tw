import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import api from "../../http/api";

interface IUser {
  id: number;
  name: string;
  email: string;
}
export interface IUsersState {
  users: IUser[];
  loading: boolean;
}

const initialState: IUsersState = {
  users: [],
  loading: true
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await api.get('users');
    const { data } = response;

    return data;
  }
)

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action) => {
        state.users = action.payload;
        state.loading = false;
      }
    )
  }
})

export default usersSlice.reducer
