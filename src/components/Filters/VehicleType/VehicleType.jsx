import { VEHICLE_TYPES } from "../../../utils/queryParams.js";
import Icon from "../../common/Icon/Icon.jsx";
import css from "./VehicleType.module.css";

const VehicleType = ({ selectedType, onTypeChange }) => {
  const handleTypeChange = (newType) => {
    if (selectedType === newType) {
      onTypeChange("");
    } else {
      onTypeChange(newType);
    }
  };

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
              type="checkbox"
              name="vehicleType"
              checked={selectedType === key}
              onChange={() => handleTypeChange(key)}
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
