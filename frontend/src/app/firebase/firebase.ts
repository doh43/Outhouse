// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqf8fS9wwy1Dw-28RFUJqptrCWTT8scy4",
  authDomain: "soulage-auth.firebaseapp.com",
  projectId: "soulage-auth",
  storageBucket: "soulage-auth.appspot.com",
  messagingSenderId: "91084198448",
  appId: "1:91084198448:web:c42bfb9352032b6f5e13f5",
  measurementId: "G-TYXV57MG57",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
