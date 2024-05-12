import { configureStore } from "@reduxjs/toolkit";
import { heroReducer } from "./slices/heroSlice";

export const store = configureStore({
  reducer: {
    hero: heroReducer,
  },
});
