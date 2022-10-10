import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/Categories.context";
import { CategoryPreview } from "../Category-preview/Category-preview.component";

export function CategoryParam({}) {
  console.log(useContext(CategoriesContext));

  const { category } = useParams();
  const categories = useContext(CategoriesContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("paraams");
    setProducts(categories[category]||[]);
  }, [category, categories]);

  return <CategoryPreview title={category} list={products} />;
}
