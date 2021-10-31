
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJoZmqcZP29uEK3luc3UoXak-sRpHNJLg",
  authDomain: "crud-25edf.firebaseapp.com",
  projectId: "crud-25edf",
  storageBucket: "crud-25edf.appspot.com",
  messagingSenderId: "164132278383",
  appId: "1:164132278383:web:30acc3e22ad0de9abebd9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}