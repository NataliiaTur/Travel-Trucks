import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import css from "./NotFoundPage.module.css";
import Button from "../../components/common/Button/Button";
import sprite from "../../../public/icons.svg";

function NotFoundPage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
      return;
    }
    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <section className={css.notFoundPage}>
      <div className="container">
        <div className={css.notFoundContent}>
          <h2 className={css.title}>404</h2>
          <h3 className={css.subtitle}>Oops! Page Not Found</h3>
          <p className={css.description}>
            It looks like this route doesn't exist. Let's get you back on track
            to find your perfect campervan!
          </p>

          {countdown > 0 && (
            <div className={css.redirectInfo}>
              <p className={css.redirectText}>
                You will be redirected to the home page in{" "}
                <span className={css.countdown}>{countdown}</span> seconds
              </p>
            </div>
          )}

          <div className={css.actions}>
            <Link to="/">
              <Button className={css.homeButton}>Go to Home Now</Button>
            </Link>
            <Link to="/catalog">
              <Button className={css.catalogButton} variant="outline">
                Browse Catalog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
