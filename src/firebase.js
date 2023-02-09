import firebase from 'firebase/app';
import 'firebase/firestore';
 

const firebaseConfig = {
    apiKey: "AIzaSyC4IJWCmnCQzFfwz_lUN29ZymzmV8l5MUA",
    authDomain: "codeeditor-de2c0.firebaseapp.com",
    databaseURL: "https://codeeditor-de2c0-default-rtdb.firebaseio.com",
    projectId: "codeeditor-de2c0",
    storageBucket: "codeeditor-de2c0.appspot.com",
    messagingSenderId: "843535868554",
    appId: "1:843535868554:web:4f4182fa458011fe384373",
    measurementId: "G-CSYT5V5EWG"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db