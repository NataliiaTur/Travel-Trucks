import React from "react";
import css from "./CamperSmallCard.module.css";
import Description from "../Description/Description.jsx";
import FeatureList from "../FeatureList/FeatureList.jsx";
import Button from "../common/Button/Button.jsx";
import Icon from "../common/Icon/Icon.jsx";

export const CamperSmallCard = ({ camper, onShowMore }) => {
  const reviewsCount = camper.reviews ? camper.reviews.length : 0;
  return (
    <div className={css.camperSmallCard}>
      <div className={css.camperSmallCardWrapper}>
        <img
          src={camper.gallery[0].thumb}
          alt={camper.name}
          className={css.smallCardImage}
        />

        <div className={css.smallCardInfoContainer}>
          <div className={css.camperSmallCardCamperInfo}>
            <div className={css.camperSmallCardWrapperTitlePrice}>
              <h2 className={css.camperSmallCardName}>{camper.name}</h2>
              <div className={css.camperSmallCardPrice}>
                €{camper.price.toFixed(2)}
              </div>
            </div>

            <div className={css.camperSmallCardMeta}>
              <div className={css.camperSmallCardInfoRating}>
                <Icon
                  id={"icon-star"}
                  width={16}
                  height={16}
                  className={css.camperSmallCardStar}
                />
                <span>{camper.rating}</span>
                <span className={css.smallCardReviews}>
                  ({reviewsCount} Reviews)
                </span>
              </div>
              <span>📍 {camper.location}</span>
            </div>
            <Description
              text={camper.description}
              className={css.smallCardDescription}
            />
            <FeatureList camper={camper} className={css.smallCardFeatureList} />
          </div>
          <Button
            onClick={() => onShowMore(camper.id)}
            className={css.smallCardButton}
          >
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CamperSmallCard;
