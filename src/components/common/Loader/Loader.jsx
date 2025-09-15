import css from "./Loader.module.css";
import sprite from "../../../../public/icons.svg";

function Loader() {
  return (
    <div className={css.loader}>
      <div className={css.spinnerWrapper}>
        <svg className={css.logoSpinner}>
          <use xlinkHref={`${sprite}#icon-TravelTrucks`} />
        </svg>
      </div>
    </div>
  );
}

export default Loader;
