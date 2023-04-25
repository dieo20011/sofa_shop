
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDkmZcVwjkG_j1sEBINSRIFrvsZSwjC-y0",
  authDomain: "shopsofa-2e7f8.firebaseapp.com",
  projectId: "shopsofa-2e7f8",
  storageBucket: "shopsofa-2e7f8.appspot.com",
  messagingSenderId: "1016346245817",
  appId: "1:1016346245817:web:2149674869f54053047968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;