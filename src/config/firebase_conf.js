// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXzyodsbZFz30x6Zq_HMJM8trRwV5HE_I",
  authDomain: "emmanchats.firebaseapp.com",
  projectId: "emmanchats",
  storageBucket: "emmanchats.appspot.com",
  messagingSenderId: "922025194406",
  appId: "1:922025194406:web:991615c1844f449b4f5567",
  measurementId: "G-YHLPSCFYSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);