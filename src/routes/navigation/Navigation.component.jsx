import { Link, Outlet } from "react-router-dom";
import "./Navigation.styles.css";

import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
const Navigation = () => {
  return (
    <>
      <nav className="main-nav">
        <Link className="logo-link" to="/">
          <Logo className="logo" />
        </Link>
        <ul className="nav-menu">
          <li>
            <Link className="nav-link" to="/shop">
              shop
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/sign-in">
              sign in
            </Link>
          </li>
        </ul>
      </nav>
      <h1> NAVIGATION BAR</h1>
      <Outlet />
    </>
  );
};

export default Navigation;
