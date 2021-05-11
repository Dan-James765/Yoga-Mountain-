import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmQRmEAxh4dj3Ddp3aqzFa7EvMgyTY-pA",
  authDomain: "yoga-mountain.firebaseapp.com",
  projectId: "yoga-mountain",
  storageBucket: "yoga-mountain.appspot.com",
  messagingSenderId: "281973635687",
  appId: "1:281973635687:web:c0ce3e9de96f6dd496b2c2",
  measurementId: "G-542XNXW2X4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
