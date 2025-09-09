export const buildQueryParams = (filters, page = 1) => {
  const params = { page };

  if (filters.location?.trim()) {
    const locationParts = filters.location.trim().split(",");
    const city = locationParts[0].trim();
    params.location = city;
  }

  if (filters.bodyType) {
    params.form = filters.bodyType;
  }

  filters.features?.forEach((feature) => {
    params[feature] = true;
  });

  return params;
};

export const validateFilters = (filters) => {
  return (
    filters.location?.trim() ||
    filters.bodyType ||
    (filters.features && filters.features.length > 0)
  );
};

export const BODY_TYPES = {
  PANEL_TRUCK: "panelTruck",
  FULLY_INTEGRATED: "fullyIntegrated",
  ALCOVE: "alcove",
};

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

export const EQUIPMENT_CONFIG = [
  { key: EQUIPMENT_FEATURES.AC, label: "AC", icon: "icon-wind" },
  { key: EQUIPMENT_FEATURES.BATHROOM, label: "Bathroom", icon: "icon-shower" },
  { key: EQUIPMENT_FEATURES.KITCHEN, label: "Kitchen", icon: "icon-cup-hot" },
  { key: EQUIPMENT_FEATURES.TV, label: "TV", icon: "icon-tv" },
  { key: EQUIPMENT_FEATURES.RADIO, label: "Radio", icon: "icon-radios" },
  {
    key: EQUIPMENT_FEATURES.REFRIGERATOR,
    label: "Refrigerator",
    icon: "icon-fridge",
  },
  {
    key: EQUIPMENT_FEATURES.MICROWAVE,
    label: "Microwave",
    icon: "icon-microwave",
  },
  { key: EQUIPMENT_FEATURES.GAS, label: "Gas", icon: "icon-gasStove" },
  { key: EQUIPMENT_FEATURES.WATER, label: "Water", icon: "icon-water" },
];

export const VEHICLE_TYPES = [
  {
    key: BODY_TYPES.PANEL_TRUCK,
    label: "Van",
    icon: "icon-van",
  },
  {
    key: BODY_TYPES.FULLY_INTEGRATED,
    label: "Fully Integrated",
    icon: "icon-fullyIntegrated",
  },
  {
    key: BODY_TYPES.ALCOVE,
    label: "Alcove",
    icon: "icon-alcove",
  },
];
