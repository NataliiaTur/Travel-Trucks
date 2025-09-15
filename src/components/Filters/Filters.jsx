import { useDispatch, useSelector } from "react-redux";
import css from "./Filters.module.css";
import { selectFilters } from "../../redux/selectors.js";
import {
  setBodyTypeFilter,
  setLocationFilter,
  toggleFeatureFilter,
} from "../../redux/campersSlice.js";
import { fetchFilteredCampers } from "../../redux/operations.js";
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

        <h4 className={css.filtersTitle}>Filters</h4>

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
