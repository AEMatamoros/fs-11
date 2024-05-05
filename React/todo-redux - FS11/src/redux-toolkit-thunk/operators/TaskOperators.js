import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  asyncUpdateTaskAction,
  asyncDeleteTaskAction,
  asyncLoading,
  asyncError,
} from "../slices/TaskSlice";

axios.defaults.baseURL = "http://localhost:3000/tasks";

export const thunkFetchTaskActionOperator = createAsyncThunk(
  "task/fetch",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const thunkAddTaskActionOperator = createAsyncThunk(
  "task/add",
  async (newTask, thunkApi) => {
    try {
      const response = await axios.post("", { ...newTask });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const asyncUpdateTaskActionOperator = (newTask) => async (dispatch) => {
  dispatch(asyncLoading());
  try {
    const response = await axios.put(`/${newTask.id}`, {
      ...newTask,
      completed: !newTask.completed,
    });
    dispatch(asyncUpdateTaskAction(response.data));
  } catch (error) {
    dispatch(asyncError(error.message));
  }
};

export const asyncDeleteTaskActionOperator = (id) => async (dispatch) => {
  dispatch(asyncLoading());
  try {
    const response = await axios.delete(`/${id}`);
    console.log(response);
    dispatch(asyncDeleteTaskAction(id));
  } catch (error) {
    dispatch(asyncError(error.message));
  }
};
