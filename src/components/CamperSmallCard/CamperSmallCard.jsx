import React from "react";
import css from "./CamperSmallCard.module.css";
import Description from "../Description/Description.jsx";
import FeatureList from "../FeatureList/FeatureList.jsx";
import Button from "../common/Button/Button.jsx";
import Icon from "../common/Icon/Icon.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsFavorite } from "../../redux/selectors.js";
import { toggleFavorite } from "../../redux/favoritesSlice.js";

export const CamperSmallCard = ({ camper, onShowMore }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(camper.id));

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

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(camper.id));
  };
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

              <div className={css.priceAndFavorite}>
                <div className={css.camperSmallCardPrice}>
                  €{camper.price.toFixed(2)}
                </div>
                <button
                  onClick={handleFavoriteToggle}
                  className={css.favoriteButton}
                  aria-label={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                >
                  <Icon
                    id="icon-heart"
                    width={24}
                    height={21}
                    className={`${css.heartIcon} ${
                      isFavorite ? css.favoriteActive : ""
                    }`}
                  />
                </button>
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

              <span>
                <Icon
                  id="icon-map"
                  width={12}
                  height={12}
                  className={css.mapIcon}
                />
                {formatLocation(camper.location)}
              </span>
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
