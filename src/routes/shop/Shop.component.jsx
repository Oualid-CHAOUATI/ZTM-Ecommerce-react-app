import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CategoriesPreview } from "../../components/Categories-preview/Categories-preview.component";
import { CategoryParam } from "../../components/Category-param/Category-param.component";
import { CategoryPreview } from "../../components/Category-preview/Category-preview.component";
import { CategoriesContext } from "../../contexts/Categories.context";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryParam />} />
    </Routes>
  );
};
