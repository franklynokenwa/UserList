// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBffDF_EfzGL5iyxYo5Nywr7flGxqH95Z4",
  authDomain: "user-accounts-ac729.firebaseapp.com",
  projectId: "user-accounts-ac729",
  storageBucket: "user-accounts-ac729.appspot.com",
  messagingSenderId: "316071600971",
  appId: "1:316071600971:web:e8c51e63f3778ef1ec3ece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;