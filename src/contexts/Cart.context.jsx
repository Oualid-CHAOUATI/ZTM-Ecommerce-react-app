import { createContext, useEffect, useState } from "react";

const INITIAL_STATE = {
  dropdownOpen: true,
  items: [],
  itemsCount: 0,
  totalPrice: 0,
};
export const CartContext = createContext({
  ...INITIAL_STATE,
  setDropdownOpen: () => {},
  addItemToCart: () => {},
});

const findItem = ({ item, list }) => {
  const itemCopyInList = list.find((element) => element.id == item.id);
  const index = list.indexOf(itemCopyInList);
  return { item: itemCopyInList, index };
};
function addItemQuantity(item, callback) {
  item.quantity += 1;
  callback();
}
function reduceItemQuantity(item, callback) {
  if (item.quantity <= 1) return;

  item.quantity -= 1;
  callback();
}

export const CartProvider = ({ children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const setAndUpdateItems = () => setItems([...items]);

  useEffect(() => {
    setItemsCount(
      items.reduce(
        (total, currentProduct) => total + currentProduct.quantity,
        0
      )
    );

    setTotalPrice(
      items.reduce((total, item) => {
        const { quantity, price } = item;
        total += quantity * price;
        return total;
      }, 0)
    );
  }, [items]);
  const addItemToCart = (itemToAdd) => {
    const { item } = findItem({ item: itemToAdd, list: items });
    if (!item) items.push({ ...itemToAdd, quantity: 1 });
    else addItemQuantity(item, setAndUpdateItems);

    setAndUpdateItems();
  };

  const removeItemFromCart = (itemToRemove) => {
    const { index } = findItem({ item: itemToRemove, list: items });
    items.splice(index, 1);
    setAndUpdateItems();
  };
  const addItemQuantityGlobal = (itemToChange) => {
    const { item } = findItem({ item: itemToChange, list: items });
    if (item) addItemQuantity(item, setAndUpdateItems);
  };
  const reduceItemQuantityGlobal = (itemToChange) => {
    const { item } = findItem({ item: itemToChange, list: items });
    if (item) reduceItemQuantity(item, setAndUpdateItems);
  };
  const value = {
    dropdownOpen,
    setDropdownOpen,
    addItemToCart,
    items,
    itemsCount,
    totalPrice,
    addItemQuantity: addItemQuantityGlobal,
    reduceItemQuantity: reduceItemQuantityGlobal,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children} </CartContext.Provider>;
};
