import { useDispatch, useSelector } from "react-redux";
import css from "./Filters.module.css";
import { selectFilters } from "../../redux/selectors.js";
import {
  clearFilters,
  setBodyTypeFilter,
  setLocationFilter,
  toggleFeatureFilter,
} from "../../redux/campersSlice.js";
import { fetchCampers, fetchFilteredCampers } from "../../redux/operations.js";
import { Button } from "../common/Button/Button.jsx";
import LocationInput from "./LocationInput/LocationInput.jsx";
import VehicleEquipment from "./VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "./VehicleType/VehicleType.jsx";

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleLocationChange = (location) => {
    dispatch(setLocationFilter(location));
  };

  const handleBodyTypeChange = (bodyType) => {
    dispatch(setBodyTypeFilter(bodyType));
  };

  const handleFeatureToggle = (feature) => {
    dispatch(toggleFeatureFilter(feature));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("=== SUBMITTING FILTERS ===");
    console.log("Current filters:", filters);
    console.log("Location:", filters.location);
    console.log("Features:", filters.features);
    console.log("Body type:", filters.bodyType);
    dispatch(
      fetchFilteredCampers({
        filters,
        page: 1,
        isLoadMore: false,
      })
    );
  };

  return (
    <div className={css.filtersContainer}>
      <form onSubmit={handleSubmit} className={css.filtersForm}>
        <LocationInput
          value={filters.location}
          onChange={handleLocationChange}
        />

        <h3 className={css.filtersTitle}>Filters</h3>

        <VehicleEquipment
          selectedFeatures={filters.features}
          onFeatureToggle={handleFeatureToggle}
        />

        <VehicleType
          selectedType={filters.bodyType}
          onTypeChange={handleBodyTypeChange}
        />

        <Button type="submit" className={css.searchButton}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default Filters;
