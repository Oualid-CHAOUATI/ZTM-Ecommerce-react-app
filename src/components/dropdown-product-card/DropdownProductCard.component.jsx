import "./DropdownProductCard.styles.css";

export function DropdownProductCard({ id, name, imgURL, price, quantity }) {
  return (
    <div className="dropdown-product flex f-center-align gap-05" key={id}>
      <div className="img-wrapper">
        <img src={imgURL} />
      </div>
      <div className="txt">
        <p className="name">{name}</p>
        <p className="price-quantity">
          <span className="quantity">{quantity}</span>x
          <span className="price">{price}</span>
        </p>
      </div>
    </div>
  );
}
