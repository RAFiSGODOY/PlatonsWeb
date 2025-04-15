// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEFz_GfaRTeGX3gmJpO0X3T1KZ-cKiWpA",
  authDomain: "platonsmotoclube.firebaseapp.com",
  projectId: "platonsmotoclube",
  storageBucket: "platonsmotoclube.firebasestorage.app",
  messagingSenderId: "468846566430",
  appId: "1:468846566430:web:845f6c3627631e3db4220f",
  measurementId: "G-95K959GTZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);