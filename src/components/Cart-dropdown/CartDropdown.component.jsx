import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/Cart.context";
import { DropdownProductCard } from "../dropdown-product-card/DropdownProductCard.component";

import "./CartDropdown.styles.css";
export function CartDropdown() {
  const { items } = useContext(CartContext);

  const navigate = useNavigate();

  const gotoCheckoutPage = () => navigate("/checkout");
  return (
    <div className="cart-drowp-down">
      <div className="items flex f-column gap-05">
        {items.map((item) => (
          <DropdownProductCard {...item} />
        ))}
      </div>

      <button className="btn checkout-btn sqr-btn" onClick={gotoCheckoutPage}>
        go to checkout
      </button>
    </div>
  );
}
