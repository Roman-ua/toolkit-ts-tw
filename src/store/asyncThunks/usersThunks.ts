import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../http/api";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    try {
      const response = await api.get('users');
      const { data } = response;

      return data;
    } catch (err) {
      return err
    }
  }
)

export const removeUser = createAsyncThunk(
  'users/removeUser',
  async (id: number) => {
    try {
      const response = await api.delete(`users/${id}`);

      if (response.status === 200) {
        return id;
      } else {
        return -1;
      }
    } catch (err) {
      return err;
    }
  }
)

export const createUser = createAsyncThunk(
  'users/createUser',
  async (uniqTag: number) => {
    try {
      const response = await api.post('users', {
        name: `user${uniqTag}`,
        email: `user${uniqTag}@testmail.com`
      });

      if (response.status === 201) {
        return response.data;
      }
    } catch (err) {
      return err;
    }
  }
)
