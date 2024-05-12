import { createSlice } from "@reduxjs/toolkit";
import {
  fetchHeroes,
  createHeroe,
  fetchHeroDetail,
} from "../operators/heroOperator";

const initialValue = {
  loading: false,
  heroes: [],
  error: null,
  created: null,
  heroDetailData: {},
};

const heroSlice = createSlice({
  name: "heroes",
  initialState: initialValue,
  extraReducers: (builder) => {
    builder.addCase(fetchHeroes.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchHeroes.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });
    builder.addCase(fetchHeroes.fulfilled, (state, action) => {
      return { ...state, loading: false, heroes: action.payload };
    });
    builder.addCase(createHeroe.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(createHeroe.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
        created: false,
      };
    });
    builder.addCase(createHeroe.fulfilled, (state) => {
      return { ...state, loading: false, created: true };
    });
    builder.addCase(fetchHeroDetail.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchHeroDetail.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });
    builder.addCase(fetchHeroDetail.fulfilled, (state, action) => {
      return { ...state, loading: false, heroDetailData: action.payload };
    });
  },
});

export const heroReducer = heroSlice.reducer;
