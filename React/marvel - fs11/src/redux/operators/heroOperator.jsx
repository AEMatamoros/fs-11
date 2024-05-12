import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import md5 from "md5";
const publicKey = "5c41e1d1fb54c549abcf4119da282ba5";
const privateKey = "e9f27b7585fa7b5e76a03301106cf213629298e4";

export const fetchHeroes = createAsyncThunk(
  "heroes/fetch",
  async (_, thunkApi) => {
    try {
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
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchHeroDetail = createAsyncThunk(
  "heroes/detailfetch",
  async (id, thunkApi) => {
    try {
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
        `https://gateway.marvel.com:443/v1/public/characters/${id}?${params}`
      );
      return response.data.data.results[0];
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const createHeroe = createAsyncThunk(
  "heroes/create",
  async (_, thunkApi) => {
    try {
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
      const response = await axios.post(
        `https://gateway.marvel.com:443/v1/public/characters?${params}`,
        { cuerpo: "cuerpo" }
      );
      console.log(response);
      return "Creado";
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
