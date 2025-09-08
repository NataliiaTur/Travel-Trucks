/**
 * Функція для побудови query параметрів для API запиту
 * @param {Object} filters - об'єкт з фільтрами
 * @param {string} filters.location - локація для пошуку
 * @param {string} filters.bodyType - тип кузова (panelTruck, fullyIntegrated, alcove)
 * @param {Array} filters.features - масив обладнання (AC, kitchen, bathroom, etc.)
 * @param {number} page - номер сторінки для пагінації
 * @returns {Object} об'єкт з параметрами для axios
 */

export const buildQueryParams = (filters, page = 1) => {
  const params = { page };

  // Локація - як є в API
  if (filters.location?.trim()) {
    params.location = filters.location.trim();
  }

  // Тип кузова - відповідає полю "form" в API
  if (filters.bodyType) {
    params.form = filters.bodyType; // panelTruck, fullyIntegrated, alcove
  }

  // Обладнання - кожна опція як окремий boolean параметр
  // З вашого прикладу: AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water
  filters.features?.forEach((feature) => {
    params[feature] = true;
  });

  return params;
};

/**
 * Функція для валідації фільтрів
 * @param {Object} filters
 * @returns {boolean}
 */

export const validateFilters = (filters) => {
  // Перевіряємо, чи є хоча б один фільтр
  return (
    filters.location?.trim() ||
    filters.bodyType ||
    (filters.features && filters.features.length > 0)
  );
};

/**
 * Доступні типи кузова (відповідають полю "form" в API)
 */
export const BODY_TYPES = {
  PANEL_TRUCK: "panelTruck",
  FULLY_INTEGRATED: "fullyIntegrated",
  ALCOVE: "alcove",
};

/**
 * Доступні типи обладнання (відповідають boolean полям в API)
 */
export const EQUIPMENT_FEATURES = {
  AC: "AC",
  BATHROOM: "bathroom",
  KITCHEN: "kitchen",
  TV: "TV",
  RADIO: "radio",
  REFRIGERATOR: "refrigerator",
  MICROWAVE: "microwave",
  GAS: "gas",
  WATER: "water",
};
