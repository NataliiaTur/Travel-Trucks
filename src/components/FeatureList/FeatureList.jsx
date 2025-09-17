import css from "./FeatureList.module.css";
import clsx from "clsx";
import Icon from "../../components/common/Icon/Icon.jsx";
import { featuresConfig } from "../../constants/featuresConfig.js";

function FeatureList({ camper, className }) {
  if (!camper) return null;

  const availableFeatures = featuresConfig
    .filter((feature) => feature.show(camper))
    .map((feature) => ({
      ...feature,
      label: feature.getLabel(camper),
    }));

  return (
    <ul className={clsx(css.featureList, className)}>
      {availableFeatures.map((feature) => (
        <li key={feature.key} className={css.featureItem}>
          <Icon
            id={feature.icon}
            width={20}
            height={20}
            className={css.featureIcon}
          />
          <span>{feature.label}</span>
        </li>
      ))}
    </ul>
  );
}

export default FeatureList;
