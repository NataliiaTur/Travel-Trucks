// src/components/Features/Features.jsx
import FeatureList from "../FeatureList/FeatureList";
import BookingForm from "../BookingForm/BookingForm";
import css from "./Features.module.css";

function Features({ camper, onBookingSubmit }) {
  if (!camper) return null;

  return (
    <div className={css.feature}>
      {/* Лівий блок з зручностями та деталями */}
      <div className={css.featureDetails}>
        {/* Список зручностей */}
        <FeatureList camper={camper} />

        {/* Vehicle details */}
        <h4 className={css.featuresTitle}>Vehicle details</h4>
        <div className={css.featureVehicleDetails}>
          <div>
            <span>Form: </span>
            <span>{camper.form}</span>
          </div>
          <div>
            <span>Length: </span>
            <span>{camper.length}</span>
          </div>
          <div>
            <span>Width: </span>
            <span>{camper.width}</span>
          </div>
          <div>
            <span>Height: </span>
            <span>{camper.height}</span>
          </div>
          <div>
            <span>Tank: </span>
            <span>{camper.tank}</span>
          </div>
          <div>
            <span>Consumption: </span>
            <span>{camper.consumption}</span>
          </div>
        </div>
      </div>
      {/* Правий блок з формою */}
      <BookingForm camperId={camper.id} onSubmit={onBookingSubmit} />
    </div>
  );
}

export default Features;
