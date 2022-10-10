import { createContext, useEffect, useReducer, useState } from "react";
import { f_onAuthStateChanged } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
 
export const ACTION_TYPES = { SET_CURRENT_USER: "setCurrentUser" };

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const initialState = null;
  const [currentUser, dispatch] = useReducer(userReducer, initialState);

  const setCurrentUser = (user) => {
    return dispatch({ type: ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  useEffect(() => {
    const callback = (user) => {
      setCurrentUser(user);
    };

    const unsubscribe = f_onAuthStateChanged(callback);
    return unsubscribe;
    // return ()=>usubscribe();
  }, []);

  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

function userReducer(user, action) {
  console.log("dispatch");

  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SET_CURRENT_USER:
      return payload;
    default:
      throw new Error("unhandled type " + type);
  }
}
