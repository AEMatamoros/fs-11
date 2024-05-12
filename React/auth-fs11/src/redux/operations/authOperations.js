import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:4000/api/";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (obj, thunkApi) => {
    try {
      const response = await axios.post("auth/login", {
        email: obj.email,
        password: obj.password,
      });
      if (response.status === 201) {
        obj.navigate("/home");
        return {
          isLogged: true,
          token: response.data.token,
          email: obj.email,
        };
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const taskThunk = createAsyncThunk(
  "auth/tasks",
  async (obj, thunkApi) => {
    try {
      axios.defaults.headers["x-token"] = thunkApi.getState().auth.token;
      const response = await axios.post("auth/tasks");
      console.log(response);
      return {
        tasks: [1, 2, 3, 4],
      };
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
