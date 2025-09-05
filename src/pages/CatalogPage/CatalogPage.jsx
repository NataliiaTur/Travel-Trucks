import css from "./CatalogPage.module.css";
import CamperSmallCard from "../../components/CamperSmallCard/CamperSmallCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCampers,
  selectCampersError,
  selectCampersLoading,
} from "../../redux/selectors.js";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/operations.js";

function CatalogPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  console.log("Campers from Redux:", campers);

  const handleShowMore = (camperId) => {
    navigate(`/catalog/${camperId}`);
  };

  if (isLoading) {
    return <div> Loading ...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={css.catalogPage}>
      <div className="container">
        {campers && campers.length > 0 ? (
          campers.map((camper) => (
            <CamperSmallCard
              key={camper.id}
              camper={camper}
              onShowMore={handleShowMore}
            />
          ))
        ) : (
          <div> No campers found </div>
        )}
      </div>
    </section>
  );
}

export default CatalogPage;
