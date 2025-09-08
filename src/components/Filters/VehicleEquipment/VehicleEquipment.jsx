// src/components/Filters/VehicleEquipment/VehicleEquipment.jsx
import { EQUIPMENT_FEATURES } from "../../../utils/queryParams";
import Icon from "../../common/Icon/Icon.jsx";
import css from "./VehicleEquipment.module.css";

const EQUIPMENT_CONFIG = [
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

const VehicleEquipment = ({ selectedFeatures, onFeatureToggle }) => {
  return (
    <div className={css.equipmentBlock}>
      <h3 className={css.equipmentTitle}>Vehicle equipment</h3>
      <hr className={css.separator} />

      <div className={css.equipmentGrid}>
        {EQUIPMENT_CONFIG.map(({ key, label, icon }) => (
          <label
            key={key}
            className={`${css.equipmentItem} ${
              selectedFeatures.includes(key) ? css.selected : ""
            }`}
          >
            <input
              type="checkbox"
              checked={selectedFeatures.includes(key)}
              onChange={() => onFeatureToggle(key)}
              className={css.hiddenCheckbox}
            />
            <div className={css.equipmentContent}>
              <Icon
                className={css.equipmentIcon}
                width="32"
                height="32"
                id={icon}
              />
              <span className={css.equipmentLabel}>{label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default VehicleEquipment;
