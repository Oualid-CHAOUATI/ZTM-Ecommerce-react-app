// import { Link, Outlet } from "react-router-dom";
// import "./Sign-in.styles.css";
// import {
//   auth, //redirectect
//   createUserDocFromAuth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";

// import { getRedirectResult } from "firebase/auth";

// import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
// import { useEffect } from "react";
// import SignUpForm from "../../components/sign-up/Sign-up-form.component";
// const SignIn = () => {
//   const logGoogleUser = async () => {
//     const { user } = await signInWithGooglePopup();

//     const userDocRef = await createUserDocFromAuth(user);
//     console.log(userDocRef);
//   };

//   useEffect(() => {
//     const func = async () => {
//       const response = await getRedirectResult(auth); //auth keeps track of all these authentifications  hapenning through out the application

//       if (response) {
//         const { user } = response;
//         const userDocRef = await createUserDocFromAuth(user);
//         console.log(userDocRef);
//       }
//       console.log(response);
//     };

//     func();
//   }, []);
//   return (
//     <>
//       <h2>sign in</h2>

//       <SignUpForm />

//       <button className="sqr-btn" onClick={logGoogleUser}>
//         Sign in with google
//       </button>
//       <button className="sqr-btn" onClick={signInWithGoogleRedirect}>
//         Sign in with google Redcirect
//       </button>
//     </>
//   );
// };

// export default SignIn;
