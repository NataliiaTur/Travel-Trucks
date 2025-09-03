import css from "./CamperDetailsPage.module.css";
import { useParams } from "react-router-dom";
import Features from "../../components/Features/Features.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampersError,
  selectCampersLoading,
  selectCurrentCamper,
} from "../../redux/selectors.js";
import { useEffect, useState } from "react";
import { fetchCamperById } from "../../redux/campersSlice.js";
import CamperInfo from "../../components/CamperInfo/CamperInfo.jsx";
import Gallery from "../../components/Gallery/Gallery.jsx";
import Description from "../../components/Description/Description.jsx";
import Tabs from "../../components/Tabs/Tabs.jsx";

function CamperDetailsPage() {
  const { id } = useParams();
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

  const handleBookingSubmit = (formData) => {
    console.log("Booking data:", formData);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!currentCamper) return <div>Camper not found</div>;

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
            <div>Reviews content (створимо пізніше)</div>
          )}
        </Tabs>
      </div>
    </section>
  );
}

export default CamperDetailsPage;
