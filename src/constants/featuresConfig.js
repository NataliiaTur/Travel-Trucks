export const featuresConfig = [
  {
    key: "transmission",
    getLabel: (camper) =>
      camper.transmission === "automatic" ? "Automatic" : "Manual",
    show: (camper) => !!camper.transmission,
    icon: "icon-van",
  },
  {
    key: "AC",
    getLabel: () => "AC",
    show: (camper) => camper.AC,
    icon: "icon-wind",
  },
  {
    key: "engine",
    getLabel: (camper) => (camper.engine === "petrol" ? "Petrol" : "Diesel"),
    show: (camper) => !!camper.engine,
    icon: "icon-fuel-pump",
  },
  {
    key: "bathroom",
    getLabel: () => "Bathroom",
    show: (camper) => camper.bathroom,
    icon: "icon-shower",
  },
  {
    key: "kitchen",
    getLabel: () => "Kitchen",
    show: (camper) => camper.kitchen,
    icon: "icon-cup-hot",
  },
  {
    key: "TV",
    getLabel: () => "TV",
    show: (camper) => camper.TV,
    icon: "icon-tv",
  },
  {
    key: "radio",
    getLabel: () => "Radio",
    show: (camper) => camper.radio,
    icon: "icon-radios",
  },
  {
    key: "refrigerator",
    getLabel: () => "Refrigerator",
    show: (camper) => camper.refrigerator,
    icon: "icon-fridge",
  },
  {
    key: "microwave",
    getLabel: () => "Microwave",
    show: (camper) => camper.microwave,
    icon: "icon-microwave",
  },
  {
    key: "gas",
    getLabel: () => "Gas",
    show: (camper) => camper.gas,
    icon: "icon-gasStove",
  },
  {
    key: "water",
    getLabel: () => "Water",
    show: (camper) => camper.water,
    icon: "icon-water",
  },
];
