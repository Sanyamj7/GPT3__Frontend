import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAt2DBUWCAQZGbFuH5X-ePFzjD0MShXros",
  authDomain: "chatgpt-3289b.firebaseapp.com",
  projectId: "chatgpt-3289b",
  storageBucket: "chatgpt-3289b.appspot.com",
  messagingSenderId: "493055594915",
  appId: "1:493055594915:web:98bc56cb864992935e4a16",
  measurementId: "G-QK6KR1FRLW"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};
