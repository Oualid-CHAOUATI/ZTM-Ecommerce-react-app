import React, { useContext } from "react";
import { UserContext } from "../../contexts/User.context";
import { f_signOut } from "../../utils/firebase/firebase.utils";

export function SignOutBtn() {

  const signOut = async () => {
    await f_signOut();
  };
  return <span onClick={signOut}>sign out</span>;
}
