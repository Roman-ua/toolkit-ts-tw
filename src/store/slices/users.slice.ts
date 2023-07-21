import {createEntityAdapter, createSlice} from '@reduxjs/toolkit'
import {IUser, IUsersSlice} from "../../interfaces/userListInterfaces";
import { createUser, fetchUsers, removeUser } from "../asyncThunks/usersThunks";

const usersAdapter = createEntityAdapter({
  sortComparer: (a: IUser, b: IUser) => a.id - b.id,
});

export const { selectAll } = usersAdapter.getSelectors((state: IUsersSlice) => state.users);

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({
    loading: true,
    removePending: false,
    createPending: false
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action) => {
        usersAdapter.setAll(state, action.payload);
        state.loading = false;
      }
    ).addCase(
      removeUser.fulfilled,
      (state, action) => {
        usersAdapter.removeOne(state, `${action.payload}`);
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
        usersAdapter.addOne(state, action.payload);
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
