import api from "./api.js";

export const campersApi = {
  getCampers: (params = {}) => {
    console.log("Received params in getCampers:", params);

    const requestParams = {
      limit: 4,
      ...params,
    };

    return api.get("/campers", { params: requestParams });
  },

  getCamperById: (id) => {
    return api.get(`/campers/${id}`);
  },
};
