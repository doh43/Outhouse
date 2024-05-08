import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtpnCQFvsTAltfaA81x-AoTdlJvAhJCUU",
  authDomain: "flushfinder-d1eda.firebaseapp.com",
  projectId: "flushfinder-d1eda",
  storageBucket: "flushfinder-d1eda.appspot.com",
  messagingSenderId: "144234136161",
  appId: "1:144234136161:web:233ecda40de1641f75a020",
  measurementId: "G-Q50BCTE2VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);