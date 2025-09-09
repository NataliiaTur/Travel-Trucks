import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice.js";
import favoritesReducer from "./favoritesSlice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const campersPersistConfig = {
  key: "campers",
  version: 1,
  storage,
  whitelist: ["filters"],
};

const favoritesPersistConfig = {
  key: "favorites",
  version: 1,
  storage,
};

const persistedCamperReducer = persistReducer(
  campersPersistConfig,
  campersReducer
);
const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    campers: persistedCamperReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
