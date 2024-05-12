import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, taskThunk } from "../operations/authOperations";
const initialState = {
  email: "",
  token: null,
  isLogged: false,
  loading: false,
  error: null,
  tasks: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetAuth(state, action) {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogged = action.payload.isLogged;
      state.token = action.payload.token;
      state.email = action.payload.email;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(taskThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(taskThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload.tasks;
    });
    builder.addCase(taskThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { resetAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
