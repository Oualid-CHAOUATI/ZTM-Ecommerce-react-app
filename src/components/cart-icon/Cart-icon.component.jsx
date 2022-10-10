import React, { useContext } from "react";

import "./Cart-icon.styles.css";
import { ReactComponent as CartSVG } from "../../assets/icons/shopping-bag.svg";
import { CartContext } from "../../contexts/Cart.context";
export function CartIcon({ children }) {
  const { setDropdownOpen, itemsCount } = useContext(CartContext);

  const clickHandler = () => {
    setDropdownOpen((lastValue) => !lastValue);
  };
  return (
    <div
      className="cart-icon-wrapper flex f-column f-center btn"
      onClick={clickHandler}
    >
      <CartSVG id="cart-svg" />
      <span>{itemsCount}</span>
    </div>
  );
}
