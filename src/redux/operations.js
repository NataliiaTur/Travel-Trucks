import { createAsyncThunk } from "@reduxjs/toolkit";
import { campersApi } from "../services/campersApi.js";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (params = {}, thunkAPI) => {
    try {
      const response = await campersApi.getCampers(params);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (camperId, thunkAPI) => {
    try {
      const response = await campersApi.getCamperById(camperId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
