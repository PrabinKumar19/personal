import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV9lsKpr2RJhT6fninxKiqPSnAAqIxSs0",
  authDomain: "personal-d4c9d.firebaseapp.com",
  projectId: "personal-d4c9d",
  storageBucket: "personal-d4c9d.appspot.com",
  messagingSenderId: "943277428772",
  appId: "1:943277428772:web:a53be946ce487a2db048b1",
  measurementId: "G-2QXC6GQPNK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
