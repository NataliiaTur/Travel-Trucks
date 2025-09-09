import { createAsyncThunk } from "@reduxjs/toolkit";
import { campersApi } from "../services/campersApi.js";
import { clearCampers, resetPagination } from "./campersSlice.js";
import { buildQueryParams } from "../utils/queryParams.js";

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

export const fetchFilteredCampers = createAsyncThunk(
  "campers/fetchFiltered",
  async (
    { filters, page = 1, isLoadMore = false },
    { dispatch, rejectWithValue }
  ) => {
    try {
      if (!isLoadMore) {
        dispatch(clearCampers());
        dispatch(resetPagination());
      }

      console.log("=== DEBUG INFO ===");
      console.log("Raw filters object:", filters);
      console.log("filters.features:", filters.features);
      console.log("filters.features length:", filters.features?.length);

      const params = buildQueryParams(filters, page);
      console.log("API Request params:", params);

      const response = await campersApi.getCampers(params);

      const data = Array.isArray(response.data)
        ? response.data
        : response.data.items || [];

      return {
        data,
        isLoadMore,
        hasMore: data.length > 0,
        page: isLoadMore ? page : 1,
      };
    } catch (error) {
      console.error("Fetch filtered campers error:", error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
