import css from "./CatalogPage.module.css";
import CamperSmallCard from "../../components/CamperSmallCard/CamperSmallCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCampers,
  selectCampersError,
  selectCampersLoading,
  selectCurrentPage,
  selectFilters,
  selectHasMore,
} from "../../redux/selectors.js";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/operations.js";
import Filters from "../../components/Filters/Filters.jsx";
import Button from "../../components/common/Button/Button.jsx";
import Loader from "../../components/common/Loader/Loader.jsx";

function CatalogPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);
  const hasMore = useSelector(selectHasMore);
  const currentPage = useSelector(selectCurrentPage);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleShowMore = (camperId) => {
    navigate(`/catalog/${camperId}`);
  };

  const handleLoadMore = () => {
    dispatch(
      fetchCampers({
        filters,
        page: currentPage + 1,
        isLoadMore: true,
      })
    );
  };

  return (
    <section className={css.catalogPage}>
      <div className="container">
        <div className={css.catalogContent}>
          <Filters />

          <div className={css.campersSection}>
            {error ? (
              <div className={css.noResults}>
                <h3>No campers found</h3>
                <p>Try adjusting your search filters to find more options.</p>
              </div>
            ) : isLoading && campers.length === 0 ? (
              <Loader />
            ) : (
              <>
                {campers && campers.length > 0 ? (
                  campers.map((camper) => (
                    <CamperSmallCard
                      key={camper.id}
                      camper={camper}
                      onShowMore={handleShowMore}
                    />
                  ))
                ) : (
                  <div className={css.noResults}>
                    <h3>No campers found</h3>
                    <p>Try adjusting your search filters.</p>
                  </div>
                )}

                {hasMore && (
                  <div className={css.loadMoreContainer}>
                    <Button
                      onClick={handleLoadMore}
                      disabled={isLoading}
                      className={css.loadMoreButton}
                    >
                      {isLoading ? <Loader /> : "Load More"}
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatalogPage;
