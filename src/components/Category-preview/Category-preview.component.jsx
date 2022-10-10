import { Link } from "react-router-dom";
import { ProductCard } from "../product-card/Product-card.component";

export function CategoryPreview({ title, list, max = -1 }) {
  // debugger;
  const shotenedList = [...list];
  if (max > 0) shotenedList.splice(max);

  const productsCards = shotenedList.map((product) => {
    const { name, imageUrl: imgURL, price, id } = product;
    return <ProductCard {...{ name, imgURL, price, id }} />;
  });

  return (
    <div className="category-wrapper" key={title}>
      <h2 className="category-title">
        <Link to={title.toLowerCase()}>{title}</Link>
      </h2>
      <div className="products-cards-wrapper flex f-wrap gap-1">
        {productsCards}
      </div>
    </div>
  );
}
