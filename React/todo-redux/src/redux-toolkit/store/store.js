import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "../../redux-toolkit/reducers/taskReducer";
export const store = configureStore({
  reducer: { tasksStore: taskReducer },
});
