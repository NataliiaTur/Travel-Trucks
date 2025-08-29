import api from "./api.js";

export const campersApi = {
  getCampers: (filters = {}, page = 1) => {
    const params = {
      page,
      limit: 4,
      ...filters,
    };
    return api.get("/campers", { params });
  },

  getCamperById: (id) => {
    return api.get(`/campers/${id}`);
  },
};
