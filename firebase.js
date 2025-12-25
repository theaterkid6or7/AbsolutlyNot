// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtEkZJ_BsxGJC88vHp3ikPnGn9WJKdzH0",
  authDomain: "absolutlynot-fe034.firebaseapp.com",
  projectId: "absolutlynot-fe034",
  storageBucket: "absolutlynot-fe034.firebasestorage.app",
  messagingSenderId: "655001720436",
  appId: "1:655001720436:web:f2396092571b8d17e26321",
  measurementId: "G-M3YMSX86D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
