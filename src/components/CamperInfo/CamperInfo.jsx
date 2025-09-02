import css from "./CamperInfo.module.css";

function CamperInfo({ camper, showPrice }) {
  if (!camper) return null;

  const formatPrice = (price) => {
    return `€${price.toFixed(2)}`;
  };

  const reviewsCount = camper.reviews ? camper.reviews.length : 0;

  return (
    <div className={css.camperInfo}>
      <div className="container">
        <h2 className={css.camperInfoTitle}>{camper.name}</h2>

        <div className={css.camperInfoDetails}>
          <div className={css.camperInfoRating}>
            {/* Тут буде іконка зірки */}
            <span>⭐</span>
            <span>{camper.rating}</span>
            <span>({reviewsCount} Reviews)</span>
          </div>

          <div className={css.camperInfoLocation}>
            {/* Тут буде іконка мапи */}
            <span>📍</span>
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
