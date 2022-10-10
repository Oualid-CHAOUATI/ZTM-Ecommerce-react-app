import { createContext, useContext, useEffect, useState } from "react";
import { SHOP_DATA } from "../shop-data";
import { addCollectionAndDocs } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    addCollectionAndDocs("categories", SHOP_DATA);
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
