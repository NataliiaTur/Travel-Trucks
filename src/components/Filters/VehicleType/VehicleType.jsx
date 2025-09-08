// src/components/Filters/VehicleType/VehicleType.jsx
import { BODY_TYPES } from "../../../utils/queryParams";
import Icon from "../../common/Icon/Icon.jsx";
import css from "./VehicleType.module.css";

const VEHICLE_TYPES = [
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

const VehicleType = ({ selectedType, onTypeChange }) => {
  return (
    <div className={css.typeBlock}>
      <h2 className={css.typeTitle}>Vehicle type</h2>
      <hr className={css.separator} />

      <div className={css.typeGrid}>
        {VEHICLE_TYPES.map(({ key, label, icon }) => (
          <label
            key={key}
            className={`${css.typeItem} ${
              selectedType === key ? css.selected : ""
            }`}
          >
            <input
              type="radio"
              name="vehicleType"
              checked={selectedType === key}
              onChange={() => onTypeChange(key)}
              className={css.hiddenRadio}
            />
            <div className={css.typeContent}>
              <Icon className={css.typeIcon} width="32" height="32" id={icon} />
              <span className={css.typeLabel}>{label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default VehicleType;
