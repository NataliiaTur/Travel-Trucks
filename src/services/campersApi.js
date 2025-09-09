import api from "./api.js";

export const campersApi = {
  getCampers: (params = {}) => {
    console.log("Received params in getCampers:", params); // Додайте цей лог

    const requestParams = {
      limit: 4,
      ...params,
    };

    console.log("Final request params:", requestParams);
    console.log("Full URL will be:", `${api.defaults.baseURL}/campers`);
    console.log(
      "With query params:",
      new URLSearchParams(requestParams).toString()
    );

    return api.get("/campers", { params: requestParams });
  },

  getCamperById: (id) => {
    return api.get(`/campers/${id}`);
  },
};
