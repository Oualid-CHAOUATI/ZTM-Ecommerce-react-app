// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZeP3TdnwIXC7wrZ_oToEZTB_9kQIZoZ4",
  authDomain: "ecommerce-612a3.firebaseapp.com",
  projectId: "ecommerce-612a3",
  storageBucket: "ecommerce-612a3.appspot.com",
  messagingSenderId: "162757229920",
  appId: "1:162757229920:web:7801f7a5b7d6e898857205",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const docSnapshot = await getDoc(userDocRef);

//   console.log(userDocRef);
//   console.log(docSnapshot);
//   console.log(docSnapshot.exists());

if(!docSnapshot.exists()){

const {displayName,email}=userAuth;
const createdAt=new Date();
try{
await setDoc(userDocRef,{
    name:displayName,
    email,
    createdAt
})

}catch(err){
    console.log("error");
    console.log(err);
}}


return userDocRef;

};
