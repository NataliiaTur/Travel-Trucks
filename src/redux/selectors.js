export const selectCurrentCamper = (state) => state.campers.currentCamper;
export const selectCampersLoading = (state) => state.campers.isLoading;
export const selectCampersError = (state) => state.campers.error;
export const selectCampers = (state) => state.campers.items;

export const selectFavorites = (state) => state.favorites.items;
export const selectIsFavorite = (camperId) => (state) =>
  state.favorites.items.includes(camperId);
