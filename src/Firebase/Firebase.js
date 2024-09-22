import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC8f8AftsVf03KlF6f1wA3MgUxQzTcPmro",
  authDomain: "fridaycharm-3d0b5.firebaseapp.com",
  projectId: "fridaycharm-3d0b5",
  storageBucket: "fridaycharm-3d0b5.appspot.com",
  messagingSenderId: "240032071503",
  appId: "1:240032071503:web:11f65007cedaa60f8a0f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
export default app
