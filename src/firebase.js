import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9CbW1IuiWmZDNMi1o8TCDoZqeK5IYXIA",
  authDomain: "todo-app-react-b0175.firebaseapp.com",
  projectId: "todo-app-react-b0175",
  storageBucket: "todo-app-react-b0175.appspot.com",
  messagingSenderId: "786659814173",
  appId: "1:786659814173:web:497872044cbd2b434fcff4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)