import { createSlice } from '@reduxjs/toolkit'
import { IUsersSlice } from "../../interfaces/userListInterfaces";
import { createUser, fetchUsers, removeUser } from "../asyncThunks/usersThunks";

const initialState: IUsersSlice = {
  users: [],
  loading: true,
  removePending: false,
  createPending: false
}

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
    ).addCase(
      removeUser.fulfilled,
      (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
        state.removePending = false;
      },
    ).addCase(
      removeUser.pending,
      (state) => {
        state.removePending = true;
      }
    ).addCase(
      createUser.fulfilled,
      (state, action) => {
        state.users.push(action.payload);
        state.createPending = false;
      }
    ).addCase(
      createUser.pending,
      (state) => {
        state.createPending = true;
      }
    )
  }
})

export default usersSlice.reducer
