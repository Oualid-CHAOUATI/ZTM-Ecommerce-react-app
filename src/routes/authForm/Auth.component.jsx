import { Link, Outlet } from "react-router-dom";
import { GoogleSignIntBtn } from "../../components/google-Sign-in/Google-sign-in-btn.components";
import { f_logUserFromGoogle } from "../../utils/firebase/firebase.utils";

const Auth = () => {
  return (
    <>
      <Outlet />

      <div>
        <GoogleSignIntBtn>Sign in with google</GoogleSignIntBtn>
      </div>
    </>
  );
};

export default Auth;
