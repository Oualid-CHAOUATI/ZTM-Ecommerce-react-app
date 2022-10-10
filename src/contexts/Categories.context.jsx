import { createContext, useContext, useEffect, useState } from "react";
import { SHOP_DATA } from "../shop-data";
import {
  addCollectionAndDocs,
  getCategoriesAnDocs,
} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const action = async () => {
      const allCategories = await getCategoriesAnDocs();

      setCategories(allCategories);
    };

    action();
  }, []);
  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};
