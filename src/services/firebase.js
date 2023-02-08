import { initializeApp } from "firebase/app";
import { doc, getDocs, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC3P3o7jufjiQ7T2KwfHfUSQ_E5vtI1ug8",
  authDomain: "react-app-d0eb2.firebaseapp.com",
  projectId: "react-app-d0eb2",
  storageBucket: "react-app-d0eb2.appspot.com",
  messagingSenderId: "741548259416",
  appId: "1:741548259416:web:4513f7d369ec2000b9722d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore

const productoRef = doc(db, "listaProductos", );
getDocs(productoRef).then((snapshot) => {
    if (snapshot.exist()) {
        console.log(snapshot);
    }
})