import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCamperById,
  fetchCampers,
  fetchFilteredCampers,
} from "../redux/operations.js";

const initialState = {
  items: [],
  currentCamper: null,
  isLoading: false,
  error: null,

  filters: {
    location: "",
    bodyType: "",
    features: [],
  },

  page: 1,
  hasMore: true,
};

const camperSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setLocationFilter: (state, action) => {
      state.filters.location = action.payload;
    },
    setBodyTypeFilter: (state, action) => {
      state.filters.bodyType = action.payload;
    },
    toggleFeatureFilter: (state, action) => {
      const feature = action.payload;
      const index = state.filters.features.indexOf(feature);

      if (index === -1) {
        state.filters.features.push(feature);
      } else {
        state.filters.features.splice(index, 1);
      }
    },
    clearFilters: (state) => {
      state.filters = {
        location: "",
        bodyType: "",
        features: [],
      };
    },
    resetPagination: (state) => {
      state.page = 1;
      state.hasMore = true;
    },
    clearCampers: (state) => {
      state.items = [];
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items || action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

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
      })

      .addCase(fetchFilteredCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        const { data, isLoadMore, page } = action.payload;

        if (isLoadMore) {
          state.items = [...state.items, ...data];
          state.page = page;
        } else {
          state.items = data;
          state.page = 1;
        }

        state.hasMore = data.length === 4;
      })
      .addCase(fetchFilteredCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setLoading,
  setLocationFilter,
  setBodyTypeFilter,
  toggleFeatureFilter,
  clearFilters,
  resetPagination,
  clearCampers,
  incrementPage,
  setHasMore,
} = camperSlice.actions;

export default camperSlice.reducer;
