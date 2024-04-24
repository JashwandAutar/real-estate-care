import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtQOa4uGyQjdAqPqg2zo-GolVT3qLRhMw",
  authDomain: "real-estate-care-f7b63.firebaseapp.com",
  projectId: "real-estate-care-f7b63",
  storageBucket: "real-estate-care-f7b63.appspot.com",
  messagingSenderId: "832644646164",
  appId: "1:832644646164:web:1c7c49af51eb4c3052ee01",
  measurementId: "G-KFTRDJX015"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }