import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "../slices/TaskSlice";
import { filterReducer } from "../slices/FilterSlice";
export const store = configureStore({
  reducer: { tasksStore: taskReducer, filterStore: filterReducer },
});
