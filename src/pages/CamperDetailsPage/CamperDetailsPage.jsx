import css from "./CamperDetailsPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Features from "../../components/Features/Features.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampersError,
  selectCampersLoading,
  selectCurrentCamper,
} from "../../redux/selectors.js";
import { useEffect, useState } from "react";
import { fetchCamperById } from "../../redux/operations.js";
import CamperInfo from "../../components/CamperInfo/CamperInfo.jsx";
import Gallery from "../../components/Gallery/Gallery.jsx";
import Description from "../../components/Description/Description.jsx";
import Tabs from "../../components/Tabs/Tabs.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";
import Loader from "../../components/common/Loader/Loader.jsx";

function CamperDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("features");

  const currentCamper = useSelector(selectCurrentCamper);
  const isLoading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (error && error.includes("404")) {
      navigate("/404", { replace: true });
    }
  }, [error, navigate]);

  if (error && !error.includes("404")) {
    return <div>Error: {error}</div>;
  }

  const handleBookingSubmit = (formData) => {
    console.log("Booking data:", formData);
  };

  if (isLoading || !currentCamper) return <Loader />;
  if (error) return <div>Error...</div>;

  return (
    <section className={css.camperDetailsPage}>
      <div className="container">
        <CamperInfo camper={currentCamper} showPrice={true} />
        <Gallery images={currentCamper.gallery} />
        <Description text={currentCamper.description} />

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
          {activeTab === "features" && (
            <Features
              camper={currentCamper}
              onBookingSubmit={handleBookingSubmit}
            />
          )}
          {activeTab === "reviews" && (
            <Reviews
              camper={currentCamper}
              onBookingSubmit={handleBookingSubmit}
            />
          )}
        </Tabs>
      </div>
    </section>
  );
}

export default CamperDetailsPage;
