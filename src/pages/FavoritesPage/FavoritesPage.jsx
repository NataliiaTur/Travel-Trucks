import css from "./FavoritesPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCampers,
  selectorFavorites,
  selectCampersLoading,
} from "../../redux/selectors.js";
import fetchCampers from "../../redux/operations.js";
import { useEffect } from "react";

function FavoritesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allCampers = useSelector(selectCampers);
  const favoriteIds = useSelector(selectorFavorites);
  const isLoading = useSelector(selectCampersLoading);

  // Отримуємо всі кемпери при завантаженні сторінки
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
    return <div>Loading ...</div>;
  }

  return (
    <section className={css.favoritesPage}>
      <div className="container">
        <div className={css.favoritesContent}>
          <h2 className={css.favoritesTitle}>Your Favorite Campers</h2>

          <div className={css.campersSection}>
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
