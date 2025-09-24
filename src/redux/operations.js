import { createAsyncThunk } from "@reduxjs/toolkit";
import { campersApi } from "../services/campersApi.js";
import { clearCampers, resetPagination } from "./campersSlice.js";
import { buildQueryParams } from "../utils/queryParams.js";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (
    {
      filters = { location: "", bodyType: "", features: [] },
      page = 1,
      isLoadMore = false,
    } = {},
    { dispatch, rejectWithValue }
  ) => {
    try {
      if (!isLoadMore) {
        dispatch(clearCampers());
        dispatch(resetPagination());
      }

      const params = buildQueryParams(filters, page);
      const response = await campersApi.getCampers(params);

      return {
        data: response.data.data,
        isLoadMore,
        hasMore: response.data.hasMore,
        page: response.data.page,
      };
    } catch (error) {
      console.error("Fetch campers error:", error);
      return rejectWithValue(error.response?.data?.message || error.message);
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

// export const fetchFilteredCampers = createAsyncThunk(
//   "campers/fetchFiltered",
//   async (
//     { filters, page = 1, isLoadMore = false },
//     { dispatch, rejectWithValue }
//   ) => {
//     try {
//       if (!isLoadMore) {
//         dispatch(clearCampers());
//         dispatch(resetPagination());
//       }

//       const params = buildQueryParams(filters, page);

//       const response = await campersApi.getCampers(params);

//       const data = Array.isArray(response.data)
//         ? response.data
//         : response.data.items || [];

//       return {
//         data,
//         isLoadMore,
//         hasMore: data.length > 0,
//         page: isLoadMore ? page : 1,
//       };
//     } catch (error) {
//       console.error("Fetch filtered campers error:", error);
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );
