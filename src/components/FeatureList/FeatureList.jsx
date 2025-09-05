import css from "./FeatureList.module.css";
import clsx from "clsx";

function FeatureList({ camper, className }) {
  if (!camper) return null;

  const features = [
    {
      key: "transmission",
      label: camper.transmission === "automatic" ? "Automatic" : "Manual",
      show: !!camper.transmission,
    },
    { key: "AC", label: "AC", show: camper.AC },
    {
      key: "engine",
      label: camper.engine === "petrol" ? "Petrol" : "Diesel",
      show: !!camper.engine,
    },
    { key: "bathroom", label: "Bathroom", show: camper.bathroom },
    { key: "kitchen", label: "Kitchen", show: camper.kitchen },
    { key: "TV", label: "TV", show: camper.TV },
    { key: "radio", label: "Radio", show: camper.radio },
    { key: "refrigerator", label: "Refrigerator", show: camper.refrigerator },
    { key: "microwave", label: "Microwave", show: camper.microwave },
    { key: "gas", label: "Gas", show: camper.gas },
    { key: "water", label: "Water", show: camper.water },
  ];

  const availableFeatures = features.filter((feature) => feature.show);

  return (
    <div className={clsx(css.featureList, className)}>
      {availableFeatures.map((feature) => (
        <div key={feature.key} className={css.featureItem}>
          {/* Тут буде іконка */}
          <span>{feature.label}</span>
        </div>
      ))}
    </div>
  );
}

export default FeatureList;
