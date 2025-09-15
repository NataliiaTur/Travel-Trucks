import css from "./CamperInfo.module.css";
import Icon from "../common/Icon/Icon.jsx";

function CamperInfo({ camper, showPrice }) {
  if (!camper) return null;

  const formatPrice = (price) => {
    return `€${price.toFixed(2)}`;
  };

  const formatLocation = (location) => {
    if (!location) return "";

    // Розділяємо по комі та переставляємо місцями
    const parts = location.split(", ");
    if (parts.length === 2) {
      return `${parts[1]}, ${parts[0]}`; // з "Ukraine, Kyiv" робимо "Kyiv, Ukraine"
    }
    return location; // якщо формат інший, повертаємо як є
  };

  const reviewsCount = camper.reviews ? camper.reviews.length : 0;

  return (
    <div className={css.camperInfo}>
      <div>
        <h2 className={css.camperInfoTitle}>{camper.name}</h2>

        <div className={css.camperInfoDetails}>
          <div className={css.camperInfoRating}>
            <Icon
              id={"icon-star"}
              width={16}
              height={16}
              className={css.camperInfoStar}
            />
            <span>{camper.rating}</span>
            <span>({reviewsCount} Reviews)</span>
          </div>

          <div className={css.camperInfoLocation}>
            <Icon
              id={"icon-map"}
              width={16}
              height={16}
              className={css.camperInfoMap}
            />
            <span>{formatLocation(camper.location)}</span>
          </div>
        </div>

        {showPrice && (
          <div className={css.camperInfoPrice}>{formatPrice(camper.price)}</div>
        )}
      </div>
    </div>
  );
}

export default CamperInfo;
