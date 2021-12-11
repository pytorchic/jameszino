// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDgJ2DIpTRW03L2yRQgTcZOsdwmz7XFFg",
  authDomain: "jameszino-b58d4.firebaseapp.com",
  projectId: "jameszino-b58d4",
  storageBucket: "jameszino-b58d4.appspot.com",
  messagingSenderId: "762973209788",
  appId: "1:762973209788:web:57360e456d984975b63cb9",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// getting the text value from the database
var bigOne = document.getElementById('bigOne');

const db = getDatabase();
  set(ref(db, 'users/james'), {
    birthday: "12/14/1997",
  });
