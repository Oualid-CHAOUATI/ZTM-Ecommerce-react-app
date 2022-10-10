import { Link, Outlet } from "react-router-dom";
import "./Navigation.styles.css";

import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { UserContext } from "../../contexts/User.context";
import { useContext } from "react";
import { SignOutBtn } from "../../components/Sign-out-btn/Sign-out-btn";
import { CartIcon } from "../../components/cart-icon/Cart-icon.component";
import { CartDropdown } from "../../components/Cart-dropdown/CartDropdown.component";
import { CartContext } from "../../contexts/Cart.context";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { dropdownOpen } = useContext(CartContext);

  // const isConnected = currentUser != null;
  const isConnected = currentUser != null;

  const AuthBtns = isConnected ? (
    <SignOutBtn />
  ) : (
    <>
      <li>
        <Link className="nav-link" to="/auth/sign-in">
          sign in
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/auth/sign-up">
          sign up
        </Link>
      </li>
    </>
  );
  return (
    <>
      <nav className="main-nav reset-li-a flex gap-1">
        <Link className="logo-link" to="/">
          <Logo className="logo" />
        </Link>
        <ul className="nav-menu flex gap-1">
          <li>
            <Link className="nav-link" to="/shop">
              shop
            </Link>
          </li>
          {AuthBtns}
          <CartIcon />
        </ul>
        {dropdownOpen && <CartDropdown />}
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
