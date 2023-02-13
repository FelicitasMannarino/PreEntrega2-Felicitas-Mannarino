// Import the functions you need from the SDKs you need
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3P3o7jufjiQ7T2KwfHfUSQ_E5vtI1ug8",
  authDomain: "react-app-d0eb2.firebaseapp.com",
  projectId: "react-app-d0eb2",
  storageBucket: "react-app-d0eb2.appspot.com",
  messagingSenderId: "741548259416",
  appId: "1:741548259416:web:4513f7d369ec2000b9722d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



   