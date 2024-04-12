import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  const location = useLocation();
  const getMenuItemClass = (to) => {
    return to === location.pathname ? clsx(css.link, css.active) : css.link;
  };
  return (
    <div className={css.authMenu}>
      <NavLink className={getMenuItemClass("/register")} to="/register">
        Register
      </NavLink>
      <NavLink className={getMenuItemClass("/login")} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
