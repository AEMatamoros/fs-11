import { createSlice } from "@reduxjs/toolkit";
import { fetchHeroes } from "../operations/heroOperations";

const initialState = {
  heroes: [],
  loading: false,
  error: false,
};

const heroSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHeroes.fulfilled, (state, action) => {
      state.heroes = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchHeroes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHeroes.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const heroReducer = heroSlice.reducer;
