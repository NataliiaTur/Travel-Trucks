import { EQUIPMENT_CONFIG } from "../../../utils/queryParams.js";
import Icon from "../../common/Icon/Icon.jsx";
import css from "./VehicleEquipment.module.css";

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
