import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice.js";
import favoritesReducer from "./favoritesSlice.js";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
  },
});
