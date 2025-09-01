import React from "react";
import { Button } from "../../components/common/Button/Button.jsx";
import css from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/catalog");
  };

  return (
    <div className={css.home}>
      <div className="container">
        <h1 className={css.homeTitle}>Campers of your dreams</h1>
        <p className={css.homeText}>
          You can find everything you want in our catalog
        </p>
        <Button className={css.homeButton} onClick={handleNavigate}>
          View Now
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
