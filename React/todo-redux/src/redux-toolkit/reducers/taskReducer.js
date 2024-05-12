import { createReducer } from "@reduxjs/toolkit";
import {
  addTaskAction,
  updateTaskAction,
  deleteTaskAction,
  filterTaskAction,
} from "../actions/taskActions";
const initialState = { tasks: [], filter: "all" };

export const taskReducer = createReducer(initialState, {
  [addTaskAction]: (state, action) => {
    return { ...state, tasks: [...state.tasks, action.payload] };
  },
  [updateTaskAction]: (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map((task, index) => {
        if (index === action.payload) {
          let newTask = { ...task, completed: !task.completed };
          return newTask;
        } else {
          return task;
        }
      }),
    };
  },
  [deleteTaskAction]: (state, action) => {
    return {
      ...state,
      tasks: state.tasks.filter((_, index) => index !== action.payload),
    };
  },
  [filterTaskAction]: (state, action) => {
    return { ...state, filter: action.payload };
  },
});
