import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmJ-eVcCTBPIJeuaXaV94PabIyDotbe6c",
  authDomain: "slack-clone-26e8d.firebaseapp.com",
  projectId: "slack-clone-26e8d",
  storageBucket: "slack-clone-26e8d.appspot.com",
  messagingSenderId: "615148789925",
  appId: "1:615148789925:web:6f72fba30dfb8183ceed4c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider(); // Google sign up pop up

export { auth, provider, db };
