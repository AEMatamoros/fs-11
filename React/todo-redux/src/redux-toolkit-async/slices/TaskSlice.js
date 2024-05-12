import { createSlice } from "@reduxjs/toolkit";

const initialState = { tasks: [], loading: false, error: null };

const taskSlice = createSlice({
  initialState,
  name: "tasksStore",
  reducers: {
    asyncLoading(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    asyncError(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    asyncFetchTaskAction(state, action) {
      return {
        ...state,
        tasks: [...state.tasks, ...action.payload],
        loading: false,
        error: null,
      };
    },
    asyncAddTaskAction(state, action) {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false,
        error: null,
      };
    },
    asyncUpdateTaskAction(state, action) {
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        }),
        loading: false,
        error: null,
      };
    },
    asyncDeleteTaskAction(state, action) {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        loading: false,
        error: null,
      };
    },
    // nombreMetodo(state, action){
    //     return cambio de estado
    // }
  },
});

export const {
  asyncFetchTaskAction,
  asyncAddTaskAction,
  asyncUpdateTaskAction,
  asyncDeleteTaskAction,
  asyncLoading,
  asyncError,
} = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
