export const selectCurrentCamper = (state) => state.campers.currentCamper;
export const selectCampersLoading = (state) => state.campers.isLoading;
export const selectCampersError = (state) => state.campers.error;
export const selectCampers = (state) => state.campers.items;

export const selectFilters = (state) => state.campers.filters;

export const selectCurrentPage = (state) => state.campers.page;
export const selectHasMore = (state) => state.campers.hasMore;

export const selectFavorites = (state) => state.favorites.items;
export const selectIsFavorite = (camperId) => (state) =>
  state.favorites.items.includes(camperId);
