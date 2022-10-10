// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";

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
export const f_signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const f_signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const f_createUserDocFromAuth = async (userAuth, otherInfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  //each user is define with an id ... w're making a search by id

  const docSnapshot = await getDoc(userDocRef); //data checking

  if (!docSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        name: displayName,
        email,
        createdAt,
        ...otherInfo,
      });
    } catch (err) {
      console.log("error");
      console.log(err);
    }
  }

  return [userDocRef, docSnapshot];
};

export const f_createUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const f_logUserFromGoogle = async () => {
  const { user } = await f_signInWithGooglePopup();

  const userDocRef = await f_createUserDocFromAuth(user);
  console.log(userDocRef);
};

export const registerUser = async ({ email, password, name }) => {
  try {
    const response = await f_createUserWithEmailAndPassword(email, password);
    console.log("response = ");
    console.log(response);
    const response_ = await f_createUserDocFromAuth(response.user, { name });

    return response_;
  } catch (err) {
    console.log("error");
    console.log({ err });
    const error = handleError(err.code);
    throw error;
  }
};
export const signinUser = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    console.log(err.code);
    const error = handleError(err.code);
    throw error;
  }
};

function handleError(errorCode) {
  switch (errorCode) {
    case "auth/user-not-found":
      return { email: "email not found" };
      break;
    case "auth/wrong-password":
      return { password: "password not found" };
      break;
    case "auth/invalid-email":
      return { email: "email invalid" };
  }
}

export const f_signOut = async () => {
  const response = await signOut(auth);

  console.log(response);
};

export const f_onAuthStateChanged = (callback) => {
  const response = onAuthStateChanged(auth, callback);

  return response;
};

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
  console.log(objectsToAdd);
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach(async (object) => {
    console.log(object);
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();

  console.log("commit ! ");
};

export const getCategoriesAnDocs = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  // const categoryMap = querySnapshot.ocs
  // console.log(querySnapshot.docs[0].data());
  // const docs = querySnapshot.docs;

  // const categoriesAndItems = querySnapshot.docs.map((docSnapshot) => {
  //   const { title, items } = docSnapshot.data();

  //   return { title, items };
  // });

  const categoryMap = querySnapshot.docs.reduce((map, currentDoc) => {
    let { title, items } = currentDoc.data();
    title = title.toLowerCase();
    map[title] = items;
    return map;
  }, {});

  console.log(categoryMap);

  return categoryMap;
};

// ! transation
// un ensemble d'operations qui senchainent

//
