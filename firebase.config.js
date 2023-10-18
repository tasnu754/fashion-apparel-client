// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiaSI33SdDFcs0m4Bqhkg5bc1UKb-oGuQ",
  authDomain: "fashion-apparel-2e292.firebaseapp.com",
  projectId: "fashion-apparel-2e292",
  storageBucket: "fashion-apparel-2e292.appspot.com",
  messagingSenderId: "1043973263448",
  appId: "1:1043973263448:web:04ecf04be6314f6b5fba2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;