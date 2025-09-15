import css from "./FavoritesPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCampers,
  selectFavorites,
  selectCampersLoading,
} from "../../redux/selectors.js";
import { fetchCampers } from "../../redux/operations.js";
import { useEffect } from "react";
import CamperSmallCard from "../../components/CamperSmallCard/CamperSmallCard.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import Loader from "../../components/common/Loader/Loader.jsx";

function FavoritesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allCampers = useSelector(selectCampers);
  const favoriteIds = useSelector(selectFavorites);
  const isLoading = useSelector(selectCampersLoading);

  useEffect(() => {
    if (allCampers.length === 0) {
      dispatch(fetchCampers());
    }
  }, [dispatch, allCampers.length]);

  const favoriteCampers = allCampers.filter((camper) =>
    favoriteIds.includes(camper.id)
  );

  const handleShowMore = (camperId) => {
    navigate(`/catalog/${camperId}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={css.favoritesPage}>
      <div className="container">
        <div className={css.favoritesContent}>
          <Filters />

          <div className={css.campersSection}>
            <h2 className={css.favoritesTitle}>Your Favorite Campers</h2>
            {favoriteCampers.length > 0 ? (
              favoriteCampers.map((camper) => (
                <CamperSmallCard
                  key={camper.id}
                  camper={camper}
                  onShowMore={handleShowMore}
                />
              ))
            ) : (
              <div className={css.emptyFavorites}>
                <p>You haven't added any campers to favorites yet.</p>
                <p>
                  Browse our catalog and click the heart icon to save your
                  favorites!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FavoritesPage;
