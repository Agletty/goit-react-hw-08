import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useAuth } from "../../hooks/useAuth";

const Navigation = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className={css.navbar}>
      <NavLink to="/">Home</NavLink>
      {isSignedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
