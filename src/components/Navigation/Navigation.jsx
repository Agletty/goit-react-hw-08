import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import css from "./Navigation.module.css";
import clsx from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const getMenuItemClass = (to) => {
    return to === location.pathname
      ? clsx(css.navLink, css.active)
      : css.navLink;
  };
  return (
    <nav className={css.navMenu}>
      <NavLink to="/" className={getMenuItemClass("/")}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getMenuItemClass("/contacts")}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
