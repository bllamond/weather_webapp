// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHw0fswQw8-zyYi6hQ_jq2Sp5ga4sGBQQ",
  authDomain: "webapp-aade2.firebaseapp.com",
  projectId: "webapp-aade2",
  storageBucket: "webapp-aade2.appspot.com",
  messagingSenderId: "16676193994",
  appId: "1:16676193994:web:686efc00267975d5155633",
  measurementId: "G-L4LKLFHQ6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;