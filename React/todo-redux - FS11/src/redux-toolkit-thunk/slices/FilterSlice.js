import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: "all" };

const filterSlice = createSlice({
  initialState,
  name: "filterStore",
  reducers: {
    filterTaskAction(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

export const { filterTaskAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
