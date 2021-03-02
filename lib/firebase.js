import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_QkeFuqZ_h0DnA9Y7nRQLLeM5txRbt3M",
  authDomain: "nextfire-dev.firebaseapp.com",
  databaseURL:
    "https://nextfire-dev-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nextfire-dev",
  storageBucket: "nextfire-dev.appspot.com",
  messagingSenderId: "818573474770",
  appId: "1:818573474770:web:f2d5e7cf10be2cb4f8e60b",
  measurementId: "G-9J6G0F89HF",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
