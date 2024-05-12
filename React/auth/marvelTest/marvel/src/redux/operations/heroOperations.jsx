import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import md5 from "md5";

axios.defaults.baseURL = "http://localhost:4000/api";

export const fetchHeroes = createAsyncThunk(
  "auth/register",
  async (_, thunkAPI) => {
    try {
      const publicKey = "5c41e1d1fb54c549abcf4119da282ba5";
      const privateKey = "e9f27b7585fa7b5e76a03301106cf213629298e4";
      const ts = Date.now();

      // Create a new URLSearchParams object and set the necessary query parameters
      const params = new URLSearchParams({
        ts: ts,
        apikey: publicKey,
        hash: md5(ts + privateKey + publicKey), // Generate hash for authentication
        limit: 100,
        offset: 0,
        orderBy: "-modified",
      });
      const response = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters?${params}`
      );
      return response.data.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
