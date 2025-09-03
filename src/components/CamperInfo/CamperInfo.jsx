import css from "./CamperInfo.module.css";
import Icon from "../common/Icon/Icon.jsx";

function CamperInfo({ camper, showPrice }) {
  if (!camper) return null;

  const formatPrice = (price) => {
    return `€${price.toFixed(2)}`;
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
              id={"icon-city-map-black"}
              width={20}
              height={20}
              className={css.camperInfoMap}
            />
            <span>{camper.location}</span>
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
