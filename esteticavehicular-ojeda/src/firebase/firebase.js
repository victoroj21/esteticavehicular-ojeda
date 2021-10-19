import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyARv0zXw6aY1eVBIrt22vr1l6iDsRTzwmo",
  authDomain: "esteticavehicular-7b643.firebaseapp.com",
  projectId: "esteticavehicular-7b643",
  storageBucket: "esteticavehicular-7b643.appspot.com",
  messagingSenderId: "575388915780",
  appId: "1:575388915780:web:2f9b3083f12ecc1c684411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;