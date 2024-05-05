import { createSlice } from "@reduxjs/toolkit";
import {
  thunkFetchTaskActionOperator,
  thunkAddTaskActionOperator,
} from "../operators/TaskOperators";

const initialState = { tasks: [], loading: false, error: null };

const taskSlice = createSlice({
  initialState,
  name: "tasksStore",
  reducers: {
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
  extraReducers: (builder) => {
    builder.addCase(thunkFetchTaskActionOperator.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(thunkFetchTaskActionOperator.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    });
    builder.addCase(thunkFetchTaskActionOperator.fulfilled, (state, action) => {
      return {
        ...state,
        tasks: [...state.tasks, ...action.payload],
        loading: false,
        error: null,
      };
    });
    builder.addCase(thunkAddTaskActionOperator.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(thunkAddTaskActionOperator.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    });
    builder.addCase(thunkAddTaskActionOperator.fulfilled, (state, action) => {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false,
        error: null,
      };
    });
  },
});

export const {
  asyncUpdateTaskAction,
  asyncDeleteTaskAction,
  asyncLoading,
  asyncError,
} = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
