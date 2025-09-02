import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { campersApi } from "../services/campersApi.js";

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

const initialState = {
  items: [],
  currentCamper: null,
  isLoading: false,
  error: null,
};

const camperSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamperById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setLoading } = camperSlice.actions;
export default camperSlice.reducer;
