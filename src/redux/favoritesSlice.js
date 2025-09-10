import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const camperId = action.payload;
      if (!state.items.includes(camperId)) {
        state.items.push(camperId);
      }
    },
    removeFromFavorites: (state, action) => {
      const camperId = action.payload;
      state.items = state.items.filter((id) => id !== camperId);
    },
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      const index = state.items.indexOf(camperId);

      if (index === -1) {
        state.items.push(camperId);
      } else {
        state.items.splice(index, 1);
      }
    },
    clearFavorites: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  toggleFavorite,
  clearFavorites,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;
