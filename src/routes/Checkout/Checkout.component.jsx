import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

import "./Checkout.styles.css";

export function Checkout() {
  const {
    items,
    addItemQuantity,
    reduceItemQuantity,
    removeItemFromCart,
    totalPrice,
  } = useContext(CartContext);

  return (
    <section className="checkout-section">
      <table>
        <thead>
          <tr>
            <td>product desc</td>
            <td>qyantity</td>
            <td>price</td>
            <td>remove</td>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            const { id, imgURL, price, quantity, name } = item;
            const addQuantity = () => addItemQuantity(item);
            const reduceQuantity = () => reduceItemQuantity(item);
            const removeItem = () => {
              removeItemFromCart(item);
            };
            return (
              <tr className="checkout-product-card  " key={id}>
                <td className="description  flex f-center-align">
                  <div className="img-wrapper">
                    <img src={imgURL} />
                  </div>
                  <div className="description">{name}</div>
                </td>

                <td className="quantity-wrapper ">
                  <div className="iflex gap-05">
                    <button onClick={reduceQuantity}>{"<"}</button>
                    {quantity}
                    <button onClick={addQuantity}>{">"}</button>
                  </div>
                </td>

                <td className="price">{price}</td>

                <td>
                  <button className="remove-btn" onClick={removeItem}>
                    x
                  </button>
                </td>
              </tr>
            );
          })}
          {/* </tbody> */}

          <tr>
            <td className="total-price-cell">Total {totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
