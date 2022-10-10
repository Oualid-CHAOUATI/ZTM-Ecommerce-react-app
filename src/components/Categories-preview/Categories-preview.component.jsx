import { useContext } from "react";
import { CategoriesContext } from "../../contexts/Categories.context";
import { CategoryPreview } from "../Category-preview/Category-preview.component";

export function CategoriesPreview({ max = 4 }) {
  console.log(useContext(CategoriesContext));

  const categories = useContext(CategoriesContext);
  const keys = Object.keys(categories);

  const categoriesPreviews = keys.map((title) => {
    return <CategoryPreview title={title} list={categories[title]} max={max} />;
  });

  return categoriesPreviews;
}
