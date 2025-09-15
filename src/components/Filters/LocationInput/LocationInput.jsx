import { useState } from "react";
import { filterCities } from "../../../utils/cities.js";
import Icon from "../../common/Icon/Icon.jsx";
import css from "./LocationInput.module.css";

const LocationInput = ({ value, onChange }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);

    const filteredCities = filterCities(newValue);
    setSuggestions(filteredCities);
    setIsOpen(filteredCities.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    onChange(suggestion);
    setSuggestions([]);
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    if (value.length >= 2) {
      const filteredCities = filterCities(value);
      setSuggestions(filteredCities);
      setIsOpen(filteredCities.length > 0);
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div className={css.locationBlock}>
      <label className={css.locationLabel}>Location</label>
      <div className={css.inputWrapper}>
        <Icon id="icon-map" width={16} height={16} className={css.mapIcon} />
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder="City, Country"
          className={css.locationInput}
          autoComplete="off"
        />

        {isOpen && suggestions.length > 0 && (
          <div className={css.suggestionsDropdown}>
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={css.suggestionItem}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <Icon
                  id="icon-map"
                  width={12}
                  height={12}
                  className={css.suggestionIcon}
                />
                <span>{suggestion}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationInput;
