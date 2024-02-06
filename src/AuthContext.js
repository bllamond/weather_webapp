import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref ,set} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDHw0fswQw8-zyYi6hQ_jq2Sp5ga4sGBQQ",
  authDomain: "webapp-aade2.firebaseapp.com",
  databaseURL: "https://webapp-aade2-default-rtdb.firebaseio.com",
  projectId: "webapp-aade2",
  storageBucket: "webapp-aade2.appspot.com",
  messagingSenderId: "16676193994",
  appId: "1:16676193994:web:686efc00267975d5155633",
  measurementId: "G-L4LKLFHQ6Z"
};
const AuthContext = createContext();

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);


export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  const putData = (key ,data ) => set(ref(database,key) , data);
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, logIn, signUp, logOut ,putData
        , googleSignIn 
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(AuthContext);
}

export const auth = getAuth();

export default app;