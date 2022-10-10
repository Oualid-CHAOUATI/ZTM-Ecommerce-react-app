import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";
import { Button, BTNS_TYPES } from "../Button/Button.component";
import { ProductCard_styled } from "./product-card.styles";
import "./product-card.styles.css";

export function ProductCard({ name, imgURL, price, id }) {
  const item = { name, id, imgURL, price };
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => {
    addItemToCart(item);
  };
  return (
    // <div className="product-card" key={id}>

    <ProductCard_styled>
      <h3 className="title">{name}</h3>
      <div className="img-wrapper">
        <img src={imgURL} />
      </div>
      <p className="price">{price}</p>
      <Button styleType={BTNS_TYPES.base} onClick={addToCart}>
        add to cart
      </Button>
    </ProductCard_styled>

    // </div>
  );
}
