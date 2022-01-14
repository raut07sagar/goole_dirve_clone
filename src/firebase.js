import firebase from "firebase";
const firebaseConfig = {
  
    apiKey: "AIzaSyB80shjgscKCTg27jwLimcjZaQTUQWeAng",
    authDomain: "gooledrive-clone.firebaseapp.com",
    projectId: "gooledrive-clone",
    storageBucket: "gooledrive-clone.appspot.com",
    messagingSenderId: "797478539908",
    appId: "1:797478539908:web:58de33e92c327396e1a8d1"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, storage, auth, provider }