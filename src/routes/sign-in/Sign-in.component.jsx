import { Link, Outlet } from "react-router-dom";
import "./Sign-in.styles.css";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <>
      <h2>sign in</h2>

      <button onClick={logGoogleUser}>Sign in with google</button>
    </>
  );
};

export default SignIn;
