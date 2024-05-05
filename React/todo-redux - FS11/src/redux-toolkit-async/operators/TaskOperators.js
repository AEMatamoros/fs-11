import axios from "axios";
import {
  asyncFetchTaskAction,
  asyncAddTaskAction,
  asyncUpdateTaskAction,
  asyncDeleteTaskAction,
  asyncLoading,
  asyncError,
} from "../slices/TaskSlice";

axios.defaults.baseURL = "http://localhost:3000/tasks";

export const asyncFetchTaskActionOperator = () => async (dispatch) => {
  dispatch(asyncLoading());
  try {
    const response = await axios.get("");
    dispatch(asyncFetchTaskAction(response.data));
  } catch (error) {
    dispatch(asyncError(error.message));
  }
};

export const asyncAddTaskActionOperator = (newTask) => async (dispatch) => {
  dispatch(asyncLoading());
  try {
    const response = await axios.post("", { ...newTask });
    dispatch(asyncAddTaskAction(response.data));
  } catch (error) {
    dispatch(asyncError(error.message));
  }
};

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
