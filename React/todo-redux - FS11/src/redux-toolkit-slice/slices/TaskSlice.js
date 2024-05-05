import { createSlice } from "@reduxjs/toolkit";

const initialState = { tasks: [] };

const taskSlice = createSlice({
  initialState,
  name: "tasksStore",
  reducers: {
    addTaskAction(state, action) {
      return { ...state, tasks: [...state.tasks, action.payload] };
    },
    updateTaskAction(state, action) {
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
    deleteTaskAction(state, action) {
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    },
    // nombreMetodo(state, action){
    //     return cambio de estado
    // }
  },
});

export const {
  addTaskAction,
  updateTaskAction,
  deleteTaskAction,
  filterTaskAction,
} = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
