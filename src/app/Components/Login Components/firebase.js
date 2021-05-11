import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUGyemRNluzPxOtP4VEXIzgLWjcyg407w",
  authDomain: "tesla-clone-48498.firebaseapp.com",
  projectId: "tesla-clone-48498",
  storageBucket: "tesla-clone-48498.appspot.com",
  messagingSenderId: "737056550563",
  appId: "1:737056550563:web:c99d6314ce2486d2b95916",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
