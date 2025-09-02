import css from "./CamperDetailsPage.module.css";
import { useParams } from "react-router-dom";
import Features from "../../components/Features/Features.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampersError,
  selectCampersLoading,
  selectCurrentCamper,
} from "../../redux/selectors.js";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campersSlice.js";
import CamperInfo from "../../components/CamperInfo/CamperInfo.jsx";

function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const currentCamper = useSelector(selectCurrentCamper);
  const isLoading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id]);

  const handleBookingSubmit = (formData) => {
    console.log("Booking data:", formData);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!currentCamper) return <div>Camper not found</div>;

  return (
    <div className={css.camperDetailsPage}>
      <div className="container">
        <CamperInfo camper={currentCamper} showPrice={true} />
        {/* <h2 className={css.camperDetailsPageTitle}>{currentCamper.name}</h2> */}
        <Features
          camper={currentCamper}
          onBookingSubmit={handleBookingSubmit}
        />
      </div>
    </div>
  );
}

export default CamperDetailsPage;
