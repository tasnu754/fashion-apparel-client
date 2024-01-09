// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtn4Dq2iJv6YDc2iJOFwY14cgbMsagRtI",
  authDomain: "fashion-4e7f9.firebaseapp.com",
  projectId: "fashion-4e7f9",
  storageBucket: "fashion-4e7f9.appspot.com",
  messagingSenderId: "1056600108370",
  appId: "1:1056600108370:web:4c39d34e62f76669129e8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;