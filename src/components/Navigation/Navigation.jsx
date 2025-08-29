import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import sprite from "../../assets/icons/icons.svg";
import clsx from "clsx";

function Navigation() {
  const setActiveClass = ({ isActive }, baseClass) =>
    clsx(baseClass, isActive && css.active);

  return (
    <nav className={css.nav}>
      <div className="container">
        <div className={css.navInner}>
          <NavLink to="/" className={css.logo}>
            <svg className={css.logoIcon}>
              <use xlinkHref={`${sprite}#icon-TravelTrucks`} />
            </svg>
          </NavLink>

          <div className={css.navLinks}>
            <NavLink
              className={(props) => setActiveClass(props, css.navLinkHome)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={(props) => setActiveClass(props, css.navLinkCatalog)}
              to="/catalog"
            >
              Catalog
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
