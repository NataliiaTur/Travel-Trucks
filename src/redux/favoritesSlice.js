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
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
