import { createContext, useEffect, useReducer, useState } from "react";

const INITIAL_STATE = {
  dropdownOpen: true,
  items: [],
  itemsCount: 0,
  totalPrice: 0,
};

const ACTION_TYPES = {
  ADD_ITEM: "0",

  REMOVE_ONE_ITEM: "1",
  REMOVE_ITEM_COMPLETELY: "2",
  TOGGLE_DROPDOWN_OPEN: "3",
};
const reducer = (state = INITIAL_STATE, { type, item }) => {
  switch (type) {
    case ACTION_TYPES.ADD_ITEM: {
      const { list, price } = red_addItem({ item, list: state.items });
      return {
        ...state,
        items: [...list],
        totalPrice: state.totalPrice + price,
        itemsCount: state.itemsCount + 1,
      };
    }
    case ACTION_TYPES.REMOVE_ONE_ITEM: {
      const result = red_removeOneItem({ item, list: state.items });
      if (result) {
        const { price } = result;
        return {
          ...state,
          totalPrice: state.totalPrice - price,
          itemsCount: state.itemsCount - 1,
        };
      }

      return state;
    }
    case ACTION_TYPES.REMOVE_ITEM_COMPLETELY: {
      const { list, price, quantity } = red_removeItemCompletely({
        item,
        list: state.items,
      });
      return {
        ...state,
        items: [...list],
        totalPrice: state.totalPrice - price * quantity,
        itemsCount: state.itemsCount - quantity,
      };
    }

    case ACTION_TYPES.TOGGLE_DROPDOWN_OPEN:
      return { ...state, dropdownOpen: !state.dropdown };
  }
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

function addItemQuantity(item) {
  if (!item.quantity) {
    item.quantity = 1;
  } else item.quantity += 1;
}

function reduceItemQuantity(item) {
  if (item.quantity <= 1) return;

  item.quantity -= 1;
}

function red_addItem({ item, list }) {
  console.log(list);
  let { item: item_, index } = findItem({ item, list });
  if (!item_) item_ = { ...item };
  addItemQuantity(item_);

  if (index < 0) {
    list = [...list];
    list.push(item_);
  }

  return { list, price: item.price };
}
function red_removeOneItem({ item, list }) {
  const { item: itemToRemove, index } = findItem({ item, list });
  if (itemToRemove.quantity <= 1) return null;

  reduceItemQuantity(item); //modifier dans la liste lle meme
  return { price: item.price };
}

function red_removeItemCompletely({ item, list }) {
  const { index, item: itemToRemove } = findItem({ item, list });
  if (item) {
    list = [...list];
    list.splice(index, 1);
  }

  return { list, quantity: itemToRemove.quantity, price: itemToRemove.price };
}

export const CartProvider = ({ children }) => {
  const [{ dropdownOpen, items, itemsCount, totalPrice }, dispatch] =
    useReducer(reducer, INITIAL_STATE);

  const removeOneItem = (item) =>
    dispatch({ type: ACTION_TYPES.REMOVE_ONE_ITEM, item });
  const removeItemCompletely = (item) =>
    dispatch({ type: ACTION_TYPES.REMOVE_ITEM_COMPLETELY, item });
  const addItem = (item) => dispatch({ type: ACTION_TYPES.ADD_ITEM, item });

  const setDropdownOpen = () =>
    dispatch({ type: ACTION_TYPES.TOGGLE_DROPDOWN_OPEN });
  const value = {
    dropdownOpen,
    setDropdownOpen,
    addItemToCart: addItem,
    items,
    itemsCount,
    totalPrice,
    addItemQuantity: addItem,
    reduceItemQuantity: removeOneItem,
    removeItemFromCart: removeItemCompletely,
  };

  return <CartContext.Provider value={value}>{children} </CartContext.Provider>;
};
