import Icon from "../../common/Icon/Icon.jsx";
import css from "./LocationInput.module.css";

const LocationInput = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={css.locationBlock}>
      <label classname={css.locationLabel}>Location</label>
      <div className={css.inputWrapper}>
        <Icon id={"icon-map"} width={16} height={16} className={css.mapIcon} />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="City, Country"
        />
      </div>
    </div>
  );
};

export default LocationInput;
